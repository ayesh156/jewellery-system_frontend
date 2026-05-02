import { forwardRef } from 'react';
import type { Invoice, Customer, CompanyInfo } from '../types/index';
import { formatCurrency, formatDate, formatWeight } from '../utils/formatters';

interface PrintableInvoiceProps {
  invoice: Invoice;
  customer?: Customer;
  company?: CompanyInfo;
}

const defaultCompany: CompanyInfo = {
  name: 'Onelka Jewellery',
  tagline: 'Exquisite Craftsmanship Since 1985',
  address: 'Makandura, Matara.',
  city: 'Matara',
  country: 'Sri Lanka',
  phone: '0770400789',
  email: 'onelkajewellery95@gmail.com',
};

export const PrintableInvoice = forwardRef<HTMLDivElement, PrintableInvoiceProps>(
  ({ invoice, customer, company = defaultCompany }, ref) => {

    const itemDiscounts = invoice.items.reduce((sum, item) => {
      const orig = item.originalPrice || item.unitPrice;
      const d = (orig - item.unitPrice) * item.quantity;
      return sum + (d > 0 ? d : 0);
    }, 0);

    return (
      <div ref={ref} className="inv-root">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 10mm 12mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .inv-root {
              width: 100% !important;
              max-width: 100% !important;
              padding: 8mm !important; 
              margin: 0 !important;
              box-shadow: none !important;
              font-size: 8.5pt !important;
            }
            .no-print { display: none !important; }
          }

          /* ── ROOT ── */
          .inv-root {
            width: 186mm;
            min-height: 257mm;
            margin: 0 auto;
            padding: 8mm 10mm;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9pt;
            color: #111;
            line-height: 1.4;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            box-sizing: border-box;
          }

          /* ── HEADER ── */
          .inv-header {
            position: relative;
            text-align: center;
            border: 1.5pt solid #111;
            padding: 3mm 42mm 3mm 42mm;
            min-height: 28mm;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .inv-header-left {
            position: absolute;
            left: 3mm;
            top: 50%;
            transform: translateY(-50%);
            text-align: left;
          }
          .inv-header-right {
            position: absolute;
            right: 3mm;
            top: 3mm;
            font-size: 8pt;
            color: #333;
            text-align: right;
          }
          .inv-logo-name-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-bottom: 2mm;
          }
          .inv-company-sinhala-large {
            font-size: 26pt; font-weight: 900; color: #111;
            letter-spacing: 1px; line-height: 1.1; margin: 0;
            font-family: 'Noto Sans Sinhala', sans-serif;
          }
          .inv-company-name {
            font-size: 9pt; font-weight: 600; letter-spacing: 2px;
            text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
          }
          .inv-company-contact { font-size: 7.5pt; color: #555; line-height: 1.7; }
          .inv-form-label { font-size: 7.5pt; color: #666; }
          .inv-form-no { font-size: 9pt; font-weight: 700; }

          /* ── TITLE BAR ── */
          .inv-title-bar {
          border-left: 1.5pt solid #111; border-right: 1.5pt solid #111;
            border-bottom: 1.5pt solid #111;
            display: flex; align-items: stretch;
          }
          .inv-title-en {
            flex: 1; text-align: center; font-size: 13pt; font-weight: 800;
            letter-spacing: 3px; text-transform: uppercase; padding: 2mm 0;
            border-right: 1pt solid #111;
          }
          .inv-title-si {
            flex: 1; text-align: center; font-size: 12pt; font-weight: 700;
            padding: 2mm 0; color: #111;
          }

          /* ── SECTION ── */
          .inv-section {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1pt solid #111;
          }
          .inv-section-header {
            background: #f0f0f0; border-bottom: 1pt solid #111;
            padding: 1mm 3mm; display: flex; justify-content: space-between; align-items: center;
          }
          .inv-section-title-en { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .inv-section-title-si { font-size: 8.5pt; font-weight: 600; color: #333; }

          /* ── INFO GRID ── */
          .inv-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .inv-info-cell {
            padding: 1.5mm 3mm; border-right: 0.5pt solid #bbb; border-bottom: 0.5pt solid #ddd;
          }
          .inv-info-cell:nth-child(even) { border-right: none; }
          .inv-info-cell.full { grid-column: 1 / -1; border-right: none; }
          .inv-field-label { font-size: 7.5pt; color: #666; display: block; margin-bottom: 0.3mm; }
          .inv-field-label-si { font-size: 7.5pt; color: #888; }
          .inv-field-value { font-size: 10pt; font-weight: 600; color: #000; display: block; }

          /* ── STATUS ── */
          .inv-status {
            display: inline-block; padding: 1mm 3mm; border: 1pt solid #333;
            font-size: 8pt; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          }

          /* ── TABLE ── */
          .inv-table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
          .inv-table th {
            padding: 1.5mm 2mm; background: #f0f0f0; border: 0.5pt solid #999;
            font-size: 7.5pt; font-weight: 700; text-align: center; text-transform: uppercase;
          }
          .inv-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
          .inv-table td { padding: 2mm; border: 0.5pt solid #bbb; vertical-align: middle; }
          .inv-table td.center { text-align: center; }
          .inv-table td.right { text-align: right; }
          .inv-item-sub { font-size: 7.5pt; color: #555; }
          .inv-table tfoot td { background: #f5f5f5; font-weight: 700; border: 0.5pt solid #999; }

          /* ── TOTALS ── */
          .inv-totals-row {
            display: flex; justify-content: space-between;
            padding: 1.5mm 3mm; border-bottom: 0.5pt solid #ddd; font-size: 9pt;
          }
          .inv-totals-row:last-child { border-bottom: none; }
          .inv-totals-row.highlight {
            font-size: 11pt; font-weight: 700; background: #f9f9f9;
            border-top: 1pt solid #555; border-bottom: none;
          }
          .inv-totals-row.balance {
            border: 1pt solid #333; margin: 2mm 3mm 0; font-weight: 700;
          }
          .inv-totals-label { color: #444; }
          .inv-totals-label .si { font-size: 7.5pt; color: #888; display: block; }
          .inv-totals-value { font-weight: 600; }

          /* ── NOTES / TERMS ── */
          .inv-box {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1pt solid #111;
            padding: 2mm 3mm;
          }
          .inv-box-cap {
            font-size: 7.5pt; font-weight: 700; text-transform: uppercase;
            letter-spacing: 1px; color: #555; margin-bottom: 1.5mm;
          }
          .inv-box p { font-size: 8.5pt; color: #444; margin: 0; }
          .inv-terms-list {
            margin: 0; padding-left: 4mm;
            font-size: 7.5pt; color: #444; line-height: 1.7; list-style-type: disc;
          }

          /* ── SIGNATURES ── */
          .inv-sig-row {
            display: flex; justify-content: space-between;
            padding: 4mm 3mm 2mm; gap: 6mm;
          }
          .inv-sig-box { flex: 1; border: 0.75pt solid #555; padding: 2mm 3mm; text-align: center; }
          .inv-sig-space { height: 12mm; }
          .inv-sig-label { border-top: 0.75pt solid #333; padding-top: 1.5mm; font-size: 8.5pt; font-weight: 700; }
          .inv-sig-label .si { font-size: 8pt; color: #555; font-weight: 600; }

          /* ── FOOTER ── */
          .inv-footer {
            margin: 0; text-align: center; font-size: 7.5pt; color: #888;
            border-top: 0.5pt solid #ccc; padding: 1.5mm 3mm;
          }
        `}</style>

        {/* ── HEADER ── */}
        <div className="inv-header">

          {/* Absolute left — logo + address/tel/email below */}
          <div className="inv-header-left">
            <img
              src="/logo.jpg" alt="Logo"
              style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '4px', display: 'block', marginBottom: '1.5mm' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div style={{ fontSize: '7pt', color: '#555', lineHeight: 1.7 }}>
              {company.address}, {company.city}<br />
              Tel: {company.phone}{company.phone2 ? ` / ${company.phone2}` : ''}<br />
              {company.email}
            </div>
          </div>

          {/* Absolute right — Form No & Branch */}
          <div className="inv-header-right">
            <div className="inv-form-label">Form No. / පෝරම අංකය</div>
            <div className="inv-form-no">{invoice.invoiceNumber}</div>
            <div style={{ marginTop: '2mm' }}>
              <div className="inv-form-label">Branch / ශාඛාව</div>
              <div className="inv-form-no">Head Office</div>
            </div>
          </div>

          {/* Center — Sinhala name, English name only */}
          <div className="inv-logo-name-row">
            <div className="inv-company-sinhala-large">ඔනෙල්කා ජුවලරි</div>
          </div>
          <div className="inv-company-name">{company.name}</div>

        </div>

        {/* ── TITLE BAR ── */}
        <div className="inv-title-bar">
          <div className="inv-title-en">INVOICE</div>
          <div className="inv-title-si">ඉන්වොයිස්</div>
        </div>

        {/* ── SECTION 1: BILL TO ── */}
        <div className="inv-section">
          <div className="inv-section-header">
            <span className="inv-section-title-en">Bill To &amp; Invoice Details</span>
            <span className="inv-section-title-si">ගනුදෙනුකරු සහ ඉන්වොයිස් විස්තර</span>
          </div>
          <div className="inv-info-grid">
            <div className="inv-info-cell">
              <span className="inv-field-label">Customer Name <span className="inv-field-label-si">/ ගනුදෙනුකරු නම</span></span>
              <span className="inv-field-value">{invoice.customerName}</span>
            </div>
            <div className="inv-info-cell">
              <span className="inv-field-label">Invoice Date <span className="inv-field-label-si">/ ඉන්වොයිස් දිනය</span></span>
              <span className="inv-field-value">{formatDate(invoice.issueDate)}</span>
            </div>
            <div className="inv-info-cell">
              <span className="inv-field-label">Phone <span className="inv-field-label-si">/ දුරකථනය</span></span>
              <span className="inv-field-value">{invoice.customerPhone || customer?.phone || '—'}</span>
            </div>
            <div className="inv-info-cell">
              <span className="inv-field-label">Due Date <span className="inv-field-label-si">/ ගෙවිය යුතු දිනය</span></span>
              <span className="inv-field-value">{invoice.dueDate ? formatDate(invoice.dueDate) : '—'}</span>
            </div>
            <div className="inv-info-cell">
              <span className="inv-field-label">Status <span className="inv-field-label-si">/ තත්ත්වය</span></span>
              <span className="inv-field-value">
                <span className="inv-status">{invoice.status.toUpperCase()}</span>
              </span>
            </div>
            <div className="inv-info-cell">
              <span className="inv-field-label">Payment Method <span className="inv-field-label-si">/ ගෙවීමේ ක්‍රමය</span></span>
              <span className="inv-field-value">{invoice.paymentMethod ? invoice.paymentMethod.replace('-', ' ').toUpperCase() : '—'}</span>
            </div>
            {(invoice.customerAddress || customer?.address) && (
              <div className="inv-info-cell full">
                <span className="inv-field-label">Address <span className="inv-field-label-si">/ ලිපිනය</span></span>
                <span className="inv-field-value" style={{ fontSize: '9pt' }}>
                  {invoice.customerAddress || customer?.address}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION 2: ITEMS TABLE ── */}
        <div className="inv-section">
          <div className="inv-section-header">
            <span className="inv-section-title-en">Items / භාණ්ඩ විස්තරය</span>
            <span className="inv-section-title-si">Jewellery Items</span>
          </div>
          <table className="inv-table">
            <thead>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '40%' }}>Description<span className="si">විස්තරය</span></th>
                <th style={{ width: '10%' }}>Karat<span className="si">කැරට්</span></th>
                <th style={{ width: '13%' }}>Weight<span className="si">බර</span></th>
                <th style={{ width: '7%' }}>Qty<span className="si">ගණන</span></th>
                <th style={{ width: '25%' }}>Amount<span className="si">මුදල</span></th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={item.id}>
                  <td className="center" style={{ color: '#888' }}>{String(index + 1).padStart(2, '0')}</td>
                  <td>
                    <strong>{item.productName}</strong>
                    <div className="inv-item-sub">
                      {item.metalType.toUpperCase()}
                      {item.karat && ` · ${item.karat}`}
                      {item.sku && ` · SKU: ${item.sku}`}
                    </div>
                  </td>
                  <td className="center">{item.karat || '—'}</td>
                  <td className="center">{formatWeight(item.metalWeight)}</td>
                  <td className="center">{item.quantity}</td>
                  <td className="right" style={{ fontWeight: 600 }}>{formatCurrency(item.total)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} style={{ textAlign: 'right', fontSize: '8pt', paddingRight: '3mm' }}>
                  Total / මුළු එකතුව
                </td>
                <td className="right">{formatCurrency(invoice.items.reduce((s, i) => s + i.total, 0))}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* ── SECTION 3: TOTALS ── */}
        <div className="inv-section">
          <div className="inv-section-header">
            <span className="inv-section-title-en">Payment Summary / ගෙවීම් සාරාංශය</span>
            <span className="inv-section-title-si">Financial Details</span>
          </div>

          {itemDiscounts > 0 && (
            <div className="inv-totals-row">
              <span className="inv-totals-label">Item Discounts <span className="si">භාණ්ඩ වට්ටම්</span></span>
              <span className="inv-totals-value">− {formatCurrency(itemDiscounts)}</span>
            </div>
          )}
          {invoice.discount > 0 && (
            <div className="inv-totals-row">
              <span className="inv-totals-label">
                Discount <span className="si">වට්ටම</span>
                {invoice.discountType === 'percentage' && ` (${invoice.discount}%)`}
              </span>
              <span className="inv-totals-value">− {formatCurrency(invoice.discount)}</span>
            </div>
          )}
          {invoice.tax > 0 && (
            <div className="inv-totals-row">
              <span className="inv-totals-label">Tax <span className="si">බදු</span>{invoice.taxRate && ` (${invoice.taxRate}%)`}</span>
              <span className="inv-totals-value">{formatCurrency(invoice.tax)}</span>
            </div>
          )}

          <div className="inv-totals-row highlight">
            <span className="inv-totals-label">
              Total Amount <span className="si">මුළු මුදල</span>
            </span>
            <span className="inv-totals-value" style={{ fontSize: '13pt' }}>{formatCurrency(invoice.total)}</span>
          </div>

          {invoice.amountPaid > 0 && (
            <div className="inv-totals-row">
              <span className="inv-totals-label">Amount Paid <span className="si">ගෙවූ මුදල</span></span>
              <span className="inv-totals-value">{formatCurrency(invoice.amountPaid)}</span>
            </div>
          )}
          {invoice.balanceDue > 0 && (
            <div className="inv-totals-row balance">
              <span className="inv-totals-label">Balance Due <span className="si">ශේෂ මුදල</span></span>
              <span className="inv-totals-value">{formatCurrency(invoice.balanceDue)}</span>
            </div>
          )}
        </div>

        {/* ── NOTES ── */}
        {invoice.notes && (
          <div className="inv-box">
            <div className="inv-box-cap">Notes / සටහන</div>
            <p>{invoice.notes}</p>
          </div>
        )}

        {/* ── TERMS ── */}
        <div className="inv-box">
          <div className="inv-box-cap">Terms &amp; Conditions / නියමයන් සහ කොන්දේසි</div>
          <ul className="inv-terms-list">
            {company?.invoiceTerms
              ? company.invoiceTerms.split('\n').filter(t => t.trim()).map((term, i) => (
                  <li key={i}>{term}</li>
                ))
              : <>
                  <li>All jewellery items are hallmarked and certified for purity.</li>
                  <li>Exchange within 7 days with original receipt. No refunds on custom-made items.</li>
                  <li>Warranty does not cover damage caused by misuse, negligence or normal wear.</li>
                </>
            }
          </ul>
        </div>

        {/* ── SIGNATURES ── */}
        <div className="inv-sig-row">
          <div className="inv-sig-box">
            <div className="inv-sig-space" />
            <div className="inv-sig-label">Customer / <span className="si">ගනුදෙනුකරු</span></div>
          </div>
          <div className="inv-sig-box">
            <div className="inv-sig-space" />
            <div className="inv-sig-label">Authorized / <span className="si">අනුමත නිලධාරී</span></div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="inv-footer">
          Printed: {new Date().toLocaleString('en-GB')} &nbsp;|&nbsp; {invoice.invoiceNumber} &nbsp;|&nbsp; This is a computer-generated document.
        </div>

      </div>
    );
  }
);

PrintableInvoice.displayName = 'PrintableInvoice';
export default PrintableInvoice;
