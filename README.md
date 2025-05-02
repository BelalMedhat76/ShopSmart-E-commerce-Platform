# 🛍️ ShopSmart E-commerce Platform

A modern full-stack e-commerce website built using **Next.js 15** (frontend) and **Flask (Python backend)**, with **SQLite** database managed via **DBeaver**. The project features responsive UI, product/category management, and engaging animations.

---

## 🚀 Features

- 🎨 Beautiful and responsive UI with Tailwind CSS
- 🧭 App Router in Next.js 15
- ⚡ Fast animations with AOS (Animate On Scroll)
- 🧩 Flask REST API backend
- 🗃️ SQLite database via DBeaver
- 🛍️ Shop by Category & Product Listing
- 🔁 Reusable components and clean code structure

---

## 🧩 Tech Stack

### Frontend
- **Next.js 15 (App Router)**
- **Tailwind CSS**
- **AOS (Animate On Scroll)**
- **React Icons / Bootstrap Icons**

### Backend
- **Flask (Python)**
- **Flask-CORS**
- **SQLite3**
- **DBeaver** (for visual DB management)

---

## 📂 Project Structure

## 🧪 API Endpoints

- `GET /api/categories` – List all categories
- `GET /api/products` – List all products
- `POST /api/products` – Add a new product
- `DELETE /api/products/<id>` – Delete a product by ID

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shop-smart.git
cd shop-smart
```
# Setupbackend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

Flask API runs on http://localhost:5000
# setup frontend 
cd ../
npm install
npm run dev
