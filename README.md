# ERP Solution Assignment (Vendor Management Dashboard)

A responsive Vendor (Supplier) management interface built using Next.js, integrated with Frappe / ERPNext APIs.  
It provides a structured multi-tab form for creating and updating vendors, along with a list view for managing existing records.

Live: https://erp-solution-assingment.vercel.app/

---

## Installation

```bash
git clone https://github.com/maulik-koli/erp-solution-assingment
cd erp-solution-assingment

npm install
npm run dev
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://fortwall-contracting.sterlingcloud.co
```

---

## Features

* Vendor listing using Frappe `reportview.get` (mapped from keys + values)
* Create and update vendor using a single reusable form
* Multi-tab form structure:
  * Details
  * Tax
  * Address & Contact
  * Accounting
* Dynamic dropdown fields (Supplier Group, Country, Accounts, etc.) using `search_link`
* Debounced API calls for list
* Form validation using Zod
* Responsive modal UI with mobile-friendly tab behavior
* Loading states, error handling, and success feedback

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form
* Zod
* React Query

---

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── form/            # form elements
│
├── modules/
│   └── vendor/
│       ├── api/         # API calls
│       ├── components/  # modules specific components
│       ├── utils/       # data mappers & converters
│
├── lib/
│   ├── axios.ts         # API client
│   ├── utils.ts
│
```


---

## Deployment

Deployed on Vercel
