import { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Plus, Trash2, Search, Gem, User, FileText, Save, X,
  DollarSign, Percent, Loader2, UserPlus, PackagePlus, ToggleLeft, ToggleRight, Tag,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Combobox } from '../components/ui/Combobox';
import { Modal, ModalContent, ModalFooter } from '../components/ui/Modal';
import { DateCombobox } from '../components/ui/DateCombobox';
import { productsApi, customersApi, clearanceApi, countersApi, companyApi, categoriesApi } from '../services/api';
import { formatCurrency, formatWeight } from '../utils/formatters';
import type { JewelleryItem, JewelleryCategory, Customer, Clearance, InvoiceItem, MetalType, GoldKarat } from '../types';

const metalTypes: MetalType[] = ['gold', 'silver', 'platinum', 'palladium', 'white-gold', 'rose-gold'];
const karats: GoldKarat[] = ['24K', '22K', '21K', '18K', '14K', '10K', '9K'];

export function CreateClearance() {
  const navigate = useNavigate();

  const [allCustomers, setAllCustomers] = useState<Customer[]>([]);
  const [allProducts, setAllProducts] = useState<JewelleryItem[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [customerSearchQuery, setCustomerSearchQuery] = useState('');
  const [showCustomerSearch, setShowCustomerSearch] = useState(false);
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [showProductSearch, setShowProductSearch] = useState(false);
  const [manualItemMode, setManualItemMode] = useState(false);
  const [manualItemForm, setManualItemForm] = useState({ name: '', description: '', metalType: 'gold', weight: '' });
  const [clearanceItems, setClearanceItems] = useState<InvoiceItem[]>([]);
  const [clearanceReason, setClearanceReason] = useState('');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [interestRate, setInterestRate] = useState(5);
  const [interestEnabled, setInterestEnabled] = useState(true);
  const [pawnDate, setPawnDate] = useState(new Date().toISOString().split('T')[0]);
  const [customerNic, setCustomerNic] = useState('');
  const [advanceAmount, setAdvanceAmount] = useState(0);
  const [showNewCustomerModal, setShowNewCustomerModal] = useState(false);
  const [newCustomerForm, setNewCustomerForm] = useState({ name: '', businessName: '', phone: '', email: '', nic: '', address: '', city: '', creditLimit: 0 });
  const [creatingCustomer, setCreatingCustomer] = useState(false);
  const [showNewProductModal, setShowNewProductModal] = useState(false);
  const [newProductForm, setNewProductForm] = useState<Partial<JewelleryItem>>({ name: '', sku: '', barcode: '', categoryId: '', metalType: 'gold', karat: '22K', metalWeight: 0, costPrice: 0, sellingPrice: 0, makingCharges: 0, stockQuantity: 1, reorderLevel: 2, description: '' });
  const [creatingProduct, setCreatingProduct] = useState(false);
  const [categories, setCategories] = useState<JewelleryCategory[]>([]);

  useEffect(() => {
    customersApi.getAll({ isActive: 'true', limit: 100 }).then(res => {
      setAllCustomers(res.data.map((c: any) => ({
        ...c,
        totalPurchased: Number(c.totalPurchased),
        creditLimit: c.creditLimit ? Number(c.creditLimit) : undefined,
        creditBalance: c.creditBalance ? Number(c.creditBalance) : undefined,
      })));
    }).catch(() => toast.error('Failed to load customers'));

    productsApi.getAll({ isActive: 'true', limit: 100 }).then(res => {
      setAllProducts(res.data.map((p: any) => ({
        ...p, metalWeight: Number(p.metalWeight), metalPurity: p.metalPurity ? Number(p.metalPurity) : undefined,
        metalRate: Number(p.metalRate), makingCharges: Number(p.makingCharges),
        gemstoneValue: p.gemstoneValue ? Number(p.gemstoneValue) : undefined,
        otherCharges: p.otherCharges ? Number(p.otherCharges) : undefined,
        sellingPrice: Number(p.sellingPrice), costPrice: Number(p.costPrice),
        totalGemstoneWeight: p.totalGemstoneWeight ? Number(p.totalGemstoneWeight) : undefined,
      })));
    }).catch(() => toast.error('Failed to load products'));

    categoriesApi.getAll().then(res => {
      setCategories(res.data);
    }).catch(() => {});

    companyApi.get().then(res => {
      const pawnRate = parseFloat(res.data.pawnInterestRate || '5');
      setInterestRate(pawnRate);
      if (res.data.pawnInterestEnabled !== undefined) setInterestEnabled(res.data.pawnInterestEnabled);
    }).catch(() => {});
  }, []);

  const filteredCustomers = useMemo(() => {
    return allCustomers.filter((c) => c.name.toLowerCase().includes(customerSearchQuery.toLowerCase()) || c.phone?.includes(customerSearchQuery));
  }, [customerSearchQuery, allCustomers]);

  const getAvailableStock = useCallback((product: JewelleryItem) => {
    const item = clearanceItems.find(i => i.productId === product.id);
    return product.stockQuantity - (item?.quantity || 0);
  }, [clearanceItems]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => p.stockQuantity > 0 && (p.name.toLowerCase().includes(productSearchQuery.toLowerCase()) || p.sku.toLowerCase().includes(productSearchQuery.toLowerCase()) || p.barcode?.toLowerCase().includes(productSearchQuery.toLowerCase())));
  }, [productSearchQuery, allProducts]);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer); setShowCustomerSearch(false); setCustomerSearchQuery('');
    if (customer.nic) setCustomerNic(customer.nic);
  };

  const handleCreateNewCustomer = async () => {
    if (!newCustomerForm.name.trim() || !newCustomerForm.phone.trim()) { toast.error('Customer name and phone are required'); return; }
    setCreatingCustomer(true);
    try {
      const shopCode = localStorage.getItem('shopCode') || 'A';
      const counterRes = await countersApi.getNext('customer', shopCode);
      const res = await customersApi.create({
        id: counterRes.data.formattedId.toLowerCase(), name: newCustomerForm.name, phone: newCustomerForm.phone,
        nic: newCustomerForm.nic || null, email: newCustomerForm.email || null, businessName: newCustomerForm.businessName || null,
        address: newCustomerForm.address || null, city: newCustomerForm.city || null,
        registrationDate: new Date().toISOString().split('T')[0], totalPurchased: '0', customerType: 'retail',
        creditLimit: newCustomerForm.creditLimit ? String(newCustomerForm.creditLimit) : '0', creditBalance: '0', isActive: true,
      });
      const nc = { ...res.data, totalPurchased: Number(res.data.totalPurchased), creditLimit: res.data.creditLimit ? Number(res.data.creditLimit) : 0, creditBalance: res.data.creditBalance ? Number(res.data.creditBalance) : 0 };
      setAllCustomers((prev) => [...prev, nc]); handleSelectCustomer(nc);
      setShowNewCustomerModal(false); setNewCustomerForm({ name: '', businessName: '', phone: '', email: '', nic: '', address: '', city: '', creditLimit: 0 });
      toast.success('Customer created successfully');
    } catch (err: any) { toast.error(err.message || 'Failed to create customer'); } finally { setCreatingCustomer(false); }
  };

  const handleCreateNewProduct = async () => {
    if (!newProductForm.name || !newProductForm.categoryId) { toast.error('Product name and category are required'); return; }
    setCreatingProduct(true);
    try {
      const shopCode = localStorage.getItem('shopCode') || 'A';
      const counterRes = await countersApi.getNext('product', shopCode);
      const res = await productsApi.create({
        id: counterRes.data.formattedId.toLowerCase(), sku: newProductForm.sku || counterRes.data.formatted,
        name: newProductForm.name, description: newProductForm.description || null, barcode: newProductForm.barcode || null,
        categoryId: newProductForm.categoryId, metalType: newProductForm.metalType || 'gold', karat: newProductForm.karat || '22K',
        metalWeight: String(newProductForm.metalWeight || 0), metalRate: '0', makingCharges: String(newProductForm.makingCharges || 0),
        sellingPrice: String(newProductForm.sellingPrice || 0), costPrice: String(newProductForm.costPrice || 0),
        stockQuantity: newProductForm.stockQuantity || 1, reorderLevel: newProductForm.reorderLevel || 2, isActive: true,
      });
      const np: JewelleryItem = { ...res.data, metalWeight: Number(res.data.metalWeight), metalPurity: res.data.metalPurity ? Number(res.data.metalPurity) : undefined, sellingPrice: Number(res.data.sellingPrice), costPrice: Number(res.data.costPrice), metalRate: Number(res.data.metalRate), makingCharges: Number(res.data.makingCharges), stockQuantity: Number(res.data.stockQuantity) };
      setAllProducts((prev) => [...prev, np]); handleAddProduct(np);
      setShowNewProductModal(false); setNewProductForm({ name: '', sku: '', barcode: '', categoryId: '', metalType: 'gold', karat: '22K', metalWeight: 0, costPrice: 0, sellingPrice: 0, makingCharges: 0, stockQuantity: 1, reorderLevel: 2, description: '' });
      toast.success('Product registered and added');
    } catch (err: any) { toast.error(err.message || 'Failed to create product'); } finally { setCreatingProduct(false); }
  };

  const handleAddProduct = (product: JewelleryItem) => {
    if (getAvailableStock(product) <= 0) { toast.error(`"${product.name}" is out of stock!`); return; }
    const existing = clearanceItems.find((i) => i.productId === product.id);
    if (existing) {
      setClearanceItems((prev) => prev.map((i) => i.productId === product.id ? { ...i, quantity: i.quantity + 1, total: (i.quantity + 1) * i.unitPrice } : i));
    } else {
      setClearanceItems((prev) => [...prev, {
        id: `item-${Date.now()}`, productId: product.id, sku: product.sku, productName: product.name,
        description: `${product.metalType} ${product.karat || ''} - ${formatWeight(product.metalWeight)}`,
        quantity: 1, unitPrice: product.sellingPrice, discount: 0, total: product.sellingPrice,
        metalWeight: product.metalWeight, metalType: product.metalType, karat: product.karat,
      }]);
    }
    setShowProductSearch(false); setProductSearchQuery('');
  };

  const handleAddManualItem = () => {
    if (!manualItemForm.name.trim()) { toast.error('Item name is required'); return; }
    setClearanceItems((prev) => [...prev, {
      id: `manual-${Date.now()}`, productId: `manual-${Date.now()}`, sku: 'MANUAL', productName: manualItemForm.name,
      description: manualItemForm.description || `${manualItemForm.metalType}${manualItemForm.weight ? ' - ' + manualItemForm.weight + 'g' : ''}`,
      quantity: 1, unitPrice: 0, discount: 0, total: 0,
      metalWeight: parseFloat(manualItemForm.weight) || 0, metalType: manualItemForm.metalType as any,
    }]);
    setManualItemForm({ name: '', description: '', metalType: 'gold', weight: '' }); toast.success('Item added');
  };

  const handleRemoveItem = (productId: string) => { setClearanceItems((prev) => prev.filter((i) => i.productId !== productId)); };

  const handleSaveClearance = async (status: 'draft' | 'pending') => {
    if (!selectedCustomer || clearanceItems.length === 0) { toast.error('Please select a customer and add at least one item'); return; }
    if (advanceAmount <= 0 && status !== 'draft') { toast.error('Please enter the advance amount'); return; }
    setSaving(true);
    try {
      const shopCode = localStorage.getItem('shopCode') || 'A';
      const counterRes = await countersApi.getNext('clearance', shopCode);
      const clearanceNumber = counterRes.data.formatted;
      const clearanceId = counterRes.data.formattedId.toLowerCase();
      await clearanceApi.create({
        id: clearanceId, clearanceNumber, customerId: selectedCustomer.id,
        customerName: selectedCustomer.name, customerPhone: selectedCustomer.phone,
        customerAddress: selectedCustomer.address, clearanceReason: clearanceReason || null,
        monthlyInterestRate: interestRate.toFixed(2), interestEnabled, pawnDate, customerNic: customerNic || null,
        items: clearanceItems.map(item => ({ ...item, unitPrice: item.unitPrice.toFixed(2), total: item.total.toFixed(2), metalWeight: item.metalWeight?.toString() ?? null, originalPrice: item.originalPrice?.toFixed(2) ?? null, discount: item.discount?.toFixed(2) ?? null })),
        subtotal: advanceAmount.toFixed(2), discount: '0.00', discountType: null, tax: '0.00', taxRate: null,
        total: advanceAmount.toFixed(2), amountPaid: advanceAmount.toFixed(2), balanceDue: '0.00',
        status: status === 'draft' ? 'draft' : 'pending', paymentMethod: 'cash', notes: notes || null,
        issueDate: new Date().toISOString().split('T')[0],
      });
      try {
        await Promise.all(clearanceItems.filter(i => !i.productId?.startsWith('manual-')).map(i => {
          const p = allProducts.find(pr => pr.id === i.productId);
          if (p) return productsApi.updateStock(i.productId, Math.max(0, p.stockQuantity - i.quantity));
        }));
      } catch { toast.error('Pawn ticket created but stock update failed.'); }
      if (status === 'draft') { toast.success('Saved as draft'); navigate('/clearance'); return; }
      toast.success('Pawn ticket created successfully');
      const clearance: Clearance = {
        id: clearanceId, clearanceNumber, customerId: selectedCustomer.id,
        customerName: selectedCustomer.name, customerPhone: selectedCustomer.phone,
        customerAddress: selectedCustomer.address, clearanceReason: clearanceReason || undefined,
        items: clearanceItems, subtotal: advanceAmount, discount: 0, tax: 0, total: advanceAmount,
        amountPaid: advanceAmount, balanceDue: 0, status: 'pending', paymentMethod: 'cash', notes,
        issueDate: new Date().toISOString().split('T')[0],
        monthlyInterestRate: interestRate, interestEnabled, pawnDate, customerNic: customerNic || undefined,
        createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('printClearance', JSON.stringify(clearance));
      window.open(`/clearance/${clearanceId}/print`, '_blank');
      navigate('/clearance');
    } catch (err: any) { toast.error(err.message || 'Failed to create pawn ticket'); } finally { setSaving(false); }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/clearance')}><ArrowLeft className="w-4 h-4" /></Button>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">New Pawn Ticket</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Create a new pawn ticket (උකස් ටිකට්පත)</p>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none" onClick={() => handleSaveClearance('draft')} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span className="hidden sm:inline">Save Draft</span><span className="sm:hidden">Draft</span>
          </Button>
          <Button variant="gold" size="sm" className="flex-1 sm:flex-none" onClick={() => handleSaveClearance('pending')} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
            <span className="hidden sm:inline">Create Pawn Ticket</span><span className="sm:hidden">Create</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Selection */}
          <Card className="relative z-30 overflow-visible">
            <CardHeader><CardTitle className="flex items-center gap-2"><User className="w-5 h-5 text-blue-400" />Customer</CardTitle></CardHeader>
            <CardContent>
              {selectedCustomer ? (
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 flex items-center justify-center border border-blue-500/20">
                      <span className="text-lg font-semibold text-blue-400">{selectedCustomer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">{selectedCustomer.name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{selectedCustomer.phone}</p>
                      {selectedCustomer.customerType !== 'retail' && <Badge variant="gold" className="mt-1">{selectedCustomer.customerType.toUpperCase()}</Badge>}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedCustomer(null)}><X className="w-4 h-4" /> Change</Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                    <Input placeholder="Search customer by name or phone..." value={customerSearchQuery}
                      onChange={(e) => { setCustomerSearchQuery(e.target.value); setShowCustomerSearch(true); }}
                      onFocus={() => setShowCustomerSearch(true)} onBlur={() => setTimeout(() => setShowCustomerSearch(false), 200)} className="pl-10" />
                    {showCustomerSearch && customerSearchQuery && (
                      <div className="absolute z-[9999] w-full mt-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl max-h-72 overflow-y-auto">
                        {filteredCustomers.length > 0 ? filteredCustomers.map((c) => (
                          <button key={c.id} className="w-full flex items-center gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors text-left border-b border-slate-100 dark:border-slate-700/50 last:border-b-0" onClick={() => handleSelectCustomer(c)}>
                            <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0"><span className="text-sm font-medium text-blue-400">{c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span></div>
                            <div className="flex-1 min-w-0"><p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">{c.name}</p><p className="text-xs text-slate-600 dark:text-slate-400">{c.phone}</p></div>
                          </button>
                        )) : <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">No customers found</div>}
                      </div>
                    )}
                  </div>
                  <Button variant="outline" className="shrink-0 gap-1.5" onClick={() => setShowNewCustomerModal(true)} title="Register New Customer">
                    <UserPlus className="w-4 h-4" /><span className="hidden sm:inline">New</span>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pawn Details */}
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-amber-400" />Pawn Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <textarea className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none" rows={2} value={clearanceReason} onChange={(e) => setClearanceReason(e.target.value)} placeholder="e.g. Pawned gold chain for personal loan, Medical emergency..." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Customer NIC" value={customerNic} onChange={(e) => setCustomerNic(e.target.value)} placeholder="e.g., 932345678V" />
                <DateCombobox label="Pawn Date" value={pawnDate} onChange={(val) => setPawnDate(val)} maxDate={new Date().toISOString().split('T')[0]} clearable={false} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Monthly Interest Rate (%)" type="number" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)} min={0} max={100} step={0.5} />
                <div className="flex items-center gap-3 pt-6">
                  <button type="button" onClick={() => setInterestEnabled(!interestEnabled)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${interestEnabled ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${interestEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Interest {interestEnabled ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Collateral Items */}
          <Card className="relative z-20 overflow-visible">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Gem className="w-5 h-5 text-amber-400" />Collateral Items
                  {clearanceItems.length > 0 && <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-amber-500/15 text-amber-500 rounded-full">{clearanceItems.length}</span>}
                </CardTitle>
                <button type="button" onClick={() => setManualItemMode(!manualItemMode)} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">
                  {manualItemMode ? <ToggleRight className="w-5 h-5 text-amber-500" /> : <ToggleLeft className="w-5 h-5" />}
                  {manualItemMode ? 'Manual Entry' : 'From Inventory'}
                </button>
              </div>
            </CardHeader>

            {manualItemMode ? (
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-500/5 border border-amber-200/50 dark:border-amber-500/10">
                  <p className="text-xs text-amber-700 dark:text-amber-400 mb-3 font-medium">Enter item details manually for items not in inventory</p>
                  <div className="space-y-3">
                    <Input label="Item Name" value={manualItemForm.name} onChange={(e) => setManualItemForm({ ...manualItemForm, name: e.target.value })} placeholder="e.g., Gold Chain, Necklace, Ring..." />
                    <textarea className="w-full px-4 py-2.5 bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none text-sm" rows={2} value={manualItemForm.description} onChange={(e) => setManualItemForm({ ...manualItemForm, description: e.target.value })} placeholder="Describe the item: karat, stones, condition, markings..." />
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Metal Type</label>
                        <select value={manualItemForm.metalType} onChange={(e) => setManualItemForm({ ...manualItemForm, metalType: e.target.value })} className="w-full px-3 py-2.5 bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm">
                          <option value="gold">Gold</option><option value="silver">Silver</option><option value="platinum">Platinum</option><option value="white-gold">White Gold</option><option value="rose-gold">Rose Gold</option>
                        </select>
                      </div>
                      <Input label="Weight (g)" type="number" value={manualItemForm.weight} onChange={(e) => setManualItemForm({ ...manualItemForm, weight: e.target.value })} placeholder="e.g., 15.500" step="0.001" />
                    </div>
                    <Button variant="gold" className="w-full" onClick={handleAddManualItem} disabled={!manualItemForm.name.trim()}><Plus className="w-4 h-4" /> Add Item</Button>
                  </div>
                </div>
              </CardContent>
            ) : (
              <div className="relative px-5 pb-4 -mt-2">
                <div className="flex gap-2">
                  <div className="relative flex-1 group">
                    <div className="relative flex items-center rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 shadow-sm group-focus-within:border-amber-500/50 transition-colors duration-200 overflow-hidden">
                      <div className="pl-5 pr-3 flex items-center shrink-0"><Search className="w-5 h-5 text-slate-400 group-focus-within:text-amber-500 transition-colors duration-300" /></div>
                      <input type="text" placeholder="Search by name, SKU, or barcode..." value={productSearchQuery}
                        onChange={(e) => { setProductSearchQuery(e.target.value); setShowProductSearch(true); }}
                        onFocus={() => setShowProductSearch(true)} onBlur={() => setTimeout(() => setShowProductSearch(false), 200)}
                        className="flex-1 py-3.5 pr-4 text-sm bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none" />
                      {productSearchQuery && <button type="button" onMouseDown={(e) => { e.preventDefault(); setProductSearchQuery(''); setShowProductSearch(false); }} className="pr-4 text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>}
                    </div>
                    {showProductSearch && productSearchQuery && (
                      <div className="absolute z-[9999] left-0 right-0 mt-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl max-h-72 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                          <>
                            <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700/50"><p className="text-xs font-medium text-slate-400">{filteredProducts.length} found</p></div>
                            {filteredProducts.map((product) => {
                              const avail = getAvailableStock(product); const oos = avail <= 0;
                              return (
                                <button key={product.id} className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left border-b border-slate-100 dark:border-slate-700/50 last:border-b-0 ${oos ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-50 dark:hover:bg-amber-500/5'}`} onClick={() => !oos && handleAddProduct(product)} disabled={oos}>
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${oos ? 'bg-slate-200/50 border-slate-300/30' : 'bg-gradient-to-br from-amber-400/20 to-yellow-500/10 border-amber-400/20'}`}><Gem className={`w-5 h-5 ${oos ? 'text-slate-400' : 'text-amber-400'}`} /></div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-slate-800 dark:text-slate-200 truncate">{product.name}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{product.sku} &bull; {formatWeight(product.metalWeight)}<span className={`ml-2 font-medium ${oos ? 'text-red-500' : 'text-emerald-500'}`}>{oos ? 'Out of stock' : `${avail} avail.`}</span></p>
                                  </div>
                                </button>);
                            })}
                          </>
                        ) : (
                          <div className="p-6 text-center"><Gem className="w-8 h-8 mx-auto mb-2 text-slate-300 dark:text-slate-600" /><p className="text-sm text-slate-600 dark:text-slate-400">No products found</p><p className="text-xs text-slate-400 mt-1">Try switching to Manual Entry mode</p></div>
                        )}
                      </div>
                    )}
                  </div>
                  <Button variant="outline" className="shrink-0 gap-1.5" onClick={() => setShowNewProductModal(true)} title="Register New Item"><PackagePlus className="w-4 h-4" /><span className="hidden sm:inline">New</span></Button>
                </div>
              </div>
            )}

            <CardContent className={manualItemMode ? 'pt-0' : ''}>
              {clearanceItems.length > 0 ? (
                <div className="space-y-2">
                  {clearanceItems.map((item, index) => (
                    <div key={item.id} className="group relative flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 hover:border-amber-400/30 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-yellow-500/10 flex items-center justify-center shrink-0 border border-amber-400/20"><span className="text-xs font-bold text-amber-500">{index + 1}</span></div>
                      <div className="flex-1 min-w-0"><p className="font-semibold text-sm text-slate-800 dark:text-slate-200 truncate">{item.productName}</p><p className="text-xs text-slate-500 dark:text-slate-400 truncate">{item.description}</p></div>
                      {item.unitPrice > 0 && <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 shrink-0">{formatCurrency(item.unitPrice)}</span>}
                      {item.metalWeight > 0 && <span className="text-xs font-medium text-slate-500 shrink-0">{formatWeight(item.metalWeight)}</span>}
                      <button onClick={() => handleRemoveItem(item.productId!)} className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                  <div className="px-3 py-2 rounded-lg bg-amber-500/5 border border-amber-500/10"><span className="text-xs font-medium text-slate-500 dark:text-slate-400">{clearanceItems.length} collateral item{clearanceItems.length !== 1 ? 's' : ''}</span></div>
                </div>
              ) : (
                <div className="p-8 text-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                  <Gem className="w-10 h-10 mx-auto mb-3 text-amber-400/40" />
                  <p className="font-medium text-slate-600 dark:text-slate-400">No collateral items added</p>
                  <p className="text-xs text-slate-400 mt-1">{manualItemMode ? 'Enter item details above' : 'Search inventory or switch to Manual Entry'}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-amber-500/30 bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-500/5 dark:to-slate-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-amber-500" />Advance Amount</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">The amount disbursed to the customer against the pledged collateral.</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-amber-500">Rs.</span>
                <input type="number" value={advanceAmount || ''} onChange={(e) => setAdvanceAmount(parseFloat(e.target.value) || 0)} placeholder="0.00" min={0} step={100}
                  className="w-full pl-14 pr-4 py-4 text-2xl font-bold bg-white dark:bg-slate-800/80 border-2 border-amber-400/50 rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-right" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Percent className="w-5 h-5 text-amber-400" />Interest Breakdown</CardTitle></CardHeader>
            <CardContent>
              {advanceAmount > 0 ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Principal</span><span className="font-semibold text-slate-800 dark:text-slate-200">{formatCurrency(advanceAmount)}</span></div>
                  {interestEnabled && (<>
                    <div className="flex justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">Monthly Rate</span><span className="font-semibold text-slate-800 dark:text-slate-200">{interestRate}%</span></div>
                    <div className="bg-slate-100 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700/50">
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">First month interest:</p>
                      <p className="text-lg font-semibold text-amber-500">{formatCurrency((advanceAmount * interestRate) / 100)}</p>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-slate-200 dark:border-slate-700/50">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Redemption (30 days)</span>
                      <span className="font-bold text-amber-500">{formatCurrency(advanceAmount + (advanceAmount * interestRate) / 100)}</span>
                    </div>
                  </>)}
                </div>
              ) : <p className="text-sm text-slate-500 dark:text-slate-400">Enter advance amount to see interest</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Summary</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-lg font-bold pt-1 border-t border-slate-200 dark:border-slate-700"><span className="text-slate-800 dark:text-slate-200">Amount Disbursed</span><span className="text-amber-500">{formatCurrency(advanceAmount)}</span></div>
                {interestEnabled && advanceAmount > 0 && <div className="flex justify-between text-sm"><span className="text-slate-500">First Month Interest</span><span className="text-emerald-500">{formatCurrency((advanceAmount * interestRate) / 100)}</span></div>}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Notes (Optional)</CardTitle></CardHeader>
            <CardContent>
              <textarea className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Special conditions, promised redemption date..." />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New Customer Modal */}
      <Modal isOpen={showNewCustomerModal} onClose={() => setShowNewCustomerModal(false)} title="Register Customer" size="lg">
        <ModalContent className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" value={newCustomerForm.name} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, name: e.target.value })} placeholder="e.g., Kamal Perera" required />
            <Input label="Business Name" value={newCustomerForm.businessName} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, businessName: e.target.value })} placeholder="e.g., Silva Jewellers (optional)" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Phone Number" value={newCustomerForm.phone} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, phone: e.target.value })} placeholder="e.g., 0771234567" required />
            <Input label="Email" type="email" value={newCustomerForm.email} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, email: e.target.value })} placeholder="e.g., kamal@example.com" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="NIC Number" value={newCustomerForm.nic} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, nic: e.target.value })} placeholder="e.g., 932345678V or 200012345678" />
            <Input label="Address" value={newCustomerForm.address} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, address: e.target.value })} placeholder="Street address" />
            <Input label="City" value={newCustomerForm.city} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, city: e.target.value })} placeholder="e.g., Colombo" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Credit Limit" type="number" value={newCustomerForm.creditLimit} onChange={(e) => setNewCustomerForm({ ...newCustomerForm, creditLimit: parseFloat(e.target.value) || 0 })} placeholder="0" />
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="ghost" onClick={() => { setShowNewCustomerModal(false); setNewCustomerForm({ name: '', businessName: '', phone: '', email: '', nic: '', address: '', city: '', creditLimit: 0 }); }} disabled={creatingCustomer}>Cancel</Button>
          <Button variant="gold" onClick={handleCreateNewCustomer} disabled={creatingCustomer || !newCustomerForm.name.trim() || !newCustomerForm.phone.trim()}>
            {creatingCustomer && <Loader2 className="w-4 h-4 animate-spin" />} Add Customer
          </Button>
        </ModalFooter>
      </Modal>

      {/* New Product Modal */}
      <Modal isOpen={showNewProductModal} onClose={() => setShowNewProductModal(false)} title="Add New Product" size="lg">
        <ModalContent className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Product Name</label>
              <Input value={newProductForm.name ?? ''} onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })} placeholder="e.g., Gold Wedding Ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">SKU</label>
              <Input value={newProductForm.sku ?? ''} onChange={(e) => setNewProductForm({ ...newProductForm, sku: e.target.value })} placeholder="e.g., GWR-001" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Barcode</label>
              <Input value={newProductForm.barcode ?? ''} onChange={(e) => setNewProductForm({ ...newProductForm, barcode: e.target.value })} placeholder="e.g., 8901234567890" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Category *</label>
              <Combobox
                value={newProductForm.categoryId}
                onChange={(val) => setNewProductForm({ ...newProductForm, categoryId: val })}
                options={[
                  { value: '', label: 'Select Category', icon: <Tag className="w-4 h-4" /> },
                  ...categories.map((cat) => ({ value: cat.id, label: cat.name, icon: <Tag className="w-4 h-4" /> }))
                ]}
                placeholder="Select category..."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Metal Type</label>
              <Combobox
                value={newProductForm.metalType}
                onChange={(val) => setNewProductForm({ ...newProductForm, metalType: val as MetalType })}
                options={metalTypes.map((metal) => ({ value: metal, label: metal.charAt(0).toUpperCase() + metal.slice(1).replace('-', ' '), icon: <Gem className="w-4 h-4" /> }))}
                placeholder="Select metal type..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Karat</label>
              <Combobox
                value={newProductForm.karat}
                onChange={(val) => setNewProductForm({ ...newProductForm, karat: val as GoldKarat })}
                options={karats.map((k) => ({ value: k, label: k, icon: <Gem className="w-4 h-4" /> }))}
                placeholder="Select karat..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Metal Weight (g)</label>
              <Input type="number" step="0.01" value={newProductForm.metalWeight} onChange={(e) => setNewProductForm({ ...newProductForm, metalWeight: parseFloat(e.target.value) || 0 })} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Cost Price</label>
              <Input type="number" value={newProductForm.costPrice} onChange={(e) => setNewProductForm({ ...newProductForm, costPrice: parseFloat(e.target.value) || 0 })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Selling Price</label>
              <Input type="number" value={newProductForm.sellingPrice} onChange={(e) => setNewProductForm({ ...newProductForm, sellingPrice: parseFloat(e.target.value) || 0 })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Making Charges</label>
              <Input type="number" value={newProductForm.makingCharges} onChange={(e) => setNewProductForm({ ...newProductForm, makingCharges: parseFloat(e.target.value) || 0 })} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Stock Quantity</label>
              <Input type="number" value={newProductForm.stockQuantity} onChange={(e) => setNewProductForm({ ...newProductForm, stockQuantity: parseInt(e.target.value) || 0 })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Reorder Level</label>
              <Input type="number" value={newProductForm.reorderLevel} onChange={(e) => setNewProductForm({ ...newProductForm, reorderLevel: parseInt(e.target.value) || 0 })} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1.5">Description</label>
            <textarea className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 resize-none" rows={3} value={newProductForm.description ?? ''} onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })} placeholder="Enter product description..." />
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={() => { setShowNewProductModal(false); setNewProductForm({ name: '', sku: '', barcode: '', categoryId: '', metalType: 'gold', karat: '22K', metalWeight: 0, costPrice: 0, sellingPrice: 0, makingCharges: 0, stockQuantity: 1, reorderLevel: 2, description: '' }); }} disabled={creatingProduct}>Cancel</Button>
          <Button variant="gold" onClick={handleCreateNewProduct} disabled={creatingProduct || !newProductForm.name?.trim() || !newProductForm.categoryId}>
            {creatingProduct && <Loader2 className="w-4 h-4 animate-spin" />} Add Product
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
