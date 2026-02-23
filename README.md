# Enterprise Resource Planning (ERP) — Recycling & Packaging Demo

A specialized Full-Stack ERP solution architected for high-efficiency management in the industrial recycling and packaging sector. This platform provides a centralized hub for tracking raw material processing and finished goods logistics through a hybrid inventory model.

> [!IMPORTANT]
> **PUBLIC DEMO VERSION:** This repository acts as a technical showcase. The system includes a **"Demo Mode"** that isolates the frontend from backend dependencies, providing a stable, high-performance experience with simulated data while preserving the original service-layer architecture for code review.

---

## 🏗️ Industry-Specific Architecture

The system is engineered to handle two distinct operational branches with unique data models and units of measurement:

### 1. Recyclable Materials (Bulk Operations)

- **Measurement Unit:** Kilograms (kg).
- **Logistics:** Managed through a **High-Precision Weighing Module (Pesajes)**.
- **Analysis:** Supports mass balance tracking to monitor entry, processing, and exit of bulk secondary raw materials.

### 2. Packaging & Boxes (Finished Goods)

- **Measurement Unit:** Units (u).
- **Logistics:** Managed via **Discrete Inventory Control**.
- **Flow:** Integrated with Sales and Purchase modules to ensure automated stock calibration upon every transaction.

---

## 🚀 Core Technical Stack

### Frontend (User Interface & Experience)

- **React 18 + Vite**: Optimized for sub-second reactivity and professional-grade performance.
- **Tailwind CSS**: A production-ready design system focused on data density and operational clarity.
- **Role-Based Access Control (RBAC)**: Interface items dynamically render based on user authorization levels (Admin/Operator) decoded from secure JWTs.

### Backend (Service Layer & Persistence)

- **Node.js + Express**: Modular API design following best practices in separation of concerns (Routes -> Controllers -> Services).
- **PostgreSQL (Supabase)**: Leverages advanced relational logic, including:
  - **Database Triggers**: Real-time stock automation driven by transaction events.
  - **Stored Procedures**: Encapsulated business logic for complex accounting movements.
  - **Row-Level Security (RLS)**: Fine-grained data isolation ensuring that users only interact with authorized data clusters.

---

## 📌 Mission-Critical Features

### 📦 Intelligent Stock Automation

In the production environment, the system utilizes **Database Triggers and Stored Procedures** to ensure zero-latency data consistency:

- **Auto-Increment**: Stock Levels automatically increase upon completion of a **Purchase/Entry**.
- **Auto-Decrement**: Stock Levels automatically decrease upon registration of a **Sale/Exit**.
- **Data Integrity**: Uses PostgreSQL transactions to prevent race conditions during concurrent weigh-ins.
- **Hybrid Inventory Engine**: Simultaneous tracking of weight-based materials and count-based packaging products.
- **Automated Stock Lifecycle**: Inventory levels are automatically recalculated through backend triggers upon purchase/sale finalization.
- **Real-Time KPI Analytics**: Instant visibility into monthly sales volume, purchase expenditures, and processed tonnage.
- **Stateless Authentication**: Secure JWT-based session management with middleware-level protection.
- **Automated Documentation**: On-the-fly generation of PDF receipts and orders using `jsPDF` for seamless logistics.

### 🔐 Enterprise-Grade Security

The project is built on a **Security-First** philosophy:

- **Row-Level Security (RLS)**: Direct database policies ensure users can only access data belonging to their authorized scope.
- **Role-Based Access Control (RBAC)**: Fine-grained permissions (Admin, Operario, Administrativo) enforced at both UI and API levels.
- **Audit Logging**: Every sensitive action (Price changes, deletions, logins) is tracked in a dedicated audit trail for compliance.

### 📊 Real-Time Analytics

- **KPI Dashboard**: Instant visibility into monthly sales, purchase volume, and total processed kilograms.
- **Inventory Thresholds**: Visual alerts for products nearing critical stock levels.
- **PDF Reporting**: Automated generation of purchase orders and sales receipts using `jsPDF`.

---

## 🛠️ Internal Architecture

The project follows a clean, modular monorepo structure:

```text
project-root/
├─ api/             # High-Availability Express Backend
│  ├─ routes/       # RESTful endpoint definitions
│  ├─ controllers/  # Logic orchestration & response handling
│  ├─ services/     # Core business rules & Database abstraction
│  └─ server.mjs    # Application entry point
│
├─ web/             # Responsive Enterprise Frontend
│  ├─ components/   # Modular UI primitives & atomic design
│  ├─ pages/        # Business workflows and dashboard views
│  ├─ lib/          # API Clients & Global Singleton utilities
│  └─ services/     # Frontend Service Abstraction Layer
```

---

## 🛠️ Getting Started

### 1. Environment Configuration

Clone the repository and install dependencies. To execute the stabilized demo, ensure your frontend `.env` contains:
`VITE_DEMO_MODE=true`

### 2. Credentials for Review

- **User:** `admin@gmail.com`
- **Password:** `admin1234`

---

## 📫 Professional Contact

**Andrés Coseani**  
[LinkedIn Profile](https://www.linkedin.com/in/andrescoseani)
