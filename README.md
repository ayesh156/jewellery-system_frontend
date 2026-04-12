# Onelka Jewellery — Frontend

React SPA for the **Onelka Jewellery Management System** — Sri Lankan retail jewellery market. Handles inventory, sales invoicing, clearance sales, and business reporting with full authentication & user management.

**Currency:** Sri Lankan Rupees (Rs.) | **Language:** English

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI framework (with React Compiler) |
| TypeScript | 5.9.3 | Type safety (strict mode) |
| Vite | 7.2.4 | Build tool with manual chunk splitting |
| Tailwind CSS | 3.4.17 | Utility-first styling with dark mode |
| React Router DOM | 7.11.0 | Client-side SPA routing |
| Lucide React | — | Icon library |
| Radix UI | — | Accessible select primitives |
| jsPDF | — | PDF report generation |
| react-hot-toast | — | Toast notifications |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- Backend API running (see [jewellery-system-backend](../jewellery-system-backend) repo)

### Setup
```bash
npm install
npm run dev          # Dev server at http://localhost:5173
```

### Environment Variables
Create a `.env` file (optional):
```env
VITE_API_URL=http://localhost:3000    # Backend API URL (defaults to http://localhost:3000)
```

### Build for Production
```bash
npm run build        # TypeScript check + Vite build → dist/
npm run preview      # Preview production build locally
```

---

## Default Login Credentials

| Username | Password | Role | Shop |
|----------|----------|------|------|
| onelka1  | onelka123 | admin | M |
| onelka2  | onelka123 | admin | T |
| onelka3  | onelka123 | admin | D |

---

## Active Modules

| Module | Description |
|--------|-------------|
| **Login** | JWT authentication with username/password |
| **Dashboard** | Real-time API-driven overview: revenue stats, sales, collection rate, recent invoices/clearances |
| **Products** | Inventory management with search, pagination, stock tracking |
| **Customers** | CRUD with types (retail/wholesale/vip/credit), credit management |
| **Sales (Invoices)** | Full invoice lifecycle — create, edit, print, record payments |
| **Clearance Sales** | Discounted sales with clearance reason tracking |
| **Categories** | Product category management |
| **Gold Types** | Gold karat configuration & daily rates |
| **Reports** | Business reporting with period selection, PDF download |
| **Settings** | Company info, terms & conditions, numbering, users, profile, appearance |

---

## Hidden Modules (Files Kept for Future Use)

- **Pawning** — `Pawning.tsx`, `CreatePawnTicket.tsx`, `RedeemPawnTicket.tsx`, `PayInterest.tsx`
- **Repairs** — `RepairJobs.tsx`, `CreateRepairJob.tsx`
- **GRN** — `GRN.tsx`, `CreateGRN.tsx`
- **Suppliers** — `Suppliers.tsx`

> To re-activate: add routes in `App.tsx`, add sidebar entry in `Layout.tsx`.

---

## Project Structure

```
├── src/
│   ├── main.tsx                # Entry — StrictMode + BrowserRouter + AuthProvider + ThemeProvider
│   ├── App.tsx                 # All routes (PrivateRoute + LoginRoute)
│   ├── index.css               # Tailwind directives
│   ├── types/index.ts          # Complete type system
│   ├── utils/                  # cn, formatters, reportPdf, billPdf, pawnCalculations
│   ├── contexts/               # AuthContext (JWT), ThemeContext (dark/light/system)
│   ├── services/api.ts         # API service layer
│   ├── components/
│   │   ├── Layout.tsx          # Sidebar nav with collapsible submenus + theme toggle
│   │   ├── Printable*.tsx      # Print templates (Invoice, Clearance, etc.)
│   │   └── ui/                 # Reusable UI components (12 components)
│   └── pages/                  # All page components
├── public/
├── package.json
├── vite.config.ts
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
└── index.html
```

---

## Deployment (Vercel)

Deployed as a static site on **Vercel**:
- **Build Command:** `npm install && npm run build`
- **Output Directory:** `dist/`
- **SPA Rewrite:** `/*` → `/index.html`
- **Config:** See `vercel.json`

---

## Related

- **Backend API:** [jewellery-system-backend](https://github.com/your-username/jewellery-system-backend) — Node.js + Express REST API
