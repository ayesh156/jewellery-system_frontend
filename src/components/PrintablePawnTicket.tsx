import { forwardRef } from 'react';
import type { PawnTicket, CompanyInfo } from '../types/index';
import { formatCurrency, formatDate, formatWeight } from '../utils/formatters';
import { estimateInterestForPeriod } from '../utils/pawnCalculations';
import type { PawningTerm } from '../services/api';

interface PrintablePawnTicketProps {
  ticket: PawnTicket;
  company?: CompanyInfo;
  pawningTerms?: PawningTerm[];
}

const defaultCompany: CompanyInfo = {
  name: 'Onelka Jewellery',
  tagline: 'Exquisite Craftsmanship Since 1985',
  address: 'No. 123, Galle Road',
  city: 'Colombo 03, Sri Lanka',
  country: 'Sri Lanka',
  phone: '+94 11 234 5678',
  phone2: '+94 77 123 4567',
  email: 'info@onelkajewellery.lk',
  website: 'www.onelkajewellery.lk',
  registrationNumber: 'REG-2024-001',
  taxNumber: 'TIN-123456789',
};

export const PrintablePawnTicket = forwardRef<HTMLDivElement, PrintablePawnTicketProps>(
  ({ ticket, company = defaultCompany, pawningTerms = [] }, ref) => {

    const pawnDate = new Date(ticket.pawnDate);
    const maturityDate = new Date(ticket.maturityDate);
    const monthsDiff = (maturityDate.getFullYear() - pawnDate.getFullYear()) * 12 +
      (maturityDate.getMonth() - pawnDate.getMonth());

    const interestEstimate = estimateInterestForPeriod(
      ticket.principalAmount,
      monthsDiff,
      ticket.interestRatePerMonth
    );

    return (
      <div ref={ref} className="ppt-root">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 12mm 14mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .ppt-root { width: 100% !important; padding: 0 !important; margin: 0 !important; box-shadow: none !important; }
            .no-print { display: none !important; }
          }

          .ppt-root {
            width: 182mm;
            min-height: 257mm;
            margin: 0 auto;
            padding: 10mm 12mm;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9.5pt;
            color: #111;
            line-height: 1.45;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
          }

          /* ── HEADER ── */
          .ppt-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 3mm 4mm 2.5mm;
            margin-bottom: 0;
          }
          .ppt-header-left { flex: 1; }
          .ppt-header-right {
            text-align: right;
            font-size: 8pt;
            color: #333;
            min-width: 44mm;
          }
          .ppt-company-name {
            font-size: 17pt;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin: 0 0 0.5mm;
            line-height: 1.1;
          }
          .ppt-company-sinhala {
            font-size: 11pt;
            font-weight: 600;
            color: #222;
            margin: 0 0 1.5mm;
          }
          .ppt-company-contact {
            font-size: 8pt;
            color: #444;
            line-height: 1.6;
          }
          .ppt-form-label {
            font-size: 7.5pt;
            color: #666;
          }
          .ppt-form-no {
            font-size: 9pt;
            font-weight: 700;
          }

          /* ── TITLE BAR ── */
          .ppt-title-bar {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1.5pt solid #111;
            display: flex;
            align-items: stretch;
          }
          .ppt-title-en {
            flex: 1;
            text-align: center;
            font-size: 13pt;
            font-weight: 800;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 2mm 0;
            border-right: 1pt solid #111;
          }
          .ppt-title-si {
            flex: 1;
            text-align: center;
            font-size: 12pt;
            font-weight: 700;
            padding: 2mm 0;
            color: #111;
          }

          /* ── SECTION WRAPPER ── */
          .ppt-section {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1pt solid #111;
          }
          .ppt-section-header {
            background: #f0f0f0;
            border-bottom: 1pt solid #111;
            padding: 1mm 3mm;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .ppt-section-title-en {
            font-size: 8.5pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .ppt-section-title-si {
            font-size: 8.5pt;
            font-weight: 600;
            color: #333;
          }

          /* ── INFO GRID ── */
          .ppt-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
          .ppt-info-cell {
            padding: 1.5mm 3mm;
            border-right: 0.5pt solid #bbb;
            border-bottom: 0.5pt solid #ddd;
          }
          .ppt-info-cell:nth-child(even) { border-right: none; }
          .ppt-info-cell:last-child, .ppt-info-cell:nth-last-child(2) { border-bottom: none; }
          .ppt-field-label {
            font-size: 7.5pt;
            color: #666;
            display: block;
            margin-bottom: 0.3mm;
          }
          .ppt-field-label-si {
            font-size: 7.5pt;
            color: #888;
          }
          .ppt-field-value {
            font-size: 10pt;
            font-weight: 600;
            color: #000;
            display: block;
          }

          /* ── TABLE ── */
          .ppt-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 8.5pt;
          }
          .ppt-table th {
            padding: 1.5mm 2mm;
            background: #f0f0f0;
            border: 0.5pt solid #999;
            font-size: 7.5pt;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
          }
          .ppt-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
          .ppt-table td {
            padding: 2mm 2mm;
            border: 0.5pt solid #bbb;
            vertical-align: middle;
          }
          .ppt-table td.center { text-align: center; }
          .ppt-table td.right { text-align: right; }
          .ppt-table .item-sub { font-size: 7.5pt; color: #555; }

          /* ── FINANCE GRID ── */
          .ppt-finance-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          .ppt-finance-cell {
            padding: 2mm 3mm;
            border-right: 0.5pt solid #bbb;
            text-align: center;
          }
          .ppt-finance-cell:last-child { border-right: none; }
          .ppt-finance-amount {
            font-size: 13pt;
            font-weight: 800;
            color: #000;
            display: block;
            margin-top: 0.5mm;
          }

          /* ── INTEREST BOX ── */
          .ppt-interest-row {
            display: flex;
            justify-content: space-between;
            padding: 1.5mm 3mm;
            border-bottom: 0.5pt solid #ddd;
            font-size: 9pt;
          }
          .ppt-interest-row:last-child { border-bottom: none; }
          .ppt-interest-row.total {
            font-size: 10.5pt;
            font-weight: 700;
            background: #f9f9f9;
            border-top: 1pt solid #555;
          }
          .ppt-interest-label { color: #444; }
          .ppt-interest-label .si { font-size: 7.5pt; color: #888; display: block; }
          .ppt-interest-value { font-weight: 600; }

          /* ── TERMS ── */
          .ppt-terms {
            border: 1.5pt solid #111;
            margin-top: 3mm;
            padding: 2mm 3mm;
          }
          .ppt-terms-header {
            text-align: center;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 0.75pt solid #555;
            padding-bottom: 1.5mm;
            margin-bottom: 2mm;
          }
          .ppt-terms-header .si { font-size: 9pt; font-weight: 600; color: #333; }
          .ppt-terms-list {
            margin: 0;
            padding-left: 4mm;
            font-size: 7.5pt;
            color: #333;
            line-height: 1.6;
            list-style-type: disc;
          }
          .ppt-terms-list li { margin-bottom: 2mm; }
          .ppt-terms-list li .en { display: block; font-size: 7.5pt; color: #111; font-weight: 500; }
          .ppt-terms-list li .si { display: block; font-size: 7pt; color: #444; }
          .ppt-terms-list li .ta { display: block; font-size: 7pt; color: #555; font-style: italic; }

          /* ── SIGNATURES ── */
          .ppt-sig-row {
            display: flex;
            justify-content: space-between;
            margin-top: 6mm;
            gap: 6mm;
          }
          .ppt-sig-box {
            flex: 1;
            border: 0.75pt solid #555;
            padding: 2mm 3mm;
            text-align: center;
          }
          .ppt-sig-space { height: 14mm; }
          .ppt-sig-label {
            border-top: 0.75pt solid #333;
            padding-top: 1.5mm;
            font-size: 8.5pt;
            font-weight: 700;
          }
          .ppt-sig-label .si { font-size: 8pt; color: #555; font-weight: 600; }

          /* ── FOOTER ── */
          .ppt-customer-copy {
            margin-top: 3mm;
            border: 1.5pt solid #111;
            text-align: center;
            padding: 1.5mm;
            font-size: 9pt;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .ppt-footer {
            margin-top: 2mm;
            text-align: center;
            font-size: 7.5pt;
            color: #888;
            border-top: 0.5pt solid #ccc;
            padding-top: 1.5mm;
          }
        `}</style>

        {/* ── HEADER ── */}
        <div className="ppt-header">
          <div className="ppt-header-left">
            <div className="ppt-company-name">{company.name}</div>
            <div className="ppt-company-sinhala">ඔනෙල්කා ජුවලරි</div>
            <div className="ppt-company-contact">
              {company.address}, {company.city}<br />
              Tel: {company.phone}{company.phone2 ? ` / ${company.phone2}` : ''}<br />
              {company.email}
            </div>
          </div>
          <div className="ppt-header-right">
            <div className="ppt-form-label">Form No. / පෝරම අංකය</div>
            <div className="ppt-form-no">{company.registrationNumber}</div>
            <div style={{ marginTop: '2mm' }}>
              <div className="ppt-form-label">Branch / ශාඛාව</div>
              <div className="ppt-form-no">Head Office</div>
            </div>
          </div>
        </div>

        {/* ── TITLE BAR ── */}
        <div className="ppt-title-bar">
          <div className="ppt-title-en">PAWN TICKET</div>
          <div className="ppt-title-si">උකස් පත</div>
        </div>

        {/* ── SECTION 1: TICKET & CUSTOMER INFO ── */}
        <div className="ppt-section">
          <div className="ppt-section-header">
            <span className="ppt-section-title-en">Ticket &amp; Customer Information</span>
            <span className="ppt-section-title-si">ටිකට් සහ ගනුදෙනුකරු තොරතුරු</span>
          </div>
          <div className="ppt-info-grid">
            <div className="ppt-info-cell">
              <span className="ppt-field-label">Ticket No. <span className="ppt-field-label-si">/ අංකය</span></span>
              <span className="ppt-field-value" style={{ fontFamily: 'Consolas, monospace', fontSize: '11pt' }}>
                {ticket.ticketNumber}
              </span>
            </div>
            <div className="ppt-info-cell">
              <span className="ppt-field-label">Date <span className="ppt-field-label-si">/ දිනය</span></span>
              <span className="ppt-field-value">{formatDate(ticket.pawnDate)}</span>
            </div>
            <div className="ppt-info-cell">
              <span className="ppt-field-label">Customer Name <span className="ppt-field-label-si">/ ගනුදෙනුකරු නම</span></span>
              <span className="ppt-field-value">{ticket.customerName}</span>
            </div>
            <div className="ppt-info-cell">
              <span className="ppt-field-label">NIC No. <span className="ppt-field-label-si">/ ජා.හැ.අංකය</span></span>
              <span className="ppt-field-value">{ticket.customerNIC}</span>
            </div>
            <div className="ppt-info-cell">
              <span className="ppt-field-label">Phone <span className="ppt-field-label-si">/ දුරකථනය</span></span>
              <span className="ppt-field-value">{ticket.customerPhone}</span>
            </div>
            <div className="ppt-info-cell">
              <span className="ppt-field-label">Address <span className="ppt-field-label-si">/ ලිපිනය</span></span>
              <span className="ppt-field-value" style={{ fontSize: '9pt' }}>{ticket.customerAddress}</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: GOLD ITEMS ── */}
        <div className="ppt-section" style={{ borderTop: 'none' }}>
          <div className="ppt-section-header">
            <span className="ppt-section-title-en">Gold Items / රන් භාණ්ඩ විස්තරය</span>
            <span className="ppt-section-title-si">Pawned Articles</span>
          </div>
          <table className="ppt-table">
            <thead>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '32%' }}>
                  Description<span className="si">විස්තරය</span>
                </th>
                <th style={{ width: '10%' }}>
                  Karat<span className="si">කැරට්</span>
                </th>
                <th style={{ width: '13%' }}>
                  Gross Wt<span className="si">මුළු බර</span>
                </th>
                <th style={{ width: '13%' }}>
                  Net Wt<span className="si">ශුද්ධ බර</span>
                </th>
                <th style={{ width: '13%' }}>
                  Gold Wt<span className="si">රන් බර</span>
                </th>
                <th style={{ width: '14%' }}>
                  Value<span className="si">වටිනාකම</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ticket.items.map((item, index) => (
                <tr key={item.id}>
                  <td className="center">{index + 1}</td>
                  <td>
                    <strong>{item.itemType}</strong>
                    {item.description && <div className="item-sub">{item.description}</div>}
                    {item.hasGemstones && (
                      <div className="item-sub">* {item.gemstoneDescription}</div>
                    )}
                  </td>
                  <td className="center">{item.karat}</td>
                  <td className="right">{formatWeight(item.grossWeight)}</td>
                  <td className="right">{formatWeight(item.netWeight)}</td>
                  <td className="right">{formatWeight(item.netWeight)}</td>
                  <td className="right">{formatCurrency(item.valuedAmount)}</td>
                </tr>
              ))}
              {/* Totals row */}
              <tr style={{ background: '#f5f5f5', fontWeight: 700 }}>
                <td colSpan={3} style={{ textAlign: 'right', fontSize: '8pt', paddingRight: '3mm' }}>
                  Total / මුළු එකතුව
                </td>
                <td className="right">{formatWeight(ticket.totalGrossWeight)}</td>
                <td className="right">{formatWeight(ticket.totalNetWeight)}</td>
                <td className="right">{formatWeight(ticket.totalNetWeight)}</td>
                <td className="right">{formatCurrency(ticket.totalValuation)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── SECTION 3: FINANCE ── */}
        <div className="ppt-section" style={{ borderTop: 'none' }}>
          <div className="ppt-section-header">
            <span className="ppt-section-title-en">Loan Details / ණය විස්තර</span>
            <span className="ppt-section-title-si">Finance Information</span>
          </div>
          <div className="ppt-finance-grid">
            <div className="ppt-finance-cell">
              <span className="ppt-field-label">Assessed Value <span className="ppt-field-label-si">/ ඇස්තමේන්තු වටිනාකම</span></span>
              <span className="ppt-finance-amount">{formatCurrency(ticket.totalValuation)}</span>
            </div>
            <div className="ppt-finance-cell">
              <span className="ppt-field-label">LTV Ratio <span className="ppt-field-label-si">/ ණය අනුපාතය</span></span>
              <span className="ppt-finance-amount">{(ticket.loanToValueRatio * 100).toFixed(0)}%</span>
            </div>
            <div className="ppt-finance-cell" style={{ background: '#f9f9f9' }}>
              <span className="ppt-field-label">Loan Amount <span className="ppt-field-label-si">/ ණය මුදල</span></span>
              <span className="ppt-finance-amount" style={{ fontSize: '15pt' }}>{formatCurrency(ticket.principalAmount)}</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 4: INTEREST ── */}
        <div className="ppt-section" style={{ borderTop: 'none' }}>
          <div className="ppt-section-header">
            <span className="ppt-section-title-en">Interest &amp; Repayment / පොලී සහ ආපසු ගෙවීම</span>
            <span className="ppt-section-title-si">Interest Information</span>
          </div>
          <div className="ppt-interest-row">
            <span className="ppt-interest-label">
              Interest Rate <span className="si">පොලී අනුපාතය</span>
            </span>
            <span className="ppt-interest-value">{ticket.interestRatePerMonth}% per month / මාසයකට</span>
          </div>
          <div className="ppt-interest-row">
            <span className="ppt-interest-label">
              Loan Period <span className="si">ණය කාලය</span>
            </span>
            <span className="ppt-interest-value">{monthsDiff} Month(s) / මාස</span>
          </div>
          <div className="ppt-interest-row">
            <span className="ppt-interest-label">
              Maturity Date <span className="si">කල් පිරෙන දිනය</span>
            </span>
            <span className="ppt-interest-value">{formatDate(ticket.maturityDate)}</span>
          </div>
          <div className="ppt-interest-row">
            <span className="ppt-interest-label">
              Grace Period <span className="si">සහන කාලය</span>
            </span>
            <span className="ppt-interest-value">{ticket.gracePeriodDays} Days / දින</span>
          </div>
          <div className="ppt-interest-row">
            <span className="ppt-interest-label">
              Estimated Interest at Maturity <span className="si">කල් පිරෙන විට ඇස්තමේන්තු පොලිය</span>
            </span>
            <span className="ppt-interest-value">{formatCurrency(interestEstimate.totalInterest)}</span>
          </div>
          <div className="ppt-interest-row total">
            <span className="ppt-interest-label">
              Total Payable at Maturity <span className="si">කල් පිරෙන විට ගෙවිය යුතු මුළු මුදල</span>
            </span>
            <span className="ppt-interest-value">{formatCurrency(interestEstimate.totalPayable)}</span>
          </div>
        </div>

        {/* ── TERMS & CONDITIONS ── */}
        <div className="ppt-terms">
          <div className="ppt-terms-header">
            Terms &amp; Conditions / <span className="si">නියමයන් සහ කොන්දේසි</span>
          </div>
          <ul className="ppt-terms-list">
            {pawningTerms.length > 0
              ? pawningTerms.map((term) => (
                  <li key={term.groupId}>
                    <span className="en">{term.en}</span>
                    {term.si && <span className="si">{term.si}</span>}
                    {term.ta && <span className="ta">{term.ta}</span>}
                  </li>
                ))
              : company?.pawnTerms
              ? company.pawnTerms.split('\n').filter((t: string) => t.trim()).map((term: string, i: number) => {
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
                    Interest of {ticket.interestRatePerMonth}% is charged per month, even for one day. Daily pro-rata applies after the first month.
                    <span className="si"> / {ticket.interestRatePerMonth}% ක් මාසිකව අය කෙරේ. පළමු මාසයෙන් පසු දෛනික ගණනය කෙරේ.</span>
                  </li>
                  <li>
                    Items must be redeemed within the loan period plus grace period with original ticket and valid ID.
                    <span className="si"> / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය.</span>
                  </li>
                  <li>
                    Unredeemed items after the grace period may be forfeited without further notice.
                    <span className="si"> / සහන කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත.</span>
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
        <div className="ppt-sig-row">
          <div className="ppt-sig-box">
            <div className="ppt-sig-space" />
            <div className="ppt-sig-label">
              Customer / <span className="si">ගනුදෙනුකරු</span>
            </div>
          </div>
          <div className="ppt-sig-box">
            <div className="ppt-sig-space" />
            <div className="ppt-sig-label">
              Valuer / <span className="si">තක්සේරු නිලධාරී</span>
            </div>
          </div>
          <div className="ppt-sig-box">
            <div className="ppt-sig-space" />
            <div className="ppt-sig-label">
              Manager / <span className="si">කළමනාකරු</span>
            </div>
          </div>
        </div>

        {/* ── CUSTOMER COPY ── */}
        <div className="ppt-customer-copy">
          CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න
        </div>

        {/* ── FOOTER ── */}
        <div className="ppt-footer">
          Printed: {new Date().toLocaleString('en-GB')} &nbsp;|&nbsp; {company.registrationNumber} &nbsp;|&nbsp; This is a computer-generated document.
        </div>
      </div>
    );
  }
);

PrintablePawnTicket.displayName = 'PrintablePawnTicket';
