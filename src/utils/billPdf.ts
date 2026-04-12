import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import toast from 'react-hot-toast';

/**
 * Generate a PDF from an HTML element (the printable document content).
 * Uses html2canvas to render at high resolution, then jsPDF to create the PDF.
 */
export async function generatePdfFromElement(
  el: HTMLElement,
  documentName: string
): Promise<{ blob: Blob; filename: string } | null> {
  try {
    const canvas = await html2canvas(el, {
      scale: 3, // High resolution for print quality
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      // Remove any extra spacing from the captured area
      scrollX: 0,
      scrollY: 0,
      windowWidth: el.scrollWidth,
      windowHeight: el.scrollHeight,
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Detect POS receipt (narrow width, ~80mm = ~302px at 96dpi, but at scale 3 = ~906px)
    const isPOS = imgWidth < 1200;
    const pdfWidth = isPOS ? 80 : 210; // mm
    const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: isPOS ? [80, Math.max(pdfHeight, 50)] : 'a4',
    });

    if (!isPOS && pdfHeight > 297) {
      // Multi-page A4
      let y = 0;
      const pageHeight = 297;
      while (y < pdfHeight) {
        if (y > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -y, pdfWidth, pdfHeight);
        y += pageHeight;
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    const filename = `${documentName}-${new Date().toISOString().split('T')[0]}.pdf`;
    return { blob: pdf.output('blob'), filename };
  } catch (err) {
    console.error('PDF generation failed:', err);
    return null;
  }
}

/**
 * Download a PDF blob as a file.
 */
export function downloadPdfBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Format a Sri Lankan phone number for WhatsApp.
 * Converts 0xx → 94xx format.
 */
export function formatPhoneForWhatsApp(phone: string): string {
  let p = phone.replace(/[\s\-()]/g, '');
  if (p.startsWith('0')) p = '94' + p.substring(1);
  if (!p.startsWith('+') && !p.startsWith('94')) p = '94' + p;
  return p.replace('+', '');
}

/**
 * Open WhatsApp with a pre-filled message for the customer.
 */
export function openWhatsApp(phone: string, customerName: string, documentName: string) {
  const formatted = formatPhoneForWhatsApp(phone);
  const message = encodeURIComponent(
    `Dear ${customerName},\n\nPlease find your ${documentName} from Onelka Jewellery.\n\nThank you for your trust!\n— Onelka Jewellery`
  );
  window.open(`https://wa.me/${formatted}?text=${message}`, '_blank');
}

/**
 * Generate PDF from a print page by opening a hidden iframe,
 * waiting for content to load, then capturing it.
 * This is used from table pages where we don't have the print content rendered.
 */
export async function generatePdfFromPrintPage(
  printUrl: string,
  documentName: string,
): Promise<{ blob: Blob; filename: string } | null> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:900px;height:1200px;border:none;opacity:0;pointer-events:none;';
    document.body.appendChild(iframe);

    iframe.onload = async () => {
      // Wait for content to render
      await new Promise(r => setTimeout(r, 1500));

      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) { resolve(null); return; }

        // Find the actual printable content (skip toolbar)
        const printContent = doc.querySelector('.print-capture-area') as HTMLElement
          || doc.querySelector('.pos-receipt') as HTMLElement
          || doc.querySelector('.print-preview-body') as HTMLElement
          || doc.body;

        const result = await generatePdfFromElement(printContent, documentName);
        resolve(result);
      } catch (err) {
        console.error('PDF from print page failed:', err);
        resolve(null);
      } finally {
        document.body.removeChild(iframe);
      }
    };

    iframe.onerror = () => {
      document.body.removeChild(iframe);
      resolve(null);
    };

    iframe.src = printUrl;
  });
}

/**
 * High-level: Download PDF for an invoice/clearance directly from the table page.
 * Opens a hidden iframe → captures → downloads.
 */
export async function downloadBillPdf(
  printUrl: string,
  documentName: string,
): Promise<boolean> {
  toast.loading('Generating PDF...', { id: 'pdf-gen' });
  try {
    const result = await generatePdfFromPrintPage(printUrl, documentName);
    if (!result) {
      toast.error('Failed to generate PDF', { id: 'pdf-gen' });
      return false;
    }
    downloadPdfBlob(result.blob, result.filename);
    toast.success(`Downloaded: ${result.filename}`, { id: 'pdf-gen' });
    return true;
  } catch {
    toast.error('Failed to download PDF', { id: 'pdf-gen' });
    return false;
  }
}

/**
 * High-level: Download PDF then open WhatsApp.
 */
export async function downloadAndWhatsApp(
  printUrl: string,
  documentName: string,
  customerPhone: string,
  customerName: string,
): Promise<void> {
  toast.loading('Generating PDF & opening WhatsApp...', { id: 'wa-gen' });
  try {
    const result = await generatePdfFromPrintPage(printUrl, documentName);
    if (result) {
      downloadPdfBlob(result.blob, result.filename);
      toast.success(`Downloaded: ${result.filename}`, { id: 'wa-gen', duration: 3000 });
    } else {
      toast.dismiss('wa-gen');
    }
    openWhatsApp(customerPhone, customerName, documentName);
  } catch {
    toast.error('Failed to process', { id: 'wa-gen' });
  }
}
