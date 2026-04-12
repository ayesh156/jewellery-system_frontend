import { useEffect, useState } from 'react';
import type { CompanyInfo, Clearance, InterestCalculation } from '../types';

interface PawnReceiptData extends Clearance {
  redemptionDate?: string;
  interest?: InterestCalculation | null;
  redeemPaymentMethod?: string;
}

interface PrintablePawnReceiptProps {
  data: PawnReceiptData;
  company?: CompanyInfo;
}

export function PrintablePawnReceipt({ data, company }: PrintablePawnReceiptProps) {
  const today = data?.redemptionDate || new Date().toISOString().split('T')[0];
  const interest = data?.interest;
  const totalPayable = interest ? interest.totalPayable : Number(data?.total || 0);

  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const formatCurrency = (amount: number) => `Rs. ${amount.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="pos-receipt">
      <style>{`
        .pos-receipt {
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
        .pos-receipt * {
          box-sizing: border-box;
        }
        .pos-header {
          text-align: center;
          border-bottom: 1px dashed #000;
          padding-bottom: 8px;
          margin-bottom: 8px;
        }
        .pos-header h1 {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pos-header p {
          margin: 1px 0;
          font-size: 10px;
        }
        .pos-title {
          text-align: center;
          font-size: 13px;
          font-weight: bold;
          margin: 8px 0;
          padding: 4px 0;
          border-top: 1px dashed #000;
          border-bottom: 1px dashed #000;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .pos-row {
          display: flex;
          justify-content: space-between;
          padding: 1px 0;
        }
        .pos-row .label {
          color: #333;
        }
        .pos-row .value {
          font-weight: bold;
          text-align: right;
        }
        .pos-divider {
          border-top: 1px dashed #000;
          margin: 6px 0;
        }
        .pos-item {
          padding: 3px 0;
        }
        .pos-item .item-name {
          font-weight: bold;
        }
        .pos-item .item-detail {
          font-size: 10px;
          color: #555;
          padding-left: 8px;
        }
        .pos-total {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          padding: 8px 0;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          margin: 6px 0;
        }
        .pos-footer {
          text-align: center;
          font-size: 10px;
          margin-top: 12px;
          padding-top: 8px;
          border-top: 1px dashed #000;
        }
        .pos-footer p {
          margin: 2px 0;
        }
        .pos-timestamp {
          text-align: center;
          font-size: 9px;
          color: #666;
          margin-top: 4px;
        }
        @media print {
          body { margin: 0; padding: 0; }
          .pos-receipt { margin: 0; padding: 3mm; }
          @page { size: 80mm auto; margin: 0; }
        }
        @media screen {
          .pos-receipt {
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
            border-radius: 4px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="pos-header">
        <h1>{company?.name || 'Onelka Jewellery'}</h1>
        {company?.tagline && <p>{company.tagline}</p>}
        <p>{company?.address || ''}</p>
        <p>Tel: {company?.phone || ''}</p>
      </div>

      {/* Title */}
      <div className="pos-title">උකස් Receipt / Pawn Redemption</div>

      {/* Ticket Info */}
      <div className="pos-row">
        <span className="label">Ticket #:</span>
        <span className="value">{data.clearanceNumber}</span>
      </div>
      <div className="pos-row">
        <span className="label">Date:</span>
        <span className="value">{formatDate(today)}</span>
      </div>
      <div className="pos-row">
        <span className="label">Pawn Date:</span>
        <span className="value">{formatDate(data.pawnDate || data.issueDate)}</span>
      </div>

      <div className="pos-divider" />

      {/* Customer Info */}
      <div className="pos-row">
        <span className="label">Customer:</span>
        <span className="value">{data.customerName}</span>
      </div>
      {data.customerNic && (
        <div className="pos-row">
          <span className="label">NIC:</span>
          <span className="value">{data.customerNic}</span>
        </div>
      )}
      {data.customerPhone && (
        <div className="pos-row">
          <span className="label">Phone:</span>
          <span className="value">{data.customerPhone}</span>
        </div>
      )}

      <div className="pos-divider" />

      {/* Items */}
      <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '4px' }}>ITEMS REDEEMED:</div>
      {data.items.map((item, i) => (
        <div key={i} className="pos-item">
          <div className="item-name">{i + 1}. {item.productName}</div>
          {(item.karat || item.metalWeight) && (
            <div className="item-detail">
              {item.karat && `${item.karat} `}
              {item.metalType && `${item.metalType} `}
              {item.metalWeight ? `${item.metalWeight}g` : ''}
            </div>
          )}
          <div className="pos-row">
            <span className="item-detail">Qty: {item.quantity}</span>
            <span>{formatCurrency(item.total)}</span>
          </div>
        </div>
      ))}

      <div className="pos-divider" />

      {/* Financial Breakdown */}
      <div className="pos-row">
        <span className="label">Principal:</span>
        <span className="value">{formatCurrency(data.total)}</span>
      </div>

      {interest && (
        <>
          {interest.daysElapsed > 0 && (
            <div className="pos-row">
              <span className="label">Days:</span>
              <span className="value">{interest.daysElapsed} days</span>
            </div>
          )}
          {interest.firstMonthInterest > 0 && (
            <div className="pos-row">
              <span className="label">1st Mo. ({interest.interestRatePerMonth}%):</span>
              <span className="value">{formatCurrency(interest.firstMonthInterest)}</span>
            </div>
          )}
          {interest.additionalMonthsInterest > 0 && (
            <div className="pos-row">
              <span className="label">Add. Months:</span>
              <span className="value">{formatCurrency(interest.additionalMonthsInterest)}</span>
            </div>
          )}
          {interest.proratedDailyInterest > 0 && (
            <div className="pos-row">
              <span className="label">Daily ({interest.remainingDays}d):</span>
              <span className="value">{formatCurrency(interest.proratedDailyInterest)}</span>
            </div>
          )}
          <div className="pos-row">
            <span className="label">Total Interest:</span>
            <span className="value">{formatCurrency(interest.totalInterest)}</span>
          </div>
        </>
      )}

      {/* Total */}
      <div className="pos-total">
        TOTAL PAID: {formatCurrency(totalPayable)}
      </div>

      {/* Payment Method */}
      <div className="pos-row">
        <span className="label">Payment:</span>
        <span className="value">{(data.redeemPaymentMethod || data.paymentMethod || 'cash').replace('-', ' ').toUpperCase()}</span>
      </div>

      {/* Footer */}
      <div className="pos-footer">
        <p>Items returned to customer.</p>
        <p>Thank you for your trust!</p>
        <p>— {company?.name || 'Onelka Jewellery'} —</p>
      </div>

      <div className="pos-timestamp">
        Printed: {new Date().toLocaleString('en-GB')}
      </div>
    </div>
  );
}
