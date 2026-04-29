import type { CompanyInfo } from '../types';

interface PaymentData {
  clearanceNumber: string;
  customerName: string;
  customerNic?: string;
  customerPhone?: string;
  customerAddress?: string;
  pawnDate: string;
  paymentDate: string;
  paymentMethod: string;
  paymentType: 'interest' | 'redemption' | 'partial';
  // Item info
  items: Array<{
    productName: string;
    metalType?: string;
    karat?: string;
    metalWeight?: number;
    total: number;
  }>;
  // Financial
  principalAmount: number;
  interestRate: number;
  // Interest breakdown
  daysElapsed?: number;
  firstMonthInterest?: number;
  additionalMonthsInterest?: number;
  proratedDailyInterest?: number;
  totalInterest?: number;
  totalPayable?: number;
  // For partial/redemption
  paymentAmount: number;
  previousPayments?: number;
  remainingBalance?: number;
  notes?: string;
}

interface PrintablePawnPaymentA4Props {
  data: PaymentData;
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

function fmtCurrency(n: number) {
  return `Rs. ${n.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getPaymentTitle(type: string): { en: string; si: string } {
  switch (type) {
    case 'redemption': return { en: 'REDEMPTION RECEIPT', si: 'මුදා ගැනීමේ රිසිට්පත' };
    case 'interest':   return { en: 'INTEREST PAYMENT RECEIPT', si: 'පොලී ගෙවීමේ රිසිට්පත' };
    default:           return { en: 'PAYMENT RECEIPT', si: 'ගෙවීම් රිසිට්පත' };
  }
}

export function PrintablePawnPaymentA4({ data, company: companyProp }: PrintablePawnPaymentA4Props) {
  const company = companyProp || defaultCompany;
  const title = getPaymentTitle(data.paymentType);

  return (
    <div className="inv-root">
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
           display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 2mm 3mm 2mm;;
        }
        .inv-header-left { flex: 1; }
        .inv-header-right { text-align: right; font-size: 8pt; color: #333; min-width: 44mm; }
        .inv-company-sinhala-large {
          font-size: 20pt; font-weight: 900; color: #111;
          letter-spacing: 1px; line-height: 1.1; margin: 0 0 0.5mm;
          font-family: 'Noto Sans Sinhala', sans-serif;
        }
        .inv-company-name {
          font-size: 9pt; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
        }
        .inv-company-contact { font-size: 7.5pt; color: #444; line-height: 1.6; margin-top: 1mm; }
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

        /* ── STATUS BADGE ── */
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

        /* ── BREAKDOWN ROWS (interest calc) ── */
        .inv-breakdown-row {
          display: flex; justify-content: space-between;
          padding: 1mm 3mm; font-size: 8.5pt; border-bottom: 0.3pt solid #eee;
        }
        .inv-breakdown-row:last-child { border-bottom: none; }
        .inv-breakdown-row .l { color: #555; }
        .inv-breakdown-row .v { font-weight: 500; }
        .inv-breakdown-row.sub { padding-left: 8mm; }
        .inv-breakdown-row.sub .l { color: #888; font-size: 8pt; }

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
          border: 1pt solid #333; margin: 2mm 3mm 2mm; font-weight: 700;
        }
        .inv-totals-label { color: #444; }
        .inv-totals-label .si { font-size: 7.5pt; color: #888; display: block; }
        .inv-totals-value { font-weight: 600; }

        /* ── NOTES BOX ── */
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

        /* ── SIGNATURES ── */
        .inv-sig-row {
          display: flex; justify-content: space-between;
          padding: 4mm 3mm 2mm; gap: 6mm;
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
        <div className="inv-header-left">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '1mm' }}>
            <img
              src="/logo.jpg" alt="Logo"
              style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '3px', marginTop: '1mm', flexShrink: 0 }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div style={{ flex: 1 }}>
              <div className="inv-company-sinhala-large">ඔනෙල්කා ජුවලරි</div>
              <div className="inv-company-name">{company.name}</div>
            </div>
          </div>
          <div className="inv-company-contact">
            {company.address}, {company.city}<br />
            Tel: {company.phone}{company.phone2 ? ` / ${company.phone2}` : ''}<br />
            {company.email}
          </div>
        </div>
        <div className="inv-header-right">
          <div className="inv-form-label">Receipt No. / රිසිට් අංකය</div>
          <div className="inv-form-no">{data.clearanceNumber}</div>
          <div style={{ marginTop: '2mm' }}>
            <div className="inv-form-label">Date / දිනය</div>
            <div className="inv-form-no">{fmtDate(data.paymentDate)}</div>
          </div>
        </div>
      </div>

      {/* ── TITLE BAR ── */}
      <div className="inv-title-bar">
        <div className="inv-title-en">{title.en}</div>
        <div className="inv-title-si">{title.si}</div>
      </div>

      {/* ── SECTION 1: CUSTOMER & PAYMENT DETAILS ── */}
      <div className="inv-section">
        <div className="inv-section-header">
          <span className="inv-section-title-en">Customer &amp; Payment Details</span>
          <span className="inv-section-title-si">ගනුදෙනුකරු සහ ගෙවීම් විස්තර</span>
        </div>
        <div className="inv-info-grid">
          <div className="inv-info-cell">
            <span className="inv-field-label">Customer Name <span className="inv-field-label-si">/ ගනුදෙනුකරු නම</span></span>
            <span className="inv-field-value">{data.customerName}</span>
          </div>
          <div className="inv-info-cell">
            <span className="inv-field-label">Ticket No. <span className="inv-field-label-si">/ ටිකට් අංකය</span></span>
            <span className="inv-field-value" style={{ fontFamily: 'Consolas, monospace' }}>{data.clearanceNumber}</span>
          </div>
          {data.customerNic && (
            <div className="inv-info-cell">
              <span className="inv-field-label">NIC No. <span className="inv-field-label-si">/ ජා.හැ.අංකය</span></span>
              <span className="inv-field-value">{data.customerNic}</span>
            </div>
          )}
          {data.customerPhone && (
            <div className="inv-info-cell">
              <span className="inv-field-label">Phone <span className="inv-field-label-si">/ දුරකථනය</span></span>
              <span className="inv-field-value">{data.customerPhone}</span>
            </div>
          )}
          <div className="inv-info-cell">
            <span className="inv-field-label">Pawn Date <span className="inv-field-label-si">/ උකස් දිනය</span></span>
            <span className="inv-field-value">{fmtDate(data.pawnDate)}</span>
          </div>
          <div className="inv-info-cell">
            <span className="inv-field-label">Payment Date <span className="inv-field-label-si">/ ගෙවීමේ දිනය</span></span>
            <span className="inv-field-value">{fmtDate(data.paymentDate)}</span>
          </div>
          <div className="inv-info-cell">
            <span className="inv-field-label">Payment Method <span className="inv-field-label-si">/ ගෙවීමේ ක්‍රමය</span></span>
            <span className="inv-field-value">
              <span className="inv-status">{data.paymentMethod.replace('-', ' ').toUpperCase()}</span>
            </span>
          </div>
          <div className="inv-info-cell">
            <span className="inv-field-label">Payment Type <span className="inv-field-label-si">/ ගෙවීමේ වර්ගය</span></span>
            <span className="inv-field-value">
              <span className="inv-status">
                {data.paymentType === 'redemption' ? 'FULL REDEMPTION' : data.paymentType === 'interest' ? 'INTEREST PAYMENT' : 'PARTIAL PAYMENT'}
              </span>
            </span>
          </div>
          {data.customerAddress && (
            <div className="inv-info-cell full">
              <span className="inv-field-label">Address <span className="inv-field-label-si">/ ලිපිනය</span></span>
              <span className="inv-field-value" style={{ fontSize: '9pt' }}>{data.customerAddress}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── SECTION 2: PAWNED ITEMS ── */}
      <div className="inv-section">
        <div className="inv-section-header">
          <span className="inv-section-title-en">Pawned Items / උකස් භාණ්ඩ විස්තරය</span>
          <span className="inv-section-title-si">Gold Articles</span>
        </div>
        <table className="inv-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>#</th>
              <th style={{ width: '42%' }}>Description<span className="si">විස්තරය</span></th>
              <th style={{ width: '13%' }}>Karat<span className="si">කැරට්</span></th>
              <th style={{ width: '15%' }}>Weight<span className="si">බර</span></th>
              <th style={{ width: '25%' }}>Value (Ref.)<span className="si">වටිනාකම</span></th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr key={i}>
                <td className="center" style={{ color: '#888' }}>{String(i + 1).padStart(2, '0')}</td>
                <td>
                  <strong>{item.productName}</strong>
                  {(item.metalType || item.karat) && (
                    <div className="inv-item-sub">
                      {item.metalType?.toUpperCase()}{item.karat ? ` · ${item.karat}` : ''}
                    </div>
                  )}
                </td>
                <td className="center">{item.karat || '—'}</td>
                <td className="center">{item.metalWeight ? `${Number(item.metalWeight).toFixed(3)} g` : '—'}</td>
                <td className="right" style={{ fontWeight: 600 }}>{fmtCurrency(item.total)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} style={{ textAlign: 'right', fontSize: '8pt', paddingRight: '3mm' }}>
                Total Assessed Value / මුළු ඇස්තමේන්තු වටිනාකම
              </td>
              <td className="right">{fmtCurrency(data.items.reduce((s, i) => s + i.total, 0))}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* ── SECTION 3: INTEREST BREAKDOWN (only if interest > 0) ── */}
      {(data.totalInterest != null && data.totalInterest > 0) && (
        <div className="inv-section">
          <div className="inv-section-header">
            <span className="inv-section-title-en">Interest Calculation / පොලී ගණනය</span>
            <span className="inv-section-title-si">Interest Breakdown</span>
          </div>
          {data.daysElapsed != null && (
            <div className="inv-breakdown-row">
              <span className="l">Days Elapsed / ගත වූ දින</span>
              <span className="v">{data.daysElapsed} days</span>
            </div>
          )}
          <div className="inv-breakdown-row">
            <span className="l">Interest Rate / පොලී අනුපාතය</span>
            <span className="v">{data.interestRate}% per month</span>
          </div>
          <div className="inv-breakdown-row">
            <span className="l">Principal / ණය මුදල</span>
            <span className="v">{fmtCurrency(data.principalAmount)}</span>
          </div>
          {(data.firstMonthInterest != null && data.firstMonthInterest > 0) && (
            <div className="inv-breakdown-row sub">
              <span className="l">First Month Interest ({data.interestRate}%)</span>
              <span className="v">{fmtCurrency(data.firstMonthInterest)}</span>
            </div>
          )}
          {(data.additionalMonthsInterest != null && data.additionalMonthsInterest > 0) && (
            <div className="inv-breakdown-row sub">
              <span className="l">Additional Months Interest</span>
              <span className="v">{fmtCurrency(data.additionalMonthsInterest)}</span>
            </div>
          )}
          {(data.proratedDailyInterest != null && data.proratedDailyInterest > 0) && (
            <div className="inv-breakdown-row sub">
              <span className="l">Pro-rated Daily Interest</span>
              <span className="v">{fmtCurrency(data.proratedDailyInterest)}</span>
            </div>
          )}
        </div>
      )}

      {/* ── SECTION 4: PAYMENT SUMMARY ── */}
      <div className="inv-section">
        <div className="inv-section-header">
          <span className="inv-section-title-en">Payment Summary / ගෙවීම් සාරාංශය</span>
          <span className="inv-section-title-si">Financial Details</span>
        </div>
        <div className="inv-totals-row">
          <span className="inv-totals-label">Principal Amount <span className="si">ණය මුදල</span></span>
          <span className="inv-totals-value">{fmtCurrency(data.principalAmount)}</span>
        </div>
        {(data.totalInterest != null && data.totalInterest > 0) && (
          <div className="inv-totals-row">
            <span className="inv-totals-label">Total Interest <span className="si">මුළු පොලිය</span></span>
            <span className="inv-totals-value">{fmtCurrency(data.totalInterest)}</span>
          </div>
        )}
        {(data.previousPayments != null && data.previousPayments > 0) && (
          <div className="inv-totals-row">
            <span className="inv-totals-label">Previous Payments <span className="si">පෙර ගෙවීම්</span></span>
            <span className="inv-totals-value">({fmtCurrency(data.previousPayments)})</span>
          </div>
        )}
        {data.totalPayable != null && (
          <div className="inv-totals-row highlight">
            <span className="inv-totals-label">Total Due <span className="si">ගෙවිය යුතු මුළු මුදල</span></span>
            <span className="inv-totals-value" style={{ fontSize: '13pt' }}>{fmtCurrency(data.totalPayable)}</span>
          </div>
        )}
        <div className="inv-totals-row balance">
          <span className="inv-totals-label">Amount Paid <span className="si">ගෙවූ මුදල</span></span>
          <span className="inv-totals-value" style={{ fontSize: '13pt' }}>{fmtCurrency(data.paymentAmount)}</span>
        </div>
        {(data.remainingBalance != null && data.remainingBalance > 0) && (
          <div className="inv-totals-row">
            <span className="inv-totals-label">Remaining Balance <span className="si">ශේෂ මුදල</span></span>
            <span className="inv-totals-value">{fmtCurrency(data.remainingBalance)}</span>
          </div>
        )}
      </div>

      {/* ── NOTES ── */}
      {data.notes && (
        <div className="inv-box">
          <div className="inv-box-cap">Notes / සටහන</div>
          <p>{data.notes}</p>
        </div>
      )}

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
        Printed: {new Date().toLocaleString('en-GB')} &nbsp;|&nbsp; {data.clearanceNumber} &nbsp;|&nbsp; Computer-generated document.
      </div>

    </div>
  );
}

export default PrintablePawnPaymentA4;
