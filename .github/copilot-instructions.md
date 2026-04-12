# Copilot Instructions — Onelka Jewellery Frontend

> **IMPORTANT:** When making ANY changes to this project, always update this file (`copilot-instructions.md`) AND `README.md` to reflect the changes (new features, route changes, UI changes, etc.). Keep both files in sync with the actual codebase.

## Project Overview
This is the **frontend** of the Jewellery Management System (React SPA) for the Sri Lankan retail jewellery market. It handles inventory, sales invoicing, clearance sales, and business reporting with full authentication & user management.

**Business:** Onelka Jewellery | **Currency:** Sri Lankan Rupees (Rs.) | **Language:** English
**Backend API:** Separate repository — [jewellery-system-backend]

---

## Tech Stack
- **React 19.2.0** with React Compiler enabled (babel-plugin-react-compiler)
- **TypeScript 5.9.3** in strict mode
- **Vite 7.2.4** — build tool with manual chunk splitting
- **React Router DOM 7.11.0** — client-side SPA routing
- **Tailwind CSS 3.4.17** — utility-first styling with dark mode (`dark:` prefix)
- **Lucide React** — icon library
- **Radix UI** — accessible select primitives
- **clsx + tailwind-merge** — class name composition via `cn()` utility
- **react-hot-toast** — toast notifications
- **jsPDF** — PDF report generation (ink-optimized B&W layout)

---

## Project Structure

```
├── src/
│   ├── main.tsx            # Entry — StrictMode + BrowserRouter + AuthProvider + ThemeProvider
│   ├── App.tsx             # All routes defined here (PrivateRoute + LoginRoute)
│   ├── index.css           # Tailwind directives
│   ├── types/index.ts      # Complete type system
│   ├── utils/
│   │   ├── cn.ts           # cn() = clsx + tailwind-merge
│   │   ├── formatters.ts   # Formatting functions (currency, date, weight, etc.)
│   │   ├── reportPdf.ts    # jsPDF report generator (ink-optimized B&W)
│   │   └── pawnCalculations.ts  # Pawn interest calculations (kept for future)
│   ├── contexts/
│   │   ├── AuthContext.tsx  # JWT authentication provider (login, logout, refreshUser)
│   │   └── ThemeContext.tsx # Dark/Light/System theme provider
│   ├── data/
│   │   ├── mockData.ts     # Mock records (kept for reference)
│   │   └── sampleData.ts   # Sample data structures
│   ├── services/
│   │   └── api.ts          # API service (authApi, usersApi, companyApi, invoiceApi, etc.)
│   ├── components/
│   │   ├── Layout.tsx      # Sidebar nav with collapsible submenus + theme toggle
│   │   ├── PrintableInvoice.tsx    # Invoice print template (dynamic T&C)
│   │   ├── PrintableClearance.tsx  # Clearance sale print template (dynamic T&C)
│   │   ├── Printable*.tsx  # Other print templates (kept for future)
│   │   └── ui/            # Reusable UI components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Combobox.tsx      # Searchable select with icons
│   │       ├── DateCombobox.tsx   # Date picker combobox
│   │       ├── Dropdown.tsx       # Dropdown menu
│   │       ├── Input.tsx
│   │       ├── Modal.tsx          # Modal + ModalContent + ModalFooter
│   │       ├── Pagination.tsx     # Table pagination with page size selector
│   │       ├── Select.tsx
│   │       ├── Table.tsx
│   │       └── index.ts          # Barrel exports
│   └── pages/
│       ├── Login.tsx       # Login page (JWT auth)
│       ├── Dashboard.tsx
│       ├── Products.tsx
│       ├── Customers.tsx
│       ├── Invoices.tsx
│       ├── CreateInvoice.tsx
│       ├── EditInvoice.tsx
│       ├── Clearances.tsx
│       ├── CreateClearance.tsx
│       ├── EditClearance.tsx
│       ├── Categories.tsx
│       ├── GoldTypes.tsx
│       ├── Reports.tsx
│       └── Settings.tsx    # 5 tabs: Company, Numbering, Users, My Profile, Appearance
├── package.json
├── vite.config.ts
├── vercel.json
└── tsconfig.json
```

---

## Authentication System

### Flow
1. User logs in via `/login` → `POST /api/auth/login` → receives JWT token
2. Token stored in `localStorage` and attached to all API requests via `Authorization: Bearer <token>` header
3. `AuthContext` provides `user`, `login()`, `logout()`, `refreshUser()` to all components
4. `PrivateRoute` wrapper in `App.tsx` redirects unauthenticated users to `/login`
5. `LoginRoute` redirects authenticated users to `/dashboard`

### Roles
- `admin` — full access, can manage users (Settings → Users tab)
- `sales` — standard access, no user management

### Default Credentials (seeded in backend)
- `onelka1` / `onelka123` (admin, shop M)
- `onelka2` / `onelka123` (admin, shop T)
- `onelka3` / `onelka123` (admin, shop D)

---

## Active Modules

### Currently Active
- **Login** — JWT authentication with username/password
- **Dashboard** — Real-time API-driven overview: revenue stats, today/month sales, collection rate, recent invoices, recent clearances, inventory by category, top customers, outstanding balances, total inventory value
- **Products** — Inventory management with search, pagination
- **Customers** — Customer CRUD with types (retail/wholesale/vip/credit), credit management
- **Sales (Invoices)** — Full invoice lifecycle (create/edit/print/payments)
- **Clearance Sales** — Discounted sales with clearance reason tracking
- **Categories** — Product category management
- **Gold Types** — Gold karat configuration & rates
- **Reports** — Business reporting with period selection (daily/custom/monthly/yearly), jsPDF PDF download
- **Settings** — Company info, terms & conditions, numbering, users (admin), profile, appearance (horizontal tab layout)

### Removed from UI (files kept for future)
- **Pawning** — pages: `Pawning.tsx`, `CreatePawnTicket.tsx`, `RedeemPawnTicket.tsx`, `PayInterest.tsx`; components: `PrintablePawnTicket.tsx`, `PrintableRedemptionReceipt.tsx`, `PrintableInterestReceipt.tsx`; utils: `pawnCalculations.ts`
- **Repairs** — pages: `RepairJobs.tsx`, `CreateRepairJob.tsx`; components: `PrintableRepairReceipt.tsx`
- **GRN (Goods Received Notes)** — pages: `GRN.tsx`, `CreateGRN.tsx`; components: `PrintableGRN.tsx`
- **Suppliers** — pages: `Suppliers.tsx`
- None of the above have routes in `App.tsx` or sidebar entries in `Layout.tsx`

---

## Coding Conventions

### General Rules
- Always use **TypeScript** with explicit types — strict mode is enabled
- Use **Tailwind CSS classes only** — no custom CSS files or inline styles
- Use **`cn()`** from `@/utils/cn` for conditional class composition
- Import icons from **`lucide-react`** only
- Use **functional components** with React hooks (useState, useMemo, useCallback, useEffect)
- Use **`@/`** path alias for all imports (maps to `./src/`)
- All new routes must be added to **`src/App.tsx`**
- **Always update `copilot-instructions.md` and `README.md`** when making changes

### Component Patterns
- UI components live in `src/components/ui/` — reuse them, don't create duplicates
- Page components go in `src/pages/`
- Export new components from their respective `index.ts` barrel files
- Use `Modal` with `ModalContent` + `ModalFooter` for proper scrollable modals
- Tables must support both desktop (Table) and mobile (MobileCard) views
- Use `Badge` component for status indicators with appropriate variants
- Use `Combobox` for searchable dropdowns, `Pagination` for table pagination

### Styling
- Dark mode: use `dark:` prefix classes (Tailwind dark mode via class strategy)
- Color tokens use HSL CSS variables: `hsl(var(--primary))`, `hsl(var(--background))`, etc.
- Amber/Gold accent colors for jewellery branding
- Responsive: mobile-first approach, sidebar collapses on mobile
- Filter bars: use `flex flex-wrap items-center gap-2` with `min-w-[180px]` search fields

### Data & State
- **Backend API** for all data (invoices, clearances, products, customers, etc.)
- **API returns numeric fields as strings** — always wrap with `Number()` before arithmetic (e.g., `Number(invoice.total)`)
- Print data flows via `localStorage` → API fallback
- State management: React hooks only (no Redux, Zustand, etc.)
- API service in `src/services/api.ts` — all API calls go through this
- Auth state via `AuthContext` — use `useAuth()` hook

### Formatting
- Currency: use `formatCurrency()` → `Rs. 50,000.00`
- Dates: use `formatDate()` → `05 Mar 2024`
- Weight: use `formatWeight()` → `45.500 g`
- Phone: use `formatPhone()` → `+94 77 234 5678`
- All formatters are in `src/utils/formatters.ts`

---

## Key Types (src/types/index.ts)

### Authentication
- `AuthUser`: id, username, email, fullName, phone, role, shopCode, isActive (exported from `api.ts`)

### Metals & Products
- `MetalType`: gold | silver | platinum | palladium | white-gold | rose-gold
- `GoldKarat`: 24K | 22K | 21K | 18K | 14K | 10K | 9K
- `JewelleryItem`: SKU, barcode, categoryId, metalType, karat, metalWeight, prices, stock

### Business Entities
- `Customer`: id, name, phone, customerType (retail/wholesale/vip/credit), creditLimit
- `Invoice`: invoiceNumber, customerId, items[], totals, status, payment info
- `Clearance`: clearanceNumber, customerId, clearanceReason, items[], totals, status
- `CompanyInfo`: name, address, phone, email, invoiceTerms?, clearanceTerms?, etc.

### Shared Types
- `InvoiceItem` — used by both Invoice and Clearance items
- `InvoiceStatus`: draft | pending | partial | paid | cancelled | refunded
- `PaymentMethod`: cash | card | bank-transfer | cheque | credit | upi | other

---

## Routing (src/App.tsx)

### Public routes
- `/login` — Login page (redirects to dashboard if authenticated)

### Print routes (no Layout wrapper, requires auth)
- `/invoices/:id/print` — Invoice print
- `/clearance/:id/print` — Clearance print

### Main routes (inside Layout, requires auth)
- `/dashboard` — Dashboard
- `/products` — Products list
- `/customers` — Customers list
- `/invoices` — Invoice list
- `/invoices/create` — Create invoice
- `/invoices/:id/edit` — Edit invoice
- `/clearance` — Clearance list
- `/clearance/create` — Create clearance
- `/clearance/:id/edit` — Edit clearance
- `/categories` — Categories
- `/gold-types` — Gold types & rates
- `/reports` — Reports
- `/settings` — Settings (tabs: Company, Numbering, Users, My Profile, Appearance)

---

## Print & PDF System
- Print templates render as A5 format with print-specific CSS
- Print routes bypass sidebar layout
- `PrintPreviewWrapper` component provides toolbar with: ← Back, Print buttons only (no Download/WhatsApp)
- **`billPdf.ts` utility** (`src/utils/billPdf.ts`): Shared PDF generation, download & WhatsApp functions for receipt actions
  - `generatePdfFromElement()` — captures HTML element at scale 3 with html2canvas + jsPDF
  - `downloadBillPdf()` — opens print page in hidden iframe, captures content, downloads PDF
  - `downloadAndWhatsApp()` — downloads PDF then opens WhatsApp with pre-filled message
  - `openWhatsApp()` — opens wa.me with formatted Sri Lankan phone number
- **Invoices**: Print only (browser print via print preview)
- **Clearances (pawning) — redeemed items only**: Print Receipt, Download Receipt, WhatsApp buttons in more menu, view modal, mobile cards. Uses `pawnBillFormat` setting (A4/80mm).
- CSS `@media print` rules with 6mm margins, color preservation
- Data passed via `localStorage`, with API fallback
- **Terms & Conditions** loaded dynamically from company settings (fallback to hardcoded defaults)
- Terms render as unordered list (`<ul>` with `list-style-type: disc`)

---

## Settings Page
- **Horizontal tab bar** layout (not sidebar) with 5 tabs:
  - Company — business info, logo, billing defaults, terms & conditions (invoice + clearance)
  - Numbering — shop code & sequence number management
  - Users — admin-only user CRUD (register, edit, delete users)
  - My Profile — name, email, role, password change
  - Appearance — theme (light/dark/system), accent color, font size
- Save button in page header
- Full-width content area, 2-column grid on desktop, responsive on mobile

---

## Build & Deployment

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:5173
npm run build        # TypeScript check + Vite production build → dist/
npm run preview      # Preview production build locally
```

**Deployed on Vercel** as a static site (see `vercel.json`):
- Build: `npm install && npm run build`
- Output: `dist/`
- SPA rewrite: `/*` → `/index.html`

### Environment Variables
- `VITE_API_URL` — Backend API URL (defaults to `http://localhost:3000`)

---

## Vite Code Splitting (vite.config.ts)

Manual chunks configured:
- `vendor-react`: react, react-dom, react-router
- `vendor-icons`: lucide-react
- `vendor`: other node_modules
- `pages-invoices`: Invoice & Sales pages
- `pages-pawning`, `pages-repairs`, `pages-grn`: kept for future modules
- `pages-misc`: all other pages (including Clearance, Login, Settings)
- `printables`: all PrintableXxx components
- `mock-data`: data files
