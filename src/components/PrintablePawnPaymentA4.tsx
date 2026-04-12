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
  paymentAmount: number;
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
    case 'interest': return { en: 'INTEREST PAYMENT RECEIPT', si: 'පොලී ගෙවීමේ රිසිට්පත' };
    default: return { en: 'PAYMENT RECEIPT', si: 'ගෙවීම් රිසිට්පත' };
  }
}

export function PrintablePawnPaymentA4({ data, company: companyProp }: PrintablePawnPaymentA4Props) {
  const company = companyProp || defaultCompany;
  const title = getPaymentTitle(data.paymentType);

  return (
    <div className="pawn-payment-a4">
      <style>{`
        .pawn-payment-a4 {
          width: 210mm;
          min-height: 297mm;
          padding: 15mm 20mm;
          margin: 0 auto;
          background: white;
          color: #1a1a1a;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          font-size: 10pt;
          line-height: 1.5;
          box-sizing: border-box;
        }
        @media print {
          @page { size: A4 portrait; margin: 10mm; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { margin: 0; padding: 0; background: white; }
          .pawn-payment-a4 { width: 100%; max-width: none; padding: 0; margin: 0 auto; }
        }

        /* Header */
        .pp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 10px;
          margin-bottom: 14px;
          border-bottom: 2.5px solid #1a1a1a;
          position: relative;
        }
        .pp-header::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
        }
        .pp-company h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22pt;
          font-weight: 700;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .pp-company .tagline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 9pt;
          color: #666;
          font-style: italic;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .pp-company .details {
          font-size: 8.5pt;
          color: #666;
          line-height: 1.5;
        }
        .pp-title-block {
          text-align: right;
        }
        .pp-title-block h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 16pt;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1.5px;
        }
        .pp-title-block .subtitle {
          font-size: 8.5pt;
          color: #666;
          font-style: italic;
          margin-top: 1px;
        }
        .pp-title-block .ticket-no {
          display: inline-block;
          margin-top: 6px;
          font-size: 11pt;
          font-weight: 600;
          padding: 3px 12px;
          border: 1.5px solid #999;
          border-radius: 3px;
        }

        /* Info Grid */
        .pp-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 16px;
        }
        .pp-info-box {
          padding: 10px 14px;
          border-left: 2.5px solid #1a1a1a;
        }
        .pp-info-box.right {
          border-left: none;
          border-right: 2.5px solid #1a1a1a;
          text-align: right;
        }
        .pp-info-box label {
          display: block;
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #555;
          margin-bottom: 4px;
        }
        .pp-info-box .name {
          font-size: 13pt;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 2px;
        }
        .pp-info-box .meta {
          font-size: 9.5pt;
          color: #555;
          line-height: 1.5;
        }

        /* Items Table */
        .pp-items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
          font-size: 10pt;
        }
        .pp-items-table thead th {
          background: #f8f8f8;
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          padding: 7px 8px;
          text-align: left;
          border-bottom: 2px solid #333;
          border-top: 1px solid #333;
          color: #333;
        }
        .pp-items-table thead th:first-child { width: 6%; text-align: center; }
        .pp-items-table thead th:nth-child(2) { width: 40%; }
        .pp-items-table thead th:nth-child(3) { width: 18%; text-align: center; }
        .pp-items-table thead th:nth-child(4) { width: 18%; text-align: right; }
        .pp-items-table thead th:last-child { width: 18%; text-align: right; }
        .pp-items-table tbody tr {
          border-bottom: 1px solid #ddd;
        }
        .pp-items-table tbody td {
          padding: 7px 8px;
          vertical-align: middle;
          color: #333;
        }
        .pp-items-table tbody td:first-child { text-align: center; color: #888; font-size: 9pt; }
        .pp-items-table .item-name { font-weight: 600; color: #1a1a1a; }
        .pp-items-table .item-meta { font-size: 8.5pt; color: #777; margin-top: 1px; }
        .pp-items-table tbody td:nth-child(3) { text-align: center; }
        .pp-items-table tbody td:nth-child(4),
        .pp-items-table tbody td:last-child {
          text-align: right;
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 9.5pt;
        }

        /* Interest Breakdown Box */
        .pp-interest-box {
          border: 1.5px solid #333;
          border-radius: 4px;
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        .pp-interest-box h3 {
          font-size: 9pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #333;
          margin: 0 0 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid #ddd;
        }
        .pp-row {
          display: flex;
          justify-content: space-between;
          padding: 3px 0;
          font-size: 10pt;
        }
        .pp-row .label { color: #555; }
        .pp-row .value {
          font-family: 'Consolas', 'Monaco', monospace;
          font-weight: 500;
          color: #1a1a1a;
        }
        .pp-row.highlight .value { font-weight: 700; }

        /* Payment Summary */
        .pp-summary {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 16px;
        }
        .pp-summary-box {
          width: 55%;
        }
        .pp-summary-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 10px;
          font-size: 10pt;
        }
        .pp-summary-row .label { color: #555; }
        .pp-summary-row .value {
          font-family: 'Consolas', 'Monaco', monospace;
          color: #333;
          font-weight: 500;
        }
        .pp-summary-row.total {
          background: #f8f8f8;
          font-size: 13pt;
          font-weight: 700;
          padding: 8px 10px;
          margin-top: 4px;
          border-top: 2px solid #333;
          border-bottom: 2px solid #333;
        }
        .pp-summary-row.total .label,
        .pp-summary-row.total .value { color: #1a1a1a; }
        .pp-summary-row.paid {
          margin-top: 6px;
          padding: 6px 10px;
          border: 1.5px solid #333;
          border-radius: 3px;
          font-weight: 700;
          font-size: 12pt;
        }
        .pp-summary-row.paid .label,
        .pp-summary-row.paid .value { color: #1a1a1a; }

        /* Signature Area */
        .pp-signatures {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          padding-top: 10px;
        }
        .pp-sig {
          width: 40%;
          text-align: center;
        }
        .pp-sig .line {
          border-top: 1px solid #333;
          padding-top: 4px;
          font-size: 9pt;
          color: #555;
          font-weight: 600;
        }

        /* Footer */
        .pp-footer {
          border-top: 2px solid #333;
          padding-top: 8px;
          text-align: center;
          margin-top: 20px;
          position: relative;
        }
        .pp-footer::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
        }
        .pp-footer .thank-you {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 13pt;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }
        .pp-footer .contact {
          font-size: 9pt;
          color: #666;
        }
        .pp-footer .contact a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
        }
        .pp-footer .tagline-footer {
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px solid #ddd;
          font-size: 8.5pt;
          color: #999;
          letter-spacing: 0.5px;
        }
        .pp-diamond {
          display: inline-block;
          width: 4px; height: 4px;
          background: white;
          border: 1px solid #333;
          transform: rotate(45deg);
          margin: 0 4px;
        }

        /* Notes */
        .pp-notes {
          background: #f8f8f8;
          border: 1px solid #999;
          border-radius: 4px;
          padding: 8px 14px;
          margin-bottom: 14px;
        }
        .pp-notes label {
          display: block;
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #333;
          margin-bottom: 3px;
        }
        .pp-notes p {
          font-size: 9.5pt;
          color: #444;
          margin: 0;
          line-height: 1.5;
        }

        /* Status Badge */
        .pp-status {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 10px;
          font-size: 8.5pt;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          border: 1px solid #333;
        }
      `}</style>

      {/* Header */}
      <div className="pp-header">
        <div className="pp-company">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '3px' }}>
            <img src="/logo.jpg" alt="" style={{ width: '42px', height: '42px', objectFit: 'contain', borderRadius: '3px' }} />
            <h1>{company.name}</h1>
          </div>
          {company.tagline && <div className="tagline">{company.tagline}</div>}
          <div className="details">
            {company.address}{company.city ? `, ${company.city}` : ''}<br />
            Tel: {company.phone}<br />
            Email: {company.email}
          </div>
        </div>
        <div className="pp-title-block">
          <h2>{title.en}</h2>
          <div className="subtitle">{title.si}</div>
          <div className="ticket-no">{data.clearanceNumber}</div>
        </div>
      </div>

      {/* Customer & Payment Info */}
      <div className="pp-info-grid">
        <div className="pp-info-box">
          <label>Customer Details / පාරිභෝගික විස්තර</label>
          <div className="name">{data.customerName}</div>
          <div className="meta">
            {data.customerNic && <>NIC: {data.customerNic}<br /></>}
            {data.customerPhone && <>Tel: {data.customerPhone}<br /></>}
            {data.customerAddress && <>{data.customerAddress}</>}
          </div>
        </div>
        <div className="pp-info-box right">
          <label>Payment Details / ගෙවීම් විස්තර</label>
          <div className="meta">
            <strong>Pawn Date:</strong> {fmtDate(data.pawnDate)}<br />
            <strong>Payment Date:</strong> {fmtDate(data.paymentDate)}<br />
            <strong>Method:</strong> {data.paymentMethod.replace('-', ' ').toUpperCase()}<br />
            <strong>Type:</strong> <span className="pp-status">
              {data.paymentType === 'redemption' ? 'FULL REDEMPTION' : data.paymentType === 'interest' ? 'INTEREST PAYMENT' : 'PARTIAL PAYMENT'}
            </span>
          </div>
        </div>
      </div>

      {/* Pawned Items */}
      <table className="pp-items-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Pawned Item / උකස් භාණ්ඩය</th>
            <th>Details</th>
            <th>Weight</th>
            <th>Value (Ref.)</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={i}>
              <td>{String(i + 1).padStart(2, '0')}</td>
              <td>
                <div className="item-name">{item.productName}</div>
                {(item.metalType || item.karat) && (
                  <div className="item-meta">
                    {item.metalType?.toUpperCase()}{item.karat ? ` • ${item.karat}` : ''}
                  </div>
                )}
              </td>
              <td style={{ fontSize: '9pt', color: '#555' }}>
                {item.karat || '—'}
              </td>
              <td>{item.metalWeight ? `${Number(item.metalWeight).toFixed(3)} g` : '—'}</td>
              <td>{fmtCurrency(item.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Interest Breakdown */}
      {(data.totalInterest != null && data.totalInterest > 0) && (
        <div className="pp-interest-box">
          <h3>Interest Breakdown / පොලී විස්තරය</h3>
          {data.daysElapsed != null && (
            <div className="pp-row">
              <span className="label">Period Elapsed</span>
              <span className="value">{data.daysElapsed} days</span>
            </div>
          )}
          <div className="pp-row">
            <span className="label">Interest Rate</span>
            <span className="value">{data.interestRate}% / month</span>
          </div>
          {(data.firstMonthInterest != null && data.firstMonthInterest > 0) && (
            <div className="pp-row">
              <span className="label">1st Month Interest ({data.interestRate}%)</span>
              <span className="value">{fmtCurrency(data.firstMonthInterest)}</span>
            </div>
          )}
          {(data.additionalMonthsInterest != null && data.additionalMonthsInterest > 0) && (
            <div className="pp-row">
              <span className="label">Additional Months Interest</span>
              <span className="value">{fmtCurrency(data.additionalMonthsInterest)}</span>
            </div>
          )}
          {(data.proratedDailyInterest != null && data.proratedDailyInterest > 0) && (
            <div className="pp-row">
              <span className="label">Pro-rated Daily Interest</span>
              <span className="value">{fmtCurrency(data.proratedDailyInterest)}</span>
            </div>
          )}
          <div className="pp-row highlight" style={{ borderTop: '1px solid #ddd', paddingTop: '4px', marginTop: '2px' }}>
            <span className="label" style={{ fontWeight: 600 }}>Total Interest / මුළු පොලිය</span>
            <span className="value">{fmtCurrency(data.totalInterest)}</span>
          </div>
        </div>
      )}

      {/* Payment Summary */}
      <div className="pp-summary">
        <div className="pp-summary-box">
          <div className="pp-summary-row">
            <span className="label">Advance Amount (අත්තිකාරම් මුදල)</span>
            <span className="value">{fmtCurrency(data.principalAmount)}</span>
          </div>
          {(data.totalInterest != null && data.totalInterest > 0) && (
            <div className="pp-summary-row">
              <span className="label">Total Interest</span>
              <span className="value">{fmtCurrency(data.totalInterest)}</span>
            </div>
          )}
          {data.totalPayable != null && (
            <div className="pp-summary-row total">
              <span className="label">Total Due / මුළු මුදල</span>
              <span className="value">{fmtCurrency(data.totalPayable)}</span>
            </div>
          )}
          {(data.previousPayments != null && data.previousPayments > 0) && (
            <div className="pp-summary-row" style={{ marginTop: '4px' }}>
              <span className="label">Previous Payments</span>
              <span className="value">({fmtCurrency(data.previousPayments)})</span>
            </div>
          )}
          <div className="pp-summary-row paid">
            <span className="label">Amount Paid / ගෙවූ මුදල</span>
            <span className="value">{fmtCurrency(data.paymentAmount)}</span>
          </div>
          {(data.remainingBalance != null && data.remainingBalance > 0) && (
            <div className="pp-summary-row" style={{ marginTop: '4px', fontSize: '10pt' }}>
              <span className="label" style={{ color: '#333', fontWeight: 600 }}>Remaining Balance</span>
              <span className="value" style={{ fontWeight: 700 }}>{fmtCurrency(data.remainingBalance)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="pp-notes">
          <label>Notes</label>
          <p>{data.notes}</p>
        </div>
      )}

      {/* Signatures */}
      <div className="pp-signatures">
        <div className="pp-sig">
          <div className="line">Customer Signature / පාරිභෝගික අත්සන</div>
        </div>
        <div className="pp-sig">
          <div className="line">Authorized Signature / බලයලත් අත්සන</div>
        </div>
      </div>

      {/* Footer */}
      <div className="pp-footer">
        <div className="thank-you">
          <span className="pp-diamond" />
          Thank You for Your Patronage
          <span className="pp-diamond" />
        </div>
        <div className="contact">
          Contact us at <a href={`mailto:${company.email}`}>{company.email}</a> or call <a href={`tel:${company.phone}`}>{company.phone}</a>
        </div>
        <div className="tagline-footer">
          ✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦
        </div>
      </div>
    </div>
  );
}

export default PrintablePawnPaymentA4;
