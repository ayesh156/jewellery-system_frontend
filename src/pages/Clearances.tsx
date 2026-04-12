import { useState, useMemo, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Landmark,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Printer,
  Download,
  AlertTriangle,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  CreditCard,
  Loader2,
  X,
  MoreVertical,
  SlidersHorizontal,
  TrendingUp,
  Percent,
  HandCoins,
  ShieldCheck,
  Share2,
  Banknote,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Combobox } from '../components/ui/Combobox';
import { DateCombobox } from '../components/ui/DateCombobox';
import { Badge } from '../components/ui/Badge';
import { Modal, ModalContent, ModalFooter } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, MobileCard, MobileCardHeader, MobileCardContent, MobileCardRow, MobileCardActions, MobileCardsContainer } from '../components/ui/Table';
import { clearanceApi, companyApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { formatCurrency, formatDate } from '../utils/formatters';
import { calculatePawnInterest } from '../utils/pawnCalculations';
import { downloadBillPdf, downloadAndWhatsApp } from '../utils/billPdf';
import { cn } from '../utils/cn';
import type { Clearance, InvoiceStatus, PaymentMethod, InterestCalculation } from '../types';

const pawnStatuses: InvoiceStatus[] = ['draft', 'pending', 'partial', 'paid', 'cancelled'];
const paymentMethods: PaymentMethod[] = ['cash', 'card', 'bank-transfer', 'cheque', 'credit'];

function getPawnStatusLabel(status: InvoiceStatus): string {
  switch (status) {
    case 'pending': return 'Active';
    case 'partial': return 'Interest Paid';
    case 'paid': return 'Redeemed';
    case 'draft': return 'Draft';
    case 'cancelled': return 'Forfeited';
    default: return status;
  }
}

export function Clearances() {
  const navigate = useNavigate();
  const { user: authUser } = useAuth();
  const [clearances, setClearances] = useState<Clearance[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState('');
  const [amountMin, setAmountMin] = useState('');
  const [amountMax, setAmountMax] = useState('');
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedClearance, setSelectedClearance] = useState<Clearance | null>(null);
  const [redeemPaymentMethod, setRedeemPaymentMethod] = useState<PaymentMethod>('cash');
  const [redeeming, setRedeeming] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNotes, setPaymentNotes] = useState('');
  const [processingPayment, setProcessingPayment] = useState(false);
  const [moreMenuId, setMoreMenuId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [showRedemptionSuccess, setShowRedemptionSuccess] = useState(false);
  const [redeemedClearance, setRedeemedClearance] = useState<Clearance | null>(null);

  const [defaultInterestRate, setDefaultInterestRate] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const mapClearance = (clr: any): Clearance => ({
    ...clr,
    subtotal: Number(clr.subtotal),
    discount: Number(clr.discount),
    tax: Number(clr.tax),
    taxRate: clr.taxRate ? Number(clr.taxRate) : undefined,
    total: Number(clr.total),
    amountPaid: Number(clr.amountPaid),
    balanceDue: Number(clr.balanceDue),
    monthlyInterestRate: clr.monthlyInterestRate ? Number(clr.monthlyInterestRate) : undefined,
    interestEnabled: clr.interestEnabled !== false,
    items: (clr.items || []).map((item: any) => ({
      ...item,
      metalWeight: item.metalWeight ? Number(item.metalWeight) : 0,
      quantity: Number(item.quantity),
      unitPrice: Number(item.unitPrice),
      originalPrice: item.originalPrice ? Number(item.originalPrice) : undefined,
      discount: item.discount ? Number(item.discount) : undefined,
      total: Number(item.total),
    })),
  });

  const fetchClearances = useCallback(async () => {
    try {
      setLoading(true);
      const res = await clearanceApi.getAll({ limit: 100 });
      setClearances(res.data.map(mapClearance));
    } catch (err: any) {
      toast.error(err.message || 'Failed to load pawn tickets');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchClearances(); }, [fetchClearances]);

  useEffect(() => {
    companyApi.get().then(res => {
      const rate = parseFloat(res.data.pawnInterestRate || '5');
      if (rate > 0) setDefaultInterestRate(rate);
    }).catch(() => {});
  }, []);

  const getInterest = useCallback((clr: Clearance): InterestCalculation | null => {
    if (!clr.interestEnabled || clr.status === 'cancelled') return null;
    // For redeemed tickets without redemptionDate, we can't calculate
    if (clr.status === 'paid' && !clr.redemptionDate) return null;
    const pawnDate = clr.pawnDate || clr.issueDate;
    const rate = clr.monthlyInterestRate || defaultInterestRate;
    // For redeemed tickets, calculate interest from pawnDate to redemptionDate
    const endDate = clr.status === 'paid' && clr.redemptionDate
      ? clr.redemptionDate
      : new Date().toISOString().split('T')[0];
    return calculatePawnInterest(clr.total, pawnDate, endDate, rate);
  }, [defaultInterestRate]);

  const filteredClearances = useMemo(() => {
    return clearances.filter((clr) => {
      const matchesSearch =
        clr.clearanceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clr.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (clr.customerNic || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = !statusFilter || clr.status === statusFilter;
      let matchesDate = true;
      if (dateFrom) matchesDate = new Date(clr.issueDate) >= new Date(dateFrom);
      if (matchesDate && dateTo) { const to = new Date(dateTo); to.setHours(23, 59, 59, 999); matchesDate = new Date(clr.issueDate) <= to; }
      const matchesPayment = !paymentMethodFilter || clr.paymentMethod === paymentMethodFilter;
      let matchesAmount = true;
      if (amountMin) matchesAmount = clr.total >= Number(amountMin);
      if (matchesAmount && amountMax) matchesAmount = clr.total <= Number(amountMax);
      return matchesSearch && matchesStatus && matchesDate && matchesPayment && matchesAmount;
    });
  }, [clearances, searchQuery, statusFilter, dateFrom, dateTo, paymentMethodFilter, amountMin, amountMax]);

  const activeFilterCount = [statusFilter, dateFrom, dateTo, paymentMethodFilter, amountMin, amountMax].filter(Boolean).length;

  const activePawns = clearances.filter((c) => c.status === 'pending' || c.status === 'partial' || c.status === 'draft');
  const redeemedPawns = clearances.filter((c) => c.status === 'paid');
  const totalLoaned = activePawns.reduce((sum, c) => sum + c.total, 0);
  const totalEstimatedInterest = activePawns.reduce((sum, c) => {
    const interest = getInterest(c);
    return sum + (interest?.totalInterest || 0);
  }, 0);

  const getStatusBadge = (status: InvoiceStatus) => {
    switch (status) {
      case 'paid': return <Badge variant="success">Redeemed</Badge>;
      case 'pending': return <Badge variant="warning">Active</Badge>;
      case 'partial': return <Badge variant="info">Interest Paid</Badge>;
      case 'draft': return <Badge variant="default">Draft</Badge>;
      case 'cancelled': return <Badge variant="error">Forfeited</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  const handleRedeem = async () => {
    if (!selectedClearance) return;
    setRedeeming(true);
    try {
      const interest = getInterest(selectedClearance);
      const totalPayable = interest ? interest.totalPayable : selectedClearance.total;
      const today = new Date().toISOString().split('T')[0];
      await clearanceApi.redeem(selectedClearance.id, {
        redemptionDate: today,
        amountPaid: totalPayable.toFixed(2),
        paymentMethod: redeemPaymentMethod,
        notes: `Redeemed. Principal: ${selectedClearance.total.toFixed(2)}, Interest: ${(interest?.totalInterest || 0).toFixed(2)}`,
      });
      toast.success('Pawn ticket redeemed successfully!');
      setShowRedeemModal(false);
      // Store receipt data for later use
      const receiptData = buildPaymentReceiptData(selectedClearance, totalPayable, redeemPaymentMethod, 'redemption', interest);
      localStorage.setItem('printPawnPayment', JSON.stringify(receiptData));
      // Auto-open redemption receipt
      const billFormat = authUser?.pawnBillFormat || localStorage.getItem('pawnBillFormat') || 'A4';
      window.open(`/clearance/${selectedClearance.id}/payment-receipt?format=${billFormat === '80mm' ? '80mm' : 'A4'}`, '_blank');
      // Show success modal with all actions
      const redeemedClr = { ...selectedClearance, status: 'paid' as InvoiceStatus, redemptionDate: today, amountPaid: totalPayable };
      setRedeemedClearance(redeemedClr);
      setShowRedemptionSuccess(true);
      setSelectedClearance(null);
      fetchClearances();
    } catch (err: any) {
      toast.error(err.message || 'Failed to redeem');
    } finally {
      setRedeeming(false);
    }
  };

  const handleDelete = async () => {
    if (selectedClearance) {
      setDeleting(true);
      try {
        await clearanceApi.delete(selectedClearance.id);
        toast.success('Pawn ticket deleted');
        setShowDeleteModal(false);
        setSelectedClearance(null);
        fetchClearances();
      } catch (err: any) {
        toast.error(err.message || 'Failed to delete');
      } finally {
        setDeleting(false);
      }
    }
  };

  const openViewModal = (clr: Clearance) => { setSelectedClearance(clr); setShowViewModal(true); };
  const openRedeemModal = (clr: Clearance) => { setSelectedClearance(clr); setRedeemPaymentMethod('cash'); setShowRedeemModal(true); };
  const openDeleteModal = (clr: Clearance) => { setSelectedClearance(clr); setShowDeleteModal(true); };
  const openPaymentModal = (clr: Clearance) => {
    setSelectedClearance(clr);
    setPaymentMethod('cash');
    setPaymentAmount('');
    setPaymentNotes('');
    setShowPaymentModal(true);
  };
  const handlePrint = (clr: Clearance) => { localStorage.setItem('printClearance', JSON.stringify(clr)); window.open(`/clearance/${clr.id}/print`, '_blank'); };

  const handleDownloadTicket = (clr: Clearance) => {
    localStorage.setItem('printClearance', JSON.stringify(clr));
    const docName = clr.clearanceNumber || `PawnTicket-${clr.id}`;
    downloadBillPdf(`/clearance/${clr.id}/print`, docName);
  };

  const handleWhatsAppTicket = (clr: Clearance) => {
    localStorage.setItem('printClearance', JSON.stringify(clr));
    const docName = clr.clearanceNumber || `PawnTicket-${clr.id}`;
    downloadAndWhatsApp(`/clearance/${clr.id}/print`, docName, clr.customerPhone || '', clr.customerName || 'Customer');
  };

  const buildPaymentReceiptData = (clr: Clearance, amount: number, method: string, type: 'interest' | 'partial' | 'redemption', interest: InterestCalculation | null) => ({
    clearanceNumber: clr.clearanceNumber,
    customerName: clr.customerName,
    customerNic: clr.customerNic,
    customerPhone: clr.customerPhone,
    customerAddress: clr.customerAddress,
    pawnDate: clr.pawnDate || clr.issueDate,
    paymentDate: new Date().toISOString().split('T')[0],
    paymentMethod: method,
    paymentAmount: amount,
    paymentType: type,
    items: clr.items.map(item => ({
      productName: item.productName,
      metalType: item.metalType,
      karat: item.karat,
      metalWeight: item.metalWeight,
      total: item.total,
    })),
    principalAmount: clr.total,
    interestRate: clr.monthlyInterestRate || defaultInterestRate,
    daysElapsed: interest?.daysElapsed,
    firstMonthInterest: interest?.firstMonthInterest,
    additionalMonthsInterest: interest?.additionalMonthsInterest,
    proratedDailyInterest: interest?.proratedDailyInterest,
    totalInterest: interest?.totalInterest,
    totalPayable: interest?.totalPayable,
  });

  const handleMakePayment = async () => {
    if (!selectedClearance || !paymentAmount) return;
    setProcessingPayment(true);
    try {
      const amount = Number(paymentAmount);
      if (isNaN(amount) || amount <= 0) {
        toast.error('Enter a valid amount');
        setProcessingPayment(false);
        return;
      }
      const interest = getInterest(selectedClearance);
      const totalPayable = interest ? interest.totalPayable : selectedClearance.total;
      const isFullRedemption = amount >= totalPayable - (selectedClearance.amountPaid || 0);

      if (isFullRedemption) {
        // Full redemption
        const today = new Date().toISOString().split('T')[0];
        await clearanceApi.redeem(selectedClearance.id, {
          redemptionDate: today,
          amountPaid: amount.toFixed(2),
          paymentMethod: paymentMethod,
          notes: paymentNotes || `Redeemed. Principal: ${selectedClearance.total.toFixed(2)}, Interest: ${(interest?.totalInterest || 0).toFixed(2)}`,
        });
        toast.success('Pawn ticket redeemed!');
        const receiptData = buildPaymentReceiptData(selectedClearance, amount, paymentMethod, 'redemption', interest);
        localStorage.setItem('printPawnPayment', JSON.stringify(receiptData));
        // Show success modal
        const redeemedClr = { ...selectedClearance, status: 'paid' as InvoiceStatus, redemptionDate: today, amountPaid: amount };
        setRedeemedClearance(redeemedClr);
        setShowRedemptionSuccess(true);
      } else {
        // Partial / interest payment
        const paymentId = `cpay-${Date.now()}`;
        await clearanceApi.recordPayment(selectedClearance.id, {
          id: paymentId,
          amount: amount.toFixed(2),
          method: paymentMethod,
          date: new Date().toISOString().split('T')[0],
          notes: paymentNotes || 'Interest / partial payment',
        });
        toast.success('Payment recorded!');
        const type = amount <= (interest?.totalInterest || 0) ? 'interest' as const : 'partial' as const;
        const receiptData = {
          ...buildPaymentReceiptData(selectedClearance, amount, paymentMethod, type, interest),
          previousPayments: selectedClearance.amountPaid || 0,
          remainingBalance: Math.max(0, totalPayable - (selectedClearance.amountPaid || 0) - amount),
        };
        localStorage.setItem('printPawnPayment', JSON.stringify(receiptData));
        const billFormat = authUser?.pawnBillFormat || localStorage.getItem('pawnBillFormat') || 'A4';
        window.open(`/clearance/${selectedClearance.id}/payment-receipt?format=${billFormat === '80mm' ? '80mm' : 'A4'}`, '_blank');
      }

      setShowPaymentModal(false);
      setSelectedClearance(null);
      fetchClearances();
    } catch (err: any) {
      toast.error(err.message || 'Payment failed');
    } finally {
      setProcessingPayment(false);
    }
  };

  const handleStatusChange = async (clr: Clearance, newStatus: InvoiceStatus) => {
    if (newStatus === clr.status) return;
    setUpdatingStatus(true);
    try {
      await clearanceApi.update(clr.id, { status: newStatus });
      toast.success(`Status changed to ${getPawnStatusLabel(newStatus)}`);
      if (selectedClearance?.id === clr.id) {
        setSelectedClearance({ ...clr, status: newStatus });
      }
      fetchClearances();
    } catch (err: any) {
      toast.error(err.message || 'Failed to update status');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handlePrintReceipt = (clr: Clearance) => {
    const interest = getInterest(clr);
    const totalPayable = interest ? interest.totalPayable : clr.total;
    const receiptData = buildPaymentReceiptData(clr, totalPayable, clr.paymentMethod || 'cash', 'redemption', interest);
    localStorage.setItem('printPawnPayment', JSON.stringify(receiptData));
    const billFormat = authUser?.pawnBillFormat || localStorage.getItem('pawnBillFormat') || 'A4';
    window.open(`/clearance/${clr.id}/payment-receipt?format=${billFormat === '80mm' ? '80mm' : 'A4'}`, '_blank');
  };

  const handleDownloadReceipt = (clr: Clearance) => {
    const interest = getInterest(clr);
    const totalPayable = interest ? interest.totalPayable : clr.total;
    const receiptData = buildPaymentReceiptData(clr, totalPayable, clr.paymentMethod || 'cash', 'redemption', interest);
    localStorage.setItem('printPawnPayment', JSON.stringify(receiptData));
    const billFormat = authUser?.pawnBillFormat || localStorage.getItem('pawnBillFormat') || 'A4';
    const docName = clr.clearanceNumber || `Receipt-${clr.id}`;
    downloadBillPdf(`/clearance/${clr.id}/payment-receipt?format=${billFormat === '80mm' ? '80mm' : 'A4'}`, docName);
  };

  const handleWhatsAppReceipt = (clr: Clearance) => {
    const interest = getInterest(clr);
    const totalPayable = interest ? interest.totalPayable : clr.total;
    const receiptData = buildPaymentReceiptData(clr, totalPayable, clr.paymentMethod || 'cash', 'redemption', interest);
    localStorage.setItem('printPawnPayment', JSON.stringify(receiptData));
    const billFormat = authUser?.pawnBillFormat || localStorage.getItem('pawnBillFormat') || 'A4';
    const docName = clr.clearanceNumber || `Receipt-${clr.id}`;
    downloadAndWhatsApp(`/clearance/${clr.id}/payment-receipt?format=${billFormat === '80mm' ? '80mm' : 'A4'}`, docName, clr.customerPhone || '', clr.customerName || 'Customer');
  };

  const paginatedClearances = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredClearances.slice(start, start + pageSize);
  }, [filteredClearances, currentPage, pageSize]);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, statusFilter, dateFrom, dateTo, paymentMethodFilter, amountMin, amountMax]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div><div className="h-8 w-52 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" /><div className="h-4 w-64 bg-slate-200 dark:bg-slate-700 rounded mt-2 animate-pulse" /></div>
          <div className="h-10 w-40 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (<Card key={i}><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse"><div className="w-6 h-6" /></div><div className="flex-1 space-y-2"><div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" /><div className="h-7 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" /></div></CardContent></Card>))}
        </div>
        <Card><CardContent className="p-4"><div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" /></CardContent></Card>
        <Card><CardContent className="p-0 md:p-0"><div className="hidden md:block">{[...Array(5)].map((_, i) => (<div key={i} className="grid grid-cols-8 gap-4 px-6 py-4 border-b border-slate-100 dark:border-slate-800">{[...Array(8)].map((_, j) => (<div key={j} className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />))}</div>))}</div></CardContent></Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">උකස් / Pawning</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">Manage pawn tickets, interest & redemptions</p>
        </div>
        <Link to="/clearance/create">
          <Button variant="gold"><Plus className="w-4 h-4" /> New Pawn Ticket</Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-amber-500/10"><Landmark className="w-6 h-6 text-amber-400" /></div><div><p className="text-sm text-slate-600 dark:text-slate-400">Active Pawns</p><p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{activePawns.length}</p></div></CardContent></Card>
        <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-blue-500/10"><HandCoins className="w-6 h-6 text-blue-400" /></div><div><p className="text-sm text-slate-600 dark:text-slate-400">Total Loaned</p><p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{formatCurrency(totalLoaned)}</p></div></CardContent></Card>
        <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-red-500/10"><TrendingUp className="w-6 h-6 text-red-400" /></div><div><p className="text-sm text-slate-600 dark:text-slate-400">Est. Interest</p><p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{formatCurrency(totalEstimatedInterest)}</p></div></CardContent></Card>
        <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-emerald-500/10"><ShieldCheck className="w-6 h-6 text-emerald-400" /></div><div><p className="text-sm text-slate-600 dark:text-slate-400">Redeemed</p><p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{redeemedPawns.length}</p></div></CardContent></Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search pawn #, customer or NIC..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 pr-9" />
              {searchQuery && (<button type="button" onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><X className="w-4 h-4" /></button>)}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Combobox value={statusFilter} onChange={setStatusFilter} options={[{ value: '', label: 'All Status', icon: <Filter className="w-4 h-4" /> }, ...pawnStatuses.map((s) => ({ value: s, label: getPawnStatusLabel(s), icon: s === 'paid' ? <CheckCircle className="w-4 h-4" /> : s === 'pending' ? <Clock className="w-4 h-4" /> : <Landmark className="w-4 h-4" /> }))]} placeholder="Status" className="w-[120px] sm:w-[160px]" />
              <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className={cn('flex items-center gap-2 shrink-0 transition-colors', activeFilterCount > 0 && 'border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400')}>
                <SlidersHorizontal className="w-4 h-4" /><span className="hidden sm:inline">More</span>
                {activeFilterCount > 0 && <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-medium">{activeFilterCount}</span>}
              </Button>
            </div>
          </div>
          <div className={cn('grid transition-all duration-300 ease-in-out', showFilters ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0')}>
            <div className="overflow-hidden"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <DateCombobox value={dateFrom} onChange={setDateFrom} placeholder="From date" clearable />
              <DateCombobox value={dateTo} onChange={setDateTo} placeholder="To date" clearable />
              <Input placeholder="Min amount" type="number" value={amountMin} onChange={(e) => setAmountMin(e.target.value)} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
              <Input placeholder="Max amount" type="number" value={amountMax} onChange={(e) => setAmountMax(e.target.value)} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            </div></div>
          </div>
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Active:</span>
              {statusFilter && <button onClick={() => setStatusFilter('')} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors">Status: {getPawnStatusLabel(statusFilter as InvoiceStatus)} <X className="w-3 h-3" /></button>}
              {dateFrom && <button onClick={() => setDateFrom('')} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">From: {dateFrom} <X className="w-3 h-3" /></button>}
              {dateTo && <button onClick={() => setDateTo('')} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">To: {dateTo} <X className="w-3 h-3" /></button>}
              {amountMin && <button onClick={() => setAmountMin('')} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Min: Rs. {Number(amountMin).toLocaleString()} <X className="w-3 h-3" /></button>}
              {amountMax && <button onClick={() => setAmountMax('')} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Max: Rs. {Number(amountMax).toLocaleString()} <X className="w-3 h-3" /></button>}
              <button onClick={() => { setStatusFilter(''); setPaymentMethodFilter(''); setDateFrom(''); setDateTo(''); setAmountMin(''); setAmountMax(''); }} className="text-xs text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 underline transition-colors ml-1">Clear all</button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pawn Tickets Table */}
      <Card>
        <CardContent className="p-0 md:p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pawn Ticket</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Pawn Date</TableHead>
                <TableHead className="text-right">Principal</TableHead>
                <TableHead className="text-right">Interest</TableHead>
                <TableHead className="text-right">Total Due</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedClearances.map((clr) => {
                const interest = getInterest(clr);
                return (
                  <TableRow key={clr.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/10 flex items-center justify-center"><Landmark className="w-5 h-5 text-amber-400" /></div>
                        <div>
                          <button onClick={() => navigate(`/clearance/${clr.id}/edit`)} className="font-medium text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-left">{clr.clearanceNumber}</button>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{clr.items.length} item(s) · {clr.monthlyInterestRate || defaultInterestRate}%/mo</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-slate-700 dark:text-slate-300">{clr.customerName}</p>
                        {clr.customerNic && <p className="text-xs text-slate-500 dark:text-slate-400">NIC: {clr.customerNic}</p>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400">{formatDate(clr.pawnDate || clr.issueDate)}</p>
                        {interest && <p className="text-xs text-slate-500">{interest.daysElapsed} days</p>}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold text-slate-800 dark:text-slate-200">{formatCurrency(clr.total)}</TableCell>
                    <TableCell className="text-right">
                      {interest ? <span className="text-red-400 font-medium">{formatCurrency(interest.totalInterest)}</span> : clr.status === 'paid' ? <span className="text-slate-400">—</span> : <span className="text-slate-400">N/A</span>}
                    </TableCell>
                    <TableCell className="text-right">
                      {interest ? <span className="font-bold text-amber-400">{formatCurrency(interest.totalPayable)}</span> : <span className="text-slate-600 dark:text-slate-400">{formatCurrency(clr.total)}</span>}
                    </TableCell>
                    <TableCell className="text-center">{getStatusBadge(clr.status)}</TableCell>
                    <TableCell>
                      <div className="relative">
                        <Button variant="ghost" size="icon" onClick={() => setMoreMenuId(moreMenuId === clr.id ? null : clr.id)}><MoreVertical className="w-4 h-4" /></Button>
                        {moreMenuId === clr.id && (
                          <>
                            <div className="fixed inset-0 z-[60]" onClick={() => setMoreMenuId(null)} />
                            <div className="absolute right-0 bottom-full mb-1 z-[70] w-52 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl py-1.5">
                              <button onClick={() => { openViewModal(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"><Eye className="w-4 h-4" /> View Details</button>
                              <button onClick={() => { navigate(`/clearance/${clr.id}/edit`); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"><Edit className="w-4 h-4" /> Edit</button>
                              <div className="my-1 border-t border-slate-200 dark:border-slate-700" />
                              <div className="px-3 py-1"><span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Pawn Ticket</span></div>
                              <button onClick={() => { handlePrint(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"><Printer className="w-4 h-4" /> Print Ticket</button>
                              <button onClick={() => { handleDownloadTicket(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-blue-500 hover:bg-blue-500/10 transition-colors"><Download className="w-4 h-4" /> Download Ticket</button>
                              <button onClick={() => { handleWhatsAppTicket(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-green-500 hover:bg-green-500/10 transition-colors"><Share2 className="w-4 h-4" /> WhatsApp Ticket</button>
                              {clr.status === 'paid' && (
                                <>
                                  <div className="my-1 border-t border-slate-200 dark:border-slate-700" />
                                  <div className="px-3 py-1"><span className="text-[10px] font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider">Redemption Receipt</span></div>
                                  <button onClick={() => { handlePrintReceipt(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-emerald-500 hover:bg-emerald-500/10 transition-colors"><Printer className="w-4 h-4" /> Print Receipt</button>
                                  <button onClick={() => { handleDownloadReceipt(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-blue-500 hover:bg-blue-500/10 transition-colors"><Download className="w-4 h-4" /> Download Receipt</button>
                                  <button onClick={() => { handleWhatsAppReceipt(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-green-500 hover:bg-green-500/10 transition-colors"><Share2 className="w-4 h-4" /> WhatsApp Receipt</button>
                                </>
                              )}
                              {(clr.status === 'pending' || clr.status === 'partial' || clr.status === 'draft') && (
                                <>
                                  <div className="my-1 border-t border-slate-200 dark:border-slate-700" />
                                  <button onClick={() => { openPaymentModal(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-amber-500 hover:bg-amber-500/10 transition-colors"><Banknote className="w-4 h-4" /> Make Payment</button>
                                  <button onClick={() => { openRedeemModal(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-emerald-500 hover:bg-emerald-500/10 transition-colors"><HandCoins className="w-4 h-4" /> Redeem</button>
                                </>
                              )}
                              <button onClick={() => { openDeleteModal(clr); setMoreMenuId(null); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"><Trash2 className="w-4 h-4" /> Delete</button>
                            </div>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* Mobile Cards */}
          <MobileCardsContainer className="p-4">
            {paginatedClearances.map((clr) => {
              const interest = getInterest(clr);
              return (
                <MobileCard key={clr.id}>
                  <MobileCardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 flex items-center justify-center"><Landmark className="w-6 h-6 text-amber-400" /></div>
                      <div>
                        <button onClick={() => navigate(`/clearance/${clr.id}/edit`)} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-left">{clr.clearanceNumber}</button>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{clr.customerName}</p>
                        {clr.customerNic && <p className="text-xs text-slate-400">NIC: {clr.customerNic}</p>}
                      </div>
                    </div>
                    {getStatusBadge(clr.status)}
                  </MobileCardHeader>
                  <MobileCardContent>
                    <MobileCardRow label="Pawn Date" value={formatDate(clr.pawnDate || clr.issueDate)} />
                    <MobileCardRow label="Items" value={`${clr.items.length} item(s)`} />
                    <MobileCardRow label="Rate" value={`${clr.monthlyInterestRate || defaultInterestRate}% / month`} />
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/50">
                      <div className="text-center"><p className="text-xs text-slate-500 dark:text-slate-400">Principal</p><p className="font-bold text-slate-800 dark:text-slate-200">{formatCurrency(clr.total)}</p></div>
                      <div className="text-center"><p className="text-xs text-slate-500 dark:text-slate-400">Interest</p><p className="font-bold text-red-400">{interest ? formatCurrency(interest.totalInterest) : '—'}</p></div>
                      <div className="text-center"><p className="text-xs text-slate-500 dark:text-slate-400">Total Due</p><p className="font-bold text-amber-500">{interest ? formatCurrency(interest.totalPayable) : formatCurrency(clr.total)}</p></div>
                    </div>
                  </MobileCardContent>
                  <MobileCardActions>
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => openViewModal(clr)}><Eye className="w-4 h-4" /> View</Button>
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handleDownloadTicket(clr)}><Download className="w-4 h-4" /> Ticket</Button>
                    {clr.status === 'paid' && (
                      <Button variant="outline" size="sm" className="flex-1 text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10" onClick={() => handlePrintReceipt(clr)}><Printer className="w-4 h-4" /> Receipt</Button>
                    )}
                    {(clr.status === 'pending' || clr.status === 'partial' || clr.status === 'draft') && (
                      <>
                        <Button variant="outline" size="sm" className="flex-1 text-amber-500 border-amber-500/30 hover:bg-amber-500/10" onClick={() => openPaymentModal(clr)}><Banknote className="w-4 h-4" /> Pay</Button>
                        <Button variant="gold" size="sm" className="flex-1" onClick={() => openRedeemModal(clr)}><HandCoins className="w-4 h-4" /> Redeem</Button>
                      </>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => openDeleteModal(clr)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></Button>
                  </MobileCardActions>
                </MobileCard>
              );
            })}
          </MobileCardsContainer>

          {filteredClearances.length === 0 && (
            <div className="p-8 text-center"><Landmark className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-3" /><p className="text-slate-600 dark:text-slate-400">No pawn tickets found</p></div>
          )}
          {filteredClearances.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-700"><Pagination currentPage={currentPage} totalItems={filteredClearances.length} pageSize={pageSize} onPageChange={setCurrentPage} onPageSizeChange={setPageSize} /></div>
          )}
        </CardContent>
      </Card>

      {/* View Pawn Ticket Modal */}
      <Modal isOpen={showViewModal} onClose={() => setShowViewModal(false)} title="Pawn Ticket Details" size="lg">
        {selectedClearance && (() => {
          const interest = getInterest(selectedClearance);
          return (
            <>
              <ModalContent className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{selectedClearance.clearanceNumber}</h3>
                    <p className="text-slate-600 dark:text-slate-400">Pawned on {formatDate(selectedClearance.pawnDate || selectedClearance.issueDate)}</p>
                  </div>
                  {getStatusBadge(selectedClearance.status)}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                    <p className="text-sm text-slate-600 dark:text-slate-400">Customer</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.customerName}</p>
                    {selectedClearance.customerNic && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">NIC: {selectedClearance.customerNic}</p>}
                  </div>
                  <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                    <p className="text-sm text-slate-600 dark:text-slate-400">Interest Rate</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.monthlyInterestRate || defaultInterestRate}% / month</p>
                    <p className="text-xs text-slate-500 mt-0.5">{selectedClearance.interestEnabled !== false ? 'Interest active' : 'Interest disabled'}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Pawned Items</h4>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-100 dark:bg-slate-800/50"><tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 dark:text-slate-400 uppercase">Item</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-slate-600 dark:text-slate-400 uppercase whitespace-nowrap">Weight</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-slate-600 dark:text-slate-400 uppercase whitespace-nowrap">Value</th>
                      </tr></thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50">
                        {selectedClearance.items.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3"><p className="text-slate-800 dark:text-slate-200">{item.productName}</p>{item.karat && <p className="text-xs text-slate-500">{item.karat} {item.metalType}</p>}</td>
                            <td className="px-4 py-3 text-right text-slate-700 dark:text-slate-300">{item.metalWeight ? `${item.metalWeight}g` : '—'}</td>
                            <td className="px-4 py-3 text-right text-slate-800 dark:text-slate-200">{formatCurrency(item.total)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Interest Breakdown */}
                {interest && (
                  <div className="rounded-lg border-2 border-amber-500/30 bg-amber-500/5 p-4 space-y-3">
                    <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Interest Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Days elapsed</span><span className="font-medium text-slate-800 dark:text-slate-200">{interest.daysElapsed} days</span></div>
                      {interest.firstMonthInterest > 0 && <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">1st month interest ({interest.interestRatePerMonth}%)</span><span className="text-red-400">{formatCurrency(interest.firstMonthInterest)}</span></div>}
                      {interest.additionalMonthsInterest > 0 && <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Additional {interest.monthsCompleted - 1} month(s) @ {interest.interestRatePerMonth}%</span><span className="text-red-400">{formatCurrency(interest.additionalMonthsInterest)}</span></div>}
                      {interest.proratedDailyInterest > 0 && <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Pro-rated {interest.remainingDays} days @ {interest.dailyRate.toFixed(4)}%/day</span><span className="text-red-400">{formatCurrency(interest.proratedDailyInterest)}</span></div>}
                      <div className="flex justify-between pt-2 border-t border-amber-500/20"><span className="font-semibold text-slate-800 dark:text-slate-200">Total Interest</span><span className="font-bold text-red-400">{formatCurrency(interest.totalInterest)}</span></div>
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Advance Amount</span><span className="text-slate-800 dark:text-slate-200">{formatCurrency(selectedClearance.total)}</span></div>
                  {interest && <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Accrued Interest</span><span className="text-red-400">{formatCurrency(interest.totalInterest)}</span></div>}
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-slate-800 dark:text-slate-200">{selectedClearance.status === 'paid' ? 'Amount Paid' : 'Total Payable'}</span>
                    <span className="text-amber-400">{interest ? formatCurrency(interest.totalPayable) : formatCurrency(selectedClearance.total)}</span>
                  </div>
                  {selectedClearance.status === 'paid' && selectedClearance.redemptionDate && (
                    <p className="text-xs text-emerald-500 text-right">Redeemed on {formatDate(selectedClearance.redemptionDate)}</p>
                  )}
                </div>

                {/* Status Change */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Status</span>
                  <Combobox
                    value={selectedClearance.status}
                    onChange={(val) => handleStatusChange(selectedClearance, val as InvoiceStatus)}
                    options={pawnStatuses.map(s => ({ value: s, label: getPawnStatusLabel(s), icon: s === 'paid' ? <CheckCircle className="w-4 h-4" /> : s === 'pending' ? <Clock className="w-4 h-4" /> : <Landmark className="w-4 h-4" /> }))}
                    placeholder="Status"
                    className="w-[160px]"
                  />
                </div>

                {/* Action Buttons Grid */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Pawn Ticket</p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm" className="w-full" onClick={() => handlePrint(selectedClearance)}><Printer className="w-3.5 h-3.5" /> Print</Button>
                      <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500/30 hover:bg-blue-500/10" onClick={() => handleDownloadTicket(selectedClearance)}><Download className="w-3.5 h-3.5" /> Download</Button>
                      <Button variant="outline" size="sm" className="w-full text-green-500 border-green-500/30 hover:bg-green-500/10" onClick={() => handleWhatsAppTicket(selectedClearance)}><Share2 className="w-3.5 h-3.5" /> WhatsApp</Button>
                    </div>
                  </div>
                  {selectedClearance.status === 'paid' && (
                    <div>
                      <p className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-2">Redemption Receipt</p>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm" className="w-full text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10" onClick={() => handlePrintReceipt(selectedClearance)}><Printer className="w-3.5 h-3.5" /> Print</Button>
                        <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500/30 hover:bg-blue-500/10" onClick={() => handleDownloadReceipt(selectedClearance)}><Download className="w-3.5 h-3.5" /> Download</Button>
                        <Button variant="outline" size="sm" className="w-full text-green-500 border-green-500/30 hover:bg-green-500/10" onClick={() => handleWhatsAppReceipt(selectedClearance)}><Share2 className="w-3.5 h-3.5" /> WhatsApp</Button>
                      </div>
                    </div>
                  )}
                </div>
              </ModalContent>
              <ModalFooter>
                <Button variant="ghost" onClick={() => setShowViewModal(false)}>Close</Button>
                {(selectedClearance.status === 'pending' || selectedClearance.status === 'partial' || selectedClearance.status === 'draft') && (
                  <>
                    <Button variant="outline" className="text-amber-500 border-amber-500/30 hover:bg-amber-500/10" onClick={() => { setShowViewModal(false); openPaymentModal(selectedClearance); }}><Banknote className="w-4 h-4" /> Make Payment</Button>
                    <Button variant="gold" onClick={() => { setShowViewModal(false); openRedeemModal(selectedClearance); }}><HandCoins className="w-4 h-4" /> Redeem</Button>
                  </>
                )}
              </ModalFooter>
            </>
          );
        })()}
      </Modal>

      {/* Redeem Modal */}
      <Modal isOpen={showRedeemModal} onClose={() => setShowRedeemModal(false)} title="Redeem Pawn Ticket" size="md">
        {selectedClearance && (() => {
          const interest = getInterest(selectedClearance);
          const totalPayable = interest ? interest.totalPayable : selectedClearance.total;
          return (
            <>
              <ModalContent className="space-y-5">
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-3"><HandCoins className="w-5 h-5 text-emerald-500" /><h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Redemption Summary</h4></div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Pawn Ticket</span><span className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.clearanceNumber}</span></div>
                    <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Customer</span><span className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.customerName}</span></div>
                    {selectedClearance.customerNic && <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">NIC</span><span className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.customerNic}</span></div>}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Items to Return</h4>
                  <div className="space-y-2">
                    {selectedClearance.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                        <div><p className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.productName}</p>{item.karat && <p className="text-xs text-slate-500">{item.karat} · {item.metalWeight}g</p>}</div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{formatCurrency(item.total)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Advance Amount</span><span className="text-slate-800 dark:text-slate-200">{formatCurrency(selectedClearance.total)}</span></div>
                  {interest && interest.firstMonthInterest > 0 && <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">1st month interest ({interest.interestRatePerMonth}%)</span><span className="text-red-400">{formatCurrency(interest.firstMonthInterest)}</span></div>}
                  {interest && interest.additionalMonthsInterest > 0 && <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Additional months interest</span><span className="text-red-400">{formatCurrency(interest.additionalMonthsInterest)}</span></div>}
                  {interest && interest.proratedDailyInterest > 0 && <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Pro-rated daily interest ({interest.remainingDays} days)</span><span className="text-red-400">{formatCurrency(interest.proratedDailyInterest)}</span></div>}
                  <div className="flex justify-between font-bold text-lg pt-3 border-t border-slate-200 dark:border-slate-700"><span className="text-slate-800 dark:text-slate-200">Total to Pay</span><span className="text-amber-400">{formatCurrency(totalPayable)}</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-2">Payment Method</label>
                  <Combobox value={redeemPaymentMethod} onChange={(val) => setRedeemPaymentMethod(val as PaymentMethod)} options={paymentMethods.map((m) => ({ value: m, label: m.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), icon: m === 'cash' ? <DollarSign className="w-4 h-4" /> : <CreditCard className="w-4 h-4" /> }))} placeholder="Select payment method..." />
                </div>
              </ModalContent>
              <ModalFooter>
                <Button variant="ghost" onClick={() => setShowRedeemModal(false)} disabled={redeeming}>Cancel</Button>
                <Button variant="gold" onClick={handleRedeem} disabled={redeeming}>
                  {redeeming ? <Loader2 className="w-4 h-4 animate-spin" /> : <HandCoins className="w-4 h-4" />}
                  Confirm & Print Receipt
                </Button>
              </ModalFooter>
            </>
          );
        })()}
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Delete Pawn Ticket">
        <ModalContent className="space-y-5">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <AlertTriangle className="w-8 h-8 text-red-400 shrink-0 mt-0.5" />
            <div><p className="font-medium text-slate-800 dark:text-slate-200">Are you sure?</p><p className="text-sm text-slate-600 dark:text-slate-400 mt-1">This will permanently delete pawn ticket "{selectedClearance?.clearanceNumber}". This action cannot be undone.</p></div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setShowDeleteModal(false)} disabled={deleting}>Cancel</Button>
          <Button variant="destructive" onClick={handleDelete} disabled={deleting}>{deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />} Delete</Button>
        </ModalFooter>
      </Modal>

      {/* Make Payment Modal */}
      <Modal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} title="Make Payment" size="md">
        {selectedClearance && (() => {
          const interest = getInterest(selectedClearance);
          const totalPayable = interest ? interest.totalPayable : selectedClearance.total;
          const alreadyPaid = selectedClearance.amountPaid || 0;
          const outstanding = Math.max(0, totalPayable - alreadyPaid);
          const interestOnly = interest?.totalInterest || 0;
          return (
            <>
              <ModalContent className="space-y-5">
                {/* Ticket Overview */}
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-3"><Banknote className="w-5 h-5 text-amber-500" /><h4 className="font-semibold text-amber-600 dark:text-amber-400">Payment Summary</h4></div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Pawn Ticket</span><span className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.clearanceNumber}</span></div>
                    <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Customer</span><span className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.customerName}</span></div>
                    {selectedClearance.customerNic && <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">NIC</span><span className="font-medium text-slate-800 dark:text-slate-200">{selectedClearance.customerNic}</span></div>}
                  </div>
                </div>

                {/* Items */}
                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Pawned Items</h4>
                  <div className="space-y-1.5">
                    {selectedClearance.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                        <div><p className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.productName}</p>{item.karat && <p className="text-xs text-slate-500">{item.karat} · {item.metalWeight}g</p>}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Advance Amount</span><span className="text-slate-800 dark:text-slate-200">{formatCurrency(selectedClearance.total)}</span></div>
                  {interest && interest.totalInterest > 0 && (
                    <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Accrued Interest ({interest.interestRatePerMonth}%/mo · {interest.daysElapsed}d)</span><span className="text-red-400">{formatCurrency(interest.totalInterest)}</span></div>
                  )}
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-slate-200 dark:border-slate-700"><span className="text-slate-800 dark:text-slate-200">Total Due</span><span className="text-amber-400">{formatCurrency(totalPayable)}</span></div>
                  {alreadyPaid > 0 && (
                    <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Already Paid</span><span className="text-emerald-400">-{formatCurrency(alreadyPaid)}</span></div>
                  )}
                  <div className="flex justify-between text-sm font-bold"><span className="text-slate-800 dark:text-slate-200">Outstanding</span><span className="text-red-400">{formatCurrency(outstanding)}</span></div>
                </div>

                {/* Quick Amount Buttons */}
                <div>
                  <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-2">Amount to Pay</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {interestOnly > 0 && (
                      <button
                        type="button"
                        onClick={() => setPaymentAmount(interestOnly.toFixed(2))}
                        className={cn('px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors', paymentAmount === interestOnly.toFixed(2) ? 'bg-amber-500/20 border-amber-500 text-amber-500' : 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800')}
                      >
                        Interest Only — {formatCurrency(interestOnly)}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setPaymentAmount(outstanding.toFixed(2))}
                      className={cn('px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors', paymentAmount === outstanding.toFixed(2) ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' : 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800')}
                    >
                      Full Amount — {formatCurrency(outstanding)}
                    </button>
                  </div>
                  <Input
                    type="number"
                    placeholder="Enter amount..."
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  {paymentAmount && Number(paymentAmount) >= outstanding && (
                    <p className="text-xs text-emerald-500 mt-1">This will fully redeem the pawn ticket</p>
                  )}
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-2">Payment Method</label>
                  <Combobox value={paymentMethod} onChange={(val) => setPaymentMethod(val as PaymentMethod)} options={paymentMethods.map((m) => ({ value: m, label: m.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), icon: m === 'cash' ? <DollarSign className="w-4 h-4" /> : <CreditCard className="w-4 h-4" /> }))} placeholder="Select method..." />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-2">Notes (optional)</label>
                  <Input placeholder="Payment notes..." value={paymentNotes} onChange={(e) => setPaymentNotes(e.target.value)} />
                </div>
              </ModalContent>
              <ModalFooter>
                <Button variant="ghost" onClick={() => setShowPaymentModal(false)} disabled={processingPayment}>Cancel</Button>
                <Button variant="gold" onClick={handleMakePayment} disabled={processingPayment || !paymentAmount || Number(paymentAmount) <= 0}>
                  {processingPayment ? <Loader2 className="w-4 h-4 animate-spin" /> : <Banknote className="w-4 h-4" />}
                  Pay & Print Receipt
                </Button>
              </ModalFooter>
            </>
          );
        })()}
      </Modal>

      {/* Redemption Success Modal */}
      <Modal isOpen={showRedemptionSuccess} onClose={() => { setShowRedemptionSuccess(false); setRedeemedClearance(null); }} title="Redeemed Successfully" size="md">
        {redeemedClearance && (() => {
          const interest = getInterest(redeemedClearance);
          const totalPayable = interest ? interest.totalPayable : redeemedClearance.total;
          return (
            <>
              <ModalContent className="space-y-5">
                {/* Success Banner */}
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">Pawn Ticket Redeemed!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{redeemedClearance.clearanceNumber} — {redeemedClearance.customerName}</p>
                </div>

                {/* Summary */}
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Advance Amount</span><span className="text-slate-800 dark:text-slate-200">{formatCurrency(redeemedClearance.total)}</span></div>
                  {interest && interest.totalInterest > 0 && (
                    <>
                      <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Interest Rate</span><span className="text-slate-800 dark:text-slate-200">{interest.interestRatePerMonth}% / month</span></div>
                      <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Monthly Interest</span><span className="text-red-400">{formatCurrency(redeemedClearance.total * interest.interestRatePerMonth / 100)}</span></div>
                      <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Total Interest ({interest.daysElapsed} days)</span><span className="text-red-400">{formatCurrency(interest.totalInterest)}</span></div>
                    </>
                  )}
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-slate-200 dark:border-slate-700"><span className="text-slate-800 dark:text-slate-200">Total Paid</span><span className="text-amber-400">{formatCurrency(totalPayable)}</span></div>
                  {redeemedClearance.redemptionDate && <p className="text-xs text-emerald-500 text-right">Redeemed on {formatDate(redeemedClearance.redemptionDate)}</p>}
                </div>

                {/* Status */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Status</span>
                  <Combobox
                    value={redeemedClearance.status}
                    onChange={(val) => {
                      handleStatusChange(redeemedClearance, val as InvoiceStatus);
                      setRedeemedClearance({ ...redeemedClearance, status: val as InvoiceStatus });
                    }}
                    options={pawnStatuses.map(s => ({ value: s, label: getPawnStatusLabel(s), icon: s === 'paid' ? <CheckCircle className="w-4 h-4" /> : s === 'pending' ? <Clock className="w-4 h-4" /> : <Landmark className="w-4 h-4" /> }))}
                    placeholder="Status"
                    className="w-[160px]"
                  />
                </div>

                {/* Actions Grid */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Pawn Ticket</p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm" className="w-full" onClick={() => handlePrint(redeemedClearance)}><Printer className="w-3.5 h-3.5" /> Print</Button>
                      <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500/30 hover:bg-blue-500/10" onClick={() => handleDownloadTicket(redeemedClearance)}><Download className="w-3.5 h-3.5" /> Download</Button>
                      <Button variant="outline" size="sm" className="w-full text-green-500 border-green-500/30 hover:bg-green-500/10" onClick={() => handleWhatsAppTicket(redeemedClearance)}><Share2 className="w-3.5 h-3.5" /> WhatsApp</Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-2">Redemption Receipt</p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm" className="w-full text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10" onClick={() => handlePrintReceipt(redeemedClearance)}><Printer className="w-3.5 h-3.5" /> Print</Button>
                      <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500/30 hover:bg-blue-500/10" onClick={() => handleDownloadReceipt(redeemedClearance)}><Download className="w-3.5 h-3.5" /> Download</Button>
                      <Button variant="outline" size="sm" className="w-full text-green-500 border-green-500/30 hover:bg-green-500/10" onClick={() => handleWhatsAppReceipt(redeemedClearance)}><Share2 className="w-3.5 h-3.5" /> WhatsApp</Button>
                    </div>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter>
                <Button variant="gold" onClick={() => { setShowRedemptionSuccess(false); setRedeemedClearance(null); }}>Done</Button>
              </ModalFooter>
            </>
          );
        })()}
      </Modal>
    </div>
  );
}
