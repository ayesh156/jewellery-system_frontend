import type { CompanyInfo } from '../types';

interface PaymentData {
  clearanceNumber: string;
  customerName: string;
  customerNic?: string;
  customerPhone?: string;
  pawnDate: string;
  paymentDate: string;
  paymentMethod: string;
  paymentType: 'interest' | 'redemption' | 'partial';
  items: Array<{
    productName: string;
    metalType?: string;
    karat?: string;
    metalWeight?: number;
    total: number;
  }>;
  principalAmount: number;
  interestRate: number;
  daysElapsed?: number;
  firstMonthInterest?: number;
  additionalMonthsInterest?: number;
  proratedDailyInterest?: number;
  totalInterest?: number;
  totalPayable?: number;
  paymentAmount: number;
  previousPayments?: number;
  remainingBalance?: number;
  notes?: string;
}

interface PrintablePawnPaymentPOSProps {
  data: PaymentData;
  company?: CompanyInfo;
}

function fmt(n: number) {
  return `Rs. ${n.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

const PAYMENT_CONFIG: Record<string, { labelEn: string; labelSi: string; icon: string }> = {
  redemption: { labelEn: 'REDEMPTION',      labelSi: 'මුදා ගැනීම',        icon: '🔓' },
  interest:   { labelEn: 'INTEREST PAYMENT', labelSi: 'පොලී ගෙවීම',        icon: '💰' },
  partial:    { labelEn: 'PARTIAL PAYMENT',  labelSi: 'අර්ධ ගෙවීම',        icon: '💳' },
};

const METHOD_SI: Record<string, string> = {
  cash: 'මුදල්', card: 'කාඩ්', 'bank-transfer': 'බැංකු', cheque: 'චෙක්', other: 'වෙනත්',
};

export function PrintablePawnPaymentPOS({ data, company }: PrintablePawnPaymentPOSProps) {
  const cfg = PAYMENT_CONFIG[data.paymentType] || PAYMENT_CONFIG.partial;
  const methodSi = METHOD_SI[data.paymentMethod] || data.paymentMethod;
  const now = new Date();
  const printTime = now.toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  return (
    <div className="pos-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700;900&display=swap');

        @media print {
          @page { size: 80mm auto; margin: 0; }
          body { margin: 0; padding: 0; background: white; }
          .pos-root { margin: 0 !important; box-shadow: none !important; }
          .no-print { display: none !important; }
        }

        /* ── ROOT ── */
        .pos-root {
          width: 76mm;
          margin: 16px auto;
          padding: 0;
          background: #fff;
          font-family: 'Noto Sans Sinhala', 'Noto Sans', Arial, sans-serif;
          font-size: 9pt;
          color: #111;
          line-height: 1.5;
          box-sizing: border-box;
          box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        }

        /* ── TOP WAVE / TEAR ── */
        .pos-tear-top {
          width: 100%;
          height: 8px;
          background: repeating-linear-gradient(
            90deg,
            #fff 0px, #fff 6px,
            transparent 6px, transparent 10px
          );
          border-bottom: 1px dashed #999;
        }

        /* ── HEADER ── */
        .pos-header {
          text-align: center;
          padding: 4mm 4mm 3mm;
          border-bottom: 1.5px solid #111;
          position: relative;
        }
        .pos-logo-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 1mm;
        }
        .pos-company-si {
          font-size: 16pt;
          font-weight: 900;
          color: #111;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .pos-company-en {
          font-size: 7.5pt;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 1mm;
        }
        .pos-contact {
          font-size: 7pt;
          color: #666;
          line-height: 1.6;
        }

        /* ── TITLE BAND ── */
        .pos-title-band {
          background: #fff;
          color: #111;
          text-align: center;
          padding: 2.5mm 3mm;
          border-bottom: 1.5px solid #111;
        }
        .pos-title-icon {
          font-size: 14pt;
          display: block;
          margin-bottom: 0.5mm;
        }
        .pos-title-en {
          font-size: 10pt;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          color: #111;
        }
        .pos-title-si {
          font-size: 9pt;
          font-weight: 600;
          color: #555;
          display: block;
          margin-top: 0.5mm;
        }

        /* ── TICKET BADGE ── */
        .pos-ticket-badge {
          text-align: center;
          padding: 2mm 3mm;
          border-bottom: 1px dashed #999;
        }
        .pos-ticket-label {
          font-size: 7pt;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pos-ticket-no {
          font-size: 14pt;
          font-weight: 900;
          color: #111;
          letter-spacing: 1px;
          font-family: 'Courier New', monospace;
        }

        /* ── SECTION ── */
        .pos-section {
          border-bottom: 1px dashed #bbb;
          padding: 2mm 4mm;
        }
        .pos-section-cap {
          font-size: 7pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
          margin-bottom: 1.5mm;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .pos-section-cap::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: #ccc;
          margin-left: 3px;
        }

        /* ── INFO ROWS ── */
        .pos-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.8mm 0;
          font-size: 8.5pt;
        }
        .pos-row .lbl {
          color: #555;
          font-size: 8pt;
        }
        .pos-row .lbl .si {
          display: block;
          font-size: 7pt;
          color: #aaa;
        }
        .pos-row .val {
          font-weight: 600;
          text-align: right;
          color: #111;
        }

        /* ── ITEMS ── */
        .pos-item {
          padding: 1.5mm 0;
          border-bottom: 0.5px dotted #ddd;
        }
        .pos-item:last-child { border-bottom: none; }
        .pos-item-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5mm;
          height: 5mm;
          background: #fff;
          color: #111;
          font-size: 7pt;
          font-weight: 700;
          border: 1.5px solid #111;
          border-radius: 50%;
          margin-right: 2mm;
          flex-shrink: 0;
        }
        .pos-item-name {
          font-size: 9pt;
          font-weight: 700;
          color: #111;
        }
        .pos-item-meta {
          font-size: 7.5pt;
          color: #777;
          padding-left: 7mm;
          margin-top: 0.3mm;
        }

        /* ── INTEREST BREAKDOWN ── */
        .pos-calc-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5mm 0;
          font-size: 8pt;
          color: #555;
        }
        .pos-calc-row.sub {
          padding-left: 4mm;
          font-size: 7.5pt;
          color: #888;
        }
        .pos-calc-row .v { font-weight: 500; color: #333; }

        /* ── TOTAL BAND ── */
        .pos-total-band {
          background: #fff;
          color: #111;
          padding: 3mm 4mm;
          text-align: center;
          border-top: 1.5px solid #111;
          border-bottom: 1.5px solid #111;
        }
        .pos-total-label-si {
          font-size: 8pt;
          color: #666;
          display: block;
          margin-bottom: 0.5mm;
        }
        .pos-total-label-en {
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #555;
          display: block;
        }
        .pos-total-amount {
          font-size: 16pt;
          font-weight: 900;
          color: #111;
          display: block;
          letter-spacing: 0.5px;
          margin-top: 1mm;
          font-family: 'Courier New', monospace;
        }

        /* ── BALANCE ── */
        .pos-balance {
          text-align: center;
          padding: 2mm 4mm;
          border-bottom: 1px dashed #bbb;
          font-size: 8.5pt;
        }
        .pos-balance .lbl { color: #888; font-size: 7.5pt; }
        .pos-balance .val { font-weight: 700; font-size: 10pt; color: #111; }

        /* ── METHOD BADGE ── */
        .pos-method {
          text-align: center;
          padding: 2mm 4mm;
          border-bottom: 1px dashed #bbb;
        }
        .pos-method-badge {
          display: inline-block;
          border: 1.5px solid #111;
          padding: 1mm 5mm;
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .pos-method-si {
          font-size: 7.5pt;
          color: #888;
          margin-top: 0.5mm;
        }

        /* ── FOOTER ── */
        .pos-footer {
          text-align: center;
          padding: 3mm 4mm 2mm;
          border-top: 1px dashed #999;
        }
        .pos-footer-si {
          font-size: 10pt;
          font-weight: 700;
          color: #111;
          margin-bottom: 0.5mm;
        }
        .pos-footer-en {
          font-size: 8pt;
          color: #555;
          margin-bottom: 1mm;
        }
        .pos-footer-contact {
          font-size: 7.5pt;
          color: #888;
          line-height: 1.6;
        }
        .pos-timestamp {
          font-size: 7pt;
          color: #bbb;
          margin-top: 2mm;
          font-family: 'Courier New', monospace;
        }

        /* ── BOTTOM TEAR ── */
        .pos-tear-bottom {
          width: 100%;
          height: 8px;
          background: repeating-linear-gradient(
            90deg,
            #fff 0px, #fff 6px,
            transparent 6px, transparent 10px
          );
          border-top: 1px dashed #999;
        }
      `}</style>

      {/* ── TOP TEAR ── */}
      <div className="pos-tear-top" />

      {/* ── HEADER ── */}
      <div className="pos-header">
        <div className="pos-logo-row">
          <img
            src="/logo.jpg" alt=""
            style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '3px' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="pos-company-si">ඔනෙල්කා ජුවලරි</div>
        </div>
        <div className="pos-company-en">{company?.name || 'Onelka Jewellery'}</div>
        <div className="pos-contact">
          {company?.address || 'Makandura, Matara'}<br />
          දු.ල. / Tel: {company?.phone || '0770400789'}
        </div>
      </div>

      {/* ── TITLE BAND ── */}
      <div className="pos-title-band">
        <span className="pos-title-en">{cfg.labelEn}</span>
        <span className="pos-title-si">{cfg.labelSi}</span>
      </div>

      {/* ── TICKET BADGE ── */}
      <div className="pos-ticket-badge">
        <div className="pos-ticket-label">ටිකට් අංකය / Ticket No.</div>
        <div className="pos-ticket-no">{data.clearanceNumber}</div>
      </div>

      {/* ── SECTION: DATES ── */}
      <div className="pos-section">
        <div className="pos-section-cap">දිනයන් / Dates</div>
        <div className="pos-row">
          <span className="lbl">උකස් දිනය<span className="si">Pawn Date</span></span>
          <span className="val">{fmtDate(data.pawnDate)}</span>
        </div>
        <div className="pos-row">
          <span className="lbl">ගෙවීමේ දිනය<span className="si">Payment Date</span></span>
          <span className="val">{fmtDate(data.paymentDate)}</span>
        </div>
        {data.daysElapsed != null && data.daysElapsed > 0 && (
          <div className="pos-row">
            <span className="lbl">ගත වූ දින<span className="si">Days Elapsed</span></span>
            <span className="val">{data.daysElapsed} දින</span>
          </div>
        )}
      </div>

      {/* ── SECTION: CUSTOMER ── */}
      <div className="pos-section">
        <div className="pos-section-cap">ගනුදෙනුකරු / Customer</div>
        <div className="pos-row">
          <span className="lbl">නම<span className="si">Name</span></span>
          <span className="val">{data.customerName}</span>
        </div>
        {data.customerNic && (
          <div className="pos-row">
            <span className="lbl">ජා.හැ.අංකය<span className="si">NIC</span></span>
            <span className="val">{data.customerNic}</span>
          </div>
        )}
        {data.customerPhone && (
          <div className="pos-row">
            <span className="lbl">දුරකථනය<span className="si">Phone</span></span>
            <span className="val">{data.customerPhone}</span>
          </div>
        )}
      </div>

      {/* ── SECTION: ITEMS ── */}
      <div className="pos-section">
        <div className="pos-section-cap">
          {data.paymentType === 'redemption' ? 'ආපසු ලබා දුන් භාණ්ඩ / Items Returned' : 'උකස් භාණ්ඩ / Pawned Items'}
        </div>
        {data.items.map((item, i) => (
          <div key={i} className="pos-item">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
              <span className="pos-item-num">{i + 1}</span>
              <span className="pos-item-name">{item.productName}</span>
            </div>
            {(item.karat || item.metalWeight || item.metalType) && (
              <div className="pos-item-meta">
                {[item.karat, item.metalType?.toUpperCase(), item.metalWeight ? `${item.metalWeight}g` : null]
                  .filter(Boolean).join(' · ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── SECTION: INTEREST BREAKDOWN ── */}
      {(data.totalInterest != null && data.totalInterest > 0) && (
        <div className="pos-section">
          <div className="pos-section-cap">පොලී ගණනය / Interest</div>
          <div className="pos-calc-row">
            <span>ණය මුදල / Principal</span>
            <span className="v">{fmt(data.principalAmount)}</span>
          </div>
          <div className="pos-calc-row">
            <span>අනුපාතය / Rate</span>
            <span className="v">{data.interestRate}% / මාසය</span>
          </div>
          {data.firstMonthInterest != null && data.firstMonthInterest > 0 && (
            <div className="pos-calc-row sub">
              <span>1 වන මාසය</span>
              <span className="v">{fmt(data.firstMonthInterest)}</span>
            </div>
          )}
          {data.additionalMonthsInterest != null && data.additionalMonthsInterest > 0 && (
            <div className="pos-calc-row sub">
              <span>අමතර මාස</span>
              <span className="v">{fmt(data.additionalMonthsInterest)}</span>
            </div>
          )}
          {data.proratedDailyInterest != null && data.proratedDailyInterest > 0 && (
            <div className="pos-calc-row sub">
              <span>දෛනික පොලිය</span>
              <span className="v">{fmt(data.proratedDailyInterest)}</span>
            </div>
          )}
          <div className="pos-calc-row" style={{ borderTop: '0.5px dashed #ccc', paddingTop: '1mm', marginTop: '1mm', fontWeight: 700, color: '#111' }}>
            <span>මුළු පොලිය / Total Interest</span>
            <span className="v">{fmt(data.totalInterest)}</span>
          </div>
        </div>
      )}

      {/* ── SECTION: SUMMARY ── */}
      <div className="pos-section">
        <div className="pos-section-cap">ගෙවීම් සාරාංශය / Summary</div>
        <div className="pos-calc-row">
          <span>ණය මුදල / Principal</span>
          <span className="v">{fmt(data.principalAmount)}</span>
        </div>
        {data.totalInterest != null && data.totalInterest > 0 && (
          <div className="pos-calc-row">
            <span>පොලිය / Interest</span>
            <span className="v">{fmt(data.totalInterest)}</span>
          </div>
        )}
        {data.previousPayments != null && data.previousPayments > 0 && (
          <div className="pos-calc-row">
            <span>පෙර ගෙවීම් / Prev. Paid</span>
            <span className="v">({fmt(data.previousPayments)})</span>
          </div>
        )}
        {data.totalPayable != null && (
          <div className="pos-calc-row" style={{ fontWeight: 700, color: '#111', borderTop: '0.5px dashed #ccc', paddingTop: '1mm', marginTop: '1mm' }}>
            <span>ගෙවිය යුතු / Total Due</span>
            <span className="v">{fmt(data.totalPayable)}</span>
          </div>
        )}
      </div>

      {/* ── TOTAL PAID BAND ── */}
      <div className="pos-total-band">
        <span className="pos-total-label-si">ගෙවූ මුදල</span>
        <span className="pos-total-label-en">Amount Paid</span>
        <span className="pos-total-amount">{fmt(data.paymentAmount)}</span>
      </div>

      {/* ── REMAINING BALANCE ── */}
      {data.remainingBalance != null && data.remainingBalance > 0 && (
        <div className="pos-balance">
          <div className="lbl">ශේෂ මුදල / Remaining Balance</div>
          <div className="val">{fmt(data.remainingBalance)}</div>
        </div>
      )}

      {/* ── PAYMENT METHOD ── */}
      <div className="pos-method">
        <div className="pos-method-badge">{data.paymentMethod.replace('-', ' ').toUpperCase()}</div>
        <div className="pos-method-si">{methodSi} මගින් ගෙවන ලදී</div>
      </div>

      {/* ── NOTES ── */}
      {data.notes && (
        <div className="pos-section" style={{ fontSize: '8pt', color: '#555' }}>
          <div className="pos-section-cap">සටහන / Notes</div>
          {data.notes}
        </div>
      )}

      {/* ── FOOTER ── */}
      <div className="pos-footer">
        <div className="pos-footer-si">ස්තූතියි! 🙏</div>
        <div className="pos-footer-en">Thank you for your patronage</div>
        <div className="pos-footer-contact">
          {company?.name || 'Onelka Jewellery'}<br />
          {company?.address || 'Makandura, Matara'}<br />
          {company?.phone || '0770400789'}
        </div>
        <div className="pos-timestamp">{printTime}</div>
      </div>

      {/* ── BOTTOM TEAR ── */}
      <div className="pos-tear-bottom" />

    </div>
  );
}

export default PrintablePawnPaymentPOS;
