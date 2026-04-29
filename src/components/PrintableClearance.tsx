import { forwardRef } from 'react';
import type { Clearance, Customer, CompanyInfo } from '../types/index';
import { formatCurrency, formatDate, formatWeight } from '../utils/formatters';
import type { PawningTerm } from '../services/api';

interface PrintableClearanceProps {
  clearance: Clearance;
  customer?: Customer;
  company?: CompanyInfo;
  pawningTerms?: PawningTerm[];
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

export const PrintableClearance = forwardRef<HTMLDivElement, PrintableClearanceProps>(
  ({ clearance, customer, company = defaultCompany, pawningTerms = [] }, ref) => {

    const monthlyInterest = clearance.monthlyInterestRate
      ? clearance.total * Number(clearance.monthlyInterestRate) / 100
      : null;

    const statusLabel =
      clearance.status === 'pending' ? 'ACTIVE' :
      clearance.status === 'paid' ? 'REDEEMED' :
      clearance.status.toUpperCase();

    return (
      <div ref={ref} className="pct-root">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 10mm 12mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .pct-root { 
               width: 100% !important;
              max-width: 100% !important;
              padding: 0 !important; 
              margin: 0 !important;
              box-shadow: none !important;
              font-size: 8.5pt !important;
            }
            .no-print { display: none !important; }
          }

          .pct-root {
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
          .pct-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 2mm 3mm 2mm;
          }
          .pct-header-left { flex: 1; }
          .pct-header-right { text-align: right; font-size: 7.5pt; color: #333; min-width: 40mm; }
          .pct-company-sinhala-large {
            font-size: 20pt; font-weight: 900; color: #111;
            letter-spacing: 1px; line-height: 1.1; margin: 0 0 0.5mm;
            font-family: 'Noto Sans Sinhala', sans-serif;
          }
          .pct-company-name {
            font-size: 9pt; font-weight: 600; letter-spacing: 2px;
            text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
          }
          .pct-company-contact { font-size: 7.5pt; color: #444; line-height: 1.5; }
          .pct-form-label { font-size: 7pt; color: #666; }
          .pct-form-no { font-size: 8.5pt; font-weight: 700; }

          /* ── TITLE BAR ── */
          .pct-title-bar {
            border-left: 1.5pt solid #111; border-right: 1.5pt solid #111;
            border-bottom: 1.5pt solid #111;
            display: flex; align-items: stretch;
          }
          .pct-title-en {
            flex: 1; text-align: center; font-size: 13pt; font-weight: 800;
            letter-spacing: 3px; text-transform: uppercase; padding: 2mm 0;
            border-right: 1pt solid #111;
          }
          .pct-title-si {
            flex: 1; text-align: center; font-size: 12pt; font-weight: 700;
            padding: 2mm 0; color: #111;
          }

          /* ── SECTION ── */
          .pct-section { border-left: 1.5pt solid #111; border-right: 1.5pt solid #111; border-bottom: 1pt solid #111; }
          .pct-section-header {
            background: #f0f0f0; border-bottom: 1pt solid #111;
            padding: 1mm 3mm; display: flex; justify-content: space-between; align-items: center;
          }
          .pct-section-title-en { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .pct-section-title-si { font-size: 8.5pt; font-weight: 600; color: #333; }

          /* ── INFO GRID ── */
          .pct-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .pct-info-cell {
            padding: 1mm 2.5mm; border-right: 0.5pt solid #bbb; border-bottom: 0.5pt solid #ddd;
          }
          .pct-info-cell:nth-child(even) { border-right: none; }
          .pct-info-cell.full { grid-column: 1 / -1; border-right: none; }
          .pct-field-label { font-size: 7pt; color: #666; display: block; margin-bottom: 0.2mm; }
          .pct-field-label-si { font-size: 7pt; color: #888; }
          .pct-field-value { font-size: 9.5pt; font-weight: 600; color: #000; display: block; }

          /* ── STATUS BADGE ── */
          .pct-status {
            display: inline-block; padding: 1mm 3mm; border: 1pt solid #333;
            font-size: 8pt; font-weight: 700; letter-spacing: 0.5px;
          }
          .pct-status-active { border-color: #111; color: #111; }
          .pct-status-redeemed { border-color: #555; color: #555; }

          /* ── TABLE ── */
          .pct-table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
          .pct-table th {
            padding: 1.5mm 2mm; background: #f0f0f0; border: 0.5pt solid #999;
            font-size: 7.5pt; font-weight: 700; text-align: center; text-transform: uppercase;
          }
          .pct-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
          .pct-table td { padding: 2mm; border: 0.5pt solid #bbb; vertical-align: middle; }
          .pct-table td.center { text-align: center; }
          .pct-table td.right { text-align: right; }
          .pct-table .item-sub { font-size: 7.5pt; color: #555; }
          .pct-table tfoot td {
            background: #f5f5f5; font-weight: 700; border: 0.5pt solid #999;
          }

          /* ── FINANCE ROWS ── */
          .pct-finance-row {
            display: flex; justify-content: space-between;
            padding: 1mm 3mm; border-bottom: 0.5pt solid #ddd; font-size: 8.5pt;
          }
          .pct-finance-row:last-child { border-bottom: none; }
          .pct-finance-row.highlight {
            font-size: 10pt; font-weight: 700; background: #f9f9f9;
            border-top: 1pt solid #555; border-bottom: none;
          }
          .pct-finance-label { color: #444; }
          .pct-finance-label .si { font-size: 7.5pt; color: #888; display: block; }
          .pct-finance-value { font-weight: 600; }

          /* ── TERMS ── */
          .pct-terms { border: 1.5pt solid #111; margin-top: 2mm; padding: 1.5mm 3mm; }
          .pct-terms-header {
            text-align: center; font-size: 8.5pt; font-weight: 700; text-transform: uppercase;
            letter-spacing: 1px; border-bottom: 0.75pt solid #555;
            padding-bottom: 1mm; margin-bottom: 1.5mm;
          }
          .pct-terms-list {
            margin: 0; padding-left: 4mm; font-size: 7pt; color: #333; line-height: 1.5;
            list-style-type: disc;
          }
          .pct-terms-list li { margin-bottom: 1mm; }
          .pct-terms-list li .en { display: block; font-size: 7pt; color: #111; font-weight: 500; }
          .pct-terms-list li .si { display: block; font-size: 6.5pt; color: #444; }
          .pct-terms-list li .ta { display: block; font-size: 6.5pt; color: #555; font-style: italic; }

          /* ── SIGNATURES ── */
          .pct-sig-row { display: flex; justify-content: space-between; margin-top: 4mm; gap: 4mm; }
          .pct-sig-box { flex: 1; border: 0.75pt solid #555; padding: 1.5mm 2mm; text-align: center; }
          .pct-sig-space { height: 10mm; }
          .pct-sig-label { border-top: 0.75pt solid #333; padding-top: 1mm; font-size: 8pt; font-weight: 700; }
          .pct-sig-label .si { font-size: 7.5pt; color: #555; font-weight: 600; }

          /* ── FOOTER ── */
          .pct-customer-copy {
            margin-top: 2mm; border: 1.5pt solid #111; text-align: center;
            padding: 1mm; font-size: 8pt; font-weight: 700; letter-spacing: 0.5px;
          }
          .pct-footer {
            margin-top: 1.5mm; text-align: center; font-size: 7pt; color: #888;
            border-top: 0.5pt solid #ccc; padding-top: 1mm;
          }
        `}</style>

        {/* ── HEADER ── */}
        <div className="pct-header">
          <div className="pct-header-left">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '1mm' }}>
              <img src="/logo.jpg" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '3px', marginTop: '1mm' }} />
              <div style={{ flex: 1 }}>
                <div className="pct-company-sinhala-large">ඔනෙල්කා ජුවලරි</div>
                <div className="pct-company-name">{company.name}</div>
              </div>
            </div>
            <div className="pct-company-contact">
              {company.address}, {company.city}<br />
              Tel: {company.phone}{company.phone2 ? ` / ${company.phone2}` : ''}<br />
              {company.email}
            </div>
          </div>
          <div className="pct-header-right">
            <div className="pct-form-label">Form No. / පෝරම අංකය</div>
            <div className="pct-form-no">{clearance.clearanceNumber}</div>
            <div style={{ marginTop: '2mm' }}>
              <div className="pct-form-label">Branch / ශාඛාව</div>
              <div className="pct-form-no">Head Office</div>
            </div>
          </div>
        </div>

        {/* ── TITLE BAR ── */}
        <div className="pct-title-bar">
          <div className="pct-title-en">PAWN TICKET</div>
          <div className="pct-title-si">උකස් පත</div>
        </div>

        {/* ── SECTION 1: TICKET & CUSTOMER INFO ── */}
        <div className="pct-section">
          <div className="pct-section-header">
            <span className="pct-section-title-en">Ticket &amp; Customer Information</span>
            <span className="pct-section-title-si">ටිකට් සහ ගනුදෙනුකරු තොරතුරු</span>
          </div>
          <div className="pct-info-grid">
            <div className="pct-info-cell">
              <span className="pct-field-label">Ticket No. <span className="pct-field-label-si">/ අංකය</span></span>
              <span className="pct-field-value" style={{ fontFamily: 'Consolas, monospace', fontSize: '11pt' }}>
                {clearance.clearanceNumber}
              </span>
            </div>
            <div className="pct-info-cell">
              <span className="pct-field-label">Pawn Date <span className="pct-field-label-si">/ උකස් දිනය</span></span>
              <span className="pct-field-value">{formatDate(clearance.pawnDate || clearance.issueDate)}</span>
            </div>
            <div className="pct-info-cell">
              <span className="pct-field-label">Customer Name <span className="pct-field-label-si">/ ගනුදෙනුකරු නම</span></span>
              <span className="pct-field-value">{clearance.customerName}</span>
            </div>
            <div className="pct-info-cell">
              <span className="pct-field-label">NIC No. <span className="pct-field-label-si">/ ජා.හැ.අංකය</span></span>
              <span className="pct-field-value">{clearance.customerNic || '—'}</span>
            </div>
            <div className="pct-info-cell">
              <span className="pct-field-label">Phone <span className="pct-field-label-si">/ දුරකථනය</span></span>
              <span className="pct-field-value">{clearance.customerPhone || customer?.phone || '—'}</span>
            </div>
            <div className="pct-info-cell">
              <span className="pct-field-label">Status <span className="pct-field-label-si">/ තත්ත්වය</span></span>
              <span className="pct-field-value">
                <span className={`pct-status pct-status-${clearance.status === 'pending' ? 'active' : 'redeemed'}`}>
                  {statusLabel}
                </span>
              </span>
            </div>
            {(clearance.customerAddress || customer?.address) && (
              <div className="pct-info-cell full">
                <span className="pct-field-label">Address <span className="pct-field-label-si">/ ලිපිනය</span></span>
                <span className="pct-field-value" style={{ fontSize: '9pt' }}>
                  {clearance.customerAddress || customer?.address}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION 2: PAWNED ITEMS ── */}
        <div className="pct-section" style={{ borderTop: 'none' }}>
          <div className="pct-section-header">
            <span className="pct-section-title-en">Pawned Items / රන් භාණ්ඩ විස්තරය</span>
            <span className="pct-section-title-si">Gold Articles</span>
          </div>
          <table className="pct-table">
            <thead>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '30%' }}>Description<span className="si">විස්තරය</span></th>
                <th style={{ width: '10%' }}>Karat<span className="si">කැරට්</span></th>
                <th style={{ width: '12%' }}>Weight<span className="si">බර</span></th>
                <th style={{ width: '6%' }}>Qty<span className="si">ගණන</span></th>
                <th style={{ width: '18%' }}>Item Price<span className="si">භාණ්ඩ මිල</span></th>
                <th style={{ width: '19%' }}>Assessed Value<span className="si">ඇස්තමේන්තු</span></th>
              </tr>
            </thead>
            <tbody>
              {clearance.items.map((item, index) => (
                <tr key={item.id}>
                  <td className="center">{String(index + 1).padStart(2, '0')}</td>
                  <td>
                    <strong>{item.productName}</strong>
                    <div className="item-sub">
                      {item.metalType.toUpperCase()}
                      {item.karat && ` • ${item.karat}`}
                      {item.sku && ` • SKU: ${item.sku}`}
                    </div>
                  </td>
                  <td className="center">{item.karat || '—'}</td>
                  <td className="center">{formatWeight(item.metalWeight)}</td>
                  <td className="center">{item.quantity}</td>
                  <td className="right">
                    {item.unitPrice > 0 ? formatCurrency(item.unitPrice) : '—'}
                  </td>
                  <td className="right" style={{ fontWeight: 700 }}>
                    {(item as any).assessedValue ? formatCurrency(Number((item as any).assessedValue)) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} style={{ textAlign: 'right', fontSize: '8pt', paddingRight: '3mm' }}>
                  Total Item Value / මුළු භාණ්ඩ වටිනාකම
                </td>
                <td className="right">
                  {formatCurrency(clearance.items.reduce((s, i) => s + (i.unitPrice || 0), 0))}
                </td>
                <td className="right" style={{ fontWeight: 700 }}>
                  {formatCurrency(clearance.items.reduce((s, i) => s + (Number((i as any).assessedValue) || 0), 0))}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* ── SECTION 3: FINANCE ── */}
        <div className="pct-section" style={{ borderTop: 'none' }}>
          <div className="pct-section-header">
            <span className="pct-section-title-en">Loan &amp; Interest Details / ණය සහ පොලී විස්තර</span>
            <span className="pct-section-title-si">Finance Information</span>
          </div>

          <div className="pct-finance-row">
            <span className="pct-finance-label">
              Assessed Value / Total <span className="si">ඇස්තමේන්තු වටිනාකම</span>
            </span>
            <span className="pct-finance-value">
              {formatCurrency(
                clearance.items.reduce((s, i) => s + (Number((i as any).assessedValue) || 0), 0)
              )}
            </span>
          </div>

          {clearance.discount > 0 && (
            <div className="pct-finance-row">
              <span className="pct-finance-label">Discount <span className="si">වට්ටම</span></span>
              <span className="pct-finance-value">- {formatCurrency(clearance.discount)}</span>
            </div>
          )}

          <div className="pct-finance-row highlight">
            <span className="pct-finance-label">
              Advance / Loan Amount <span className="si">අත්තිකාරම් / ණය මුදල</span>
            </span>
            <span className="pct-finance-value" style={{ fontSize: '13pt' }}>{formatCurrency(clearance.total)}</span>
          </div>

          {clearance.monthlyInterestRate != null && (
            <div className="pct-finance-row">
              <span className="pct-finance-label">
                Monthly Interest Rate <span className="si">මාසික පොලී අනුපාතය</span>
              </span>
              <span className="pct-finance-value">{clearance.monthlyInterestRate}%</span>
            </div>
          )}

          {monthlyInterest != null && (
            <div className="pct-finance-row">
              <span className="pct-finance-label">
                Monthly Interest Amount <span className="si">මාසික පොලී මුදල</span>
              </span>
              <span className="pct-finance-value">{formatCurrency(monthlyInterest)}</span>
            </div>
          )}

          {monthlyInterest != null && (
            <div className="pct-finance-row highlight">
              <span className="pct-finance-label">
                Redemption After 1 Month (Principal + Interest)
                <span className="si">මාසයකට පසු ආපසු ගෙවිය යුතු මුදල (ණය + පොලිය)</span>
              </span>
              <span className="pct-finance-value" style={{ fontSize: '13pt' }}>
                {formatCurrency(clearance.total + monthlyInterest)}
              </span>
            </div>
          )}

          {clearance.dueDate && (
            <div className="pct-finance-row">
              <span className="pct-finance-label">
                Redemption Due Date <span className="si">ආපසු ගැනීමේ දිනය</span>
              </span>
              <span className="pct-finance-value">{formatDate(clearance.dueDate)}</span>
            </div>
          )}

          {clearance.paymentMethod && (
            <div className="pct-finance-row">
              <span className="pct-finance-label">
                Payment Method <span className="si">ගෙවීමේ ක්‍රමය</span>
              </span>
              <span className="pct-finance-value">{clearance.paymentMethod.replace('-', ' ').toUpperCase()}</span>
            </div>
          )}
        </div>

        {/* ── TERMS & CONDITIONS ── */}
        <div className="pct-terms">
          <div className="pct-terms-header">
            Terms &amp; Conditions / <span style={{ fontWeight: 600, fontSize: '9pt' }}>නියමයන් සහ කොන්දේසි</span>
          </div>
          <ul className="pct-terms-list">
            {pawningTerms.length > 0
              ? pawningTerms.map((term) => (
                  <li key={term.groupId}>
                    <span className="en">{term.en}</span>
                    {term.si && <span className="si"> {term.si}</span>}
                    {term.ta && <span className="ta"> {term.ta}</span>}
                  </li>
                ))
              : (company?.pawnTerms || company?.clearanceTerms)
              ? (company.pawnTerms || company.clearanceTerms)!.split('\n').filter(t => t.trim()).map((term, i) => {
                  const parts = term.split(' / ');
                  return (
                    <li key={i}>
                      {parts[0]?.trim()}
                      {parts[1] && <span className="si"> / {parts[1].trim()}</span>}
                    </li>
                  );
                })
              : <>
                  <li>
                    Interest is charged at the agreed monthly rate from the pawn date, even for one day.
                    <span className="si"> / උකස් දිනයේ සිට එකඟ වූ මාසික අනුපාතයෙන් පොලිය අය කෙරේ.</span>
                  </li>
                  <li>
                    Items must be redeemed within the agreed period with original ticket and valid ID.
                    <span className="si"> / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය.</span>
                  </li>
                  <li>
                    Unclaimed items after the redemption deadline may be forfeited without further notice.
                    <span className="si"> / නියමිත කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත.</span>
                  </li>
                  <li>
                    This ticket must be surrendered to redeem the pawned articles.
                    <span className="si"> / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය.</span>
                  </li>
                </>
            }
          </ul>
        </div>

        {/* ── SIGNATURES ── */}
        <div className="pct-sig-row">
          <div className="pct-sig-box">
            <div className="pct-sig-space" />
            <div className="pct-sig-label">Customer / <span className="si">ගනුදෙනුකරු</span></div>
          </div>
          <div className="pct-sig-box">
            <div className="pct-sig-space" />
            <div className="pct-sig-label">Valuer / <span className="si">තක්සේරු නිලධාරී</span></div>
          </div>
          <div className="pct-sig-box">
            <div className="pct-sig-space" />
            <div className="pct-sig-label">Manager / <span className="si">කළමනාකරු</span></div>
          </div>
        </div>

        {/* ── CUSTOMER COPY ── */}
        <div className="pct-customer-copy">
          CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න
        </div>

        {/* ── FOOTER ── */}
        <div className="pct-footer">
          Printed: {new Date().toLocaleString('en-GB')} &nbsp;|&nbsp; {clearance.clearanceNumber} &nbsp;|&nbsp; This is a computer-generated document.
        </div>
      </div>
    );
  }
);

PrintableClearance.displayName = 'PrintableClearance';
export default PrintableClearance;
