import type { CompanyInfo } from '../types';

interface PaymentData {
  clearanceNumber: string;
  customerName: string;
  customerNic?: string;
  customerPhone?: string;
  pawnDate: string;
  paymentDate: string;
  paymentMethod: string;
  paymentAmount: number;
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

export function PrintablePawnPaymentPOS({ data, company }: PrintablePawnPaymentPOSProps) {
  const typeLabel = data.paymentType === 'redemption' ? 'REDEMPTION' : data.paymentType === 'interest' ? 'INTEREST PAYMENT' : 'PARTIAL PAYMENT';

  return (
    <div className="pos-pay-receipt">
      <style>{`
        .pos-pay-receipt {
          width: 80mm;
          max-width: 80mm;
          margin: 20px auto;
          padding: 8mm 5mm;
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          line-height: 1.4;
          color: #000;
          background: #fff;
        }
        .pos-pay-receipt * { box-sizing: border-box; }
        .ppr-header {
          text-align: center;
          border-bottom: 1px dashed #000;
          padding-bottom: 8px;
          margin-bottom: 6px;
        }
        .ppr-header h1 {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .ppr-header p { margin: 1px 0; font-size: 10px; }
        .ppr-title {
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          margin: 6px 0;
          padding: 4px 0;
          border-top: 1px dashed #000;
          border-bottom: 1px dashed #000;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .ppr-row {
          display: flex;
          justify-content: space-between;
          padding: 1px 0;
        }
        .ppr-row .label { color: #333; }
        .ppr-row .value { font-weight: bold; text-align: right; }
        .ppr-divider {
          border-top: 1px dashed #000;
          margin: 5px 0;
        }
        .ppr-item {
          padding: 2px 0;
        }
        .ppr-item-name {
          font-weight: bold;
          font-size: 11px;
        }
        .ppr-item-meta {
          font-size: 9px;
          color: #555;
          padding-left: 8px;
        }
        .ppr-total {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          padding: 6px 0;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          margin: 6px 0;
        }
        .ppr-footer {
          text-align: center;
          font-size: 10px;
          margin-top: 10px;
          padding-top: 6px;
          border-top: 1px dashed #000;
        }
        .ppr-footer p { margin: 2px 0; }
        .ppr-ts {
          text-align: center;
          font-size: 9px;
          color: #666;
          margin-top: 3px;
        }
        @media print {
          body { margin: 0; padding: 0; }
          .pos-pay-receipt { margin: 0; padding: 3mm; }
          @page { size: 80mm auto; margin: 0; }
        }
        @media screen {
          .pos-pay-receipt {
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
            border-radius: 4px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="ppr-header">
        <h1>{company?.name || 'Onelka Jewellery'}</h1>
        {company?.tagline && <p>{company.tagline}</p>}
        <p>{company?.address || ''}</p>
        <p>Tel: {company?.phone || ''}</p>
      </div>

      {/* Title */}
      <div className="ppr-title">{typeLabel}</div>

      {/* Ticket & Date Info */}
      <div className="ppr-row">
        <span className="label">Ticket #:</span>
        <span className="value">{data.clearanceNumber}</span>
      </div>
      <div className="ppr-row">
        <span className="label">Pawn Date:</span>
        <span className="value">{fmtDate(data.pawnDate)}</span>
      </div>
      <div className="ppr-row">
        <span className="label">Pay Date:</span>
        <span className="value">{fmtDate(data.paymentDate)}</span>
      </div>

      <div className="ppr-divider" />

      {/* Customer */}
      <div className="ppr-row">
        <span className="label">Customer:</span>
        <span className="value">{data.customerName}</span>
      </div>
      {data.customerNic && (
        <div className="ppr-row">
          <span className="label">NIC:</span>
          <span className="value">{data.customerNic}</span>
        </div>
      )}

      <div className="ppr-divider" />

      {/* Items */}
      <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '3px' }}>
        {data.paymentType === 'redemption' ? 'ITEMS REDEEMED:' : 'PAWNED ITEMS:'}
      </div>
      {data.items.map((item, i) => (
        <div key={i} className="ppr-item">
          <div className="ppr-item-name">{i + 1}. {item.productName}</div>
          {(item.karat || item.metalWeight) && (
            <div className="ppr-item-meta">
              {item.karat || ''} {item.metalType || ''} {item.metalWeight ? `${item.metalWeight}g` : ''}
            </div>
          )}
        </div>
      ))}

      <div className="ppr-divider" />

      {/* Financial */}
      <div className="ppr-row">
        <span className="label">Principal:</span>
        <span className="value">{fmt(data.principalAmount)}</span>
      </div>
      <div className="ppr-row">
        <span className="label">Rate:</span>
        <span className="value">{data.interestRate}%/mo</span>
      </div>
      <div className="ppr-row">
        <span className="label">Monthly Int:</span>
        <span className="value">{fmt(data.principalAmount * data.interestRate / 100)}</span>
      </div>
      {(data.daysElapsed != null && data.daysElapsed > 0) && (
        <div className="ppr-row">
          <span className="label">Period:</span>
          <span className="value">{data.daysElapsed} days</span>
        </div>
      )}
      {(data.firstMonthInterest != null && data.firstMonthInterest > 0) && (
        <div className="ppr-row">
          <span className="label">1st Month:</span>
          <span className="value">{fmt(data.firstMonthInterest)}</span>
        </div>
      )}
      {(data.additionalMonthsInterest != null && data.additionalMonthsInterest > 0) && (
        <div className="ppr-row">
          <span className="label">Addtl Months:</span>
          <span className="value">{fmt(data.additionalMonthsInterest)}</span>
        </div>
      )}
      {(data.proratedDailyInterest != null && data.proratedDailyInterest > 0) && (
        <div className="ppr-row">
          <span className="label">Pro-rated:</span>
          <span className="value">{fmt(data.proratedDailyInterest)}</span>
        </div>
      )}
      {(data.totalInterest != null && data.totalInterest > 0) && (
        <div className="ppr-row" style={{ fontWeight: 'bold', borderTop: '1px dashed #000', paddingTop: '3px', marginTop: '2px' }}>
          <span className="label">Total Int:</span>
          <span className="value">{fmt(data.totalInterest)}</span>
        </div>
      )}
      {data.totalPayable != null && (
        <div className="ppr-row">
          <span className="label">Total Due:</span>
          <span className="value">{fmt(data.totalPayable)}</span>
        </div>
      )}
      {(data.previousPayments != null && data.previousPayments > 0) && (
        <div className="ppr-row">
          <span className="label">Prev. Paid:</span>
          <span className="value">({fmt(data.previousPayments)})</span>
        </div>
      )}

      {/* Total Paid */}
      <div className="ppr-total">
        PAID: {fmt(data.paymentAmount)}
      </div>

      {/* Remaining Balance */}
      {(data.remainingBalance != null && data.remainingBalance > 0) && (
        <div className="ppr-row" style={{ fontWeight: 'bold' }}>
          <span className="label">Balance:</span>
          <span className="value">{fmt(data.remainingBalance)}</span>
        </div>
      )}

      {/* Method */}
      <div className="ppr-row">
        <span className="label">Method:</span>
        <span className="value">{data.paymentMethod.replace('-', ' ').toUpperCase()}</span>
      </div>

      {/* Footer */}
      <div className="ppr-footer">
        <p>Thank you!</p>
        <p>{company?.name || 'Onelka Jewellery'}</p>
        {company?.phone && <p>Tel: {company.phone}</p>}
      </div>
      <div className="ppr-ts">
        {new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
}

export default PrintablePawnPaymentPOS;
