# 🧾 FinLedger

**FinLedger** adalah aplikasi backend sistem akuntansi modern berbasis REST API yang dibangun dengan **Express.js** dan **MySQL**, dirancang untuk menangani pencatatan keuangan seperti jurnal umum, buku besar, laporan laba rugi, neraca, hingga manajemen akun dan transaksi, dengan standar akuntansi ganda (double-entry bookkeeping).

---

## 🚀 Fitur Utama

- ✅ Manajemen akun (akun aktiva, pasiva, modal, dll)
- ✅ Input jurnal umum (debit/kredit)
- ✅ Validasi double-entry otomatis (balance)
- ✅ Laporan keuangan (neraca dan laba rugi)
- ✅ Struktur kode rapi dan scalable
- ✅ Validasi input menggunakan **Zod**
- ✅ ORM modern dengan **Prisma**

---

## 🛠️ Tech Stack

| Kategori       | Teknologi                              |
|----------------|------------------------------------------|
| Backend        | Express.js                               |
| Database       | MySQL + Prisma ORM                       |
| Validasi       | Zod (dengan JavaScript, bukan TypeScript)|
| Development    | Nodemon, dotenv, ESLint (opsional)       |
| Struktur Folder| Modular MVC (routes, controller, service, prisma) |

---

## 📦 Instalasi & Setup

```bash
git clone https://github.com/username/finledger.git
cd finledger
npm install
cp .env.example .env
