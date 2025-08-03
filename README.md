# 🌐 Data Visualization Dashboard

A full-stack **Data Visualization Dashboard** project that processes a large JSON dataset and presents insightful, interactive charts using **D3.js**. The dashboard is built with **React.js (Frontend)** and **Node.js + Express.js (Backend)**, deployed using **Vercel** and **Render**, respectively.

---

## 🔗 Live Links

- **Frontend (Dashboard UI):** [View on Vercel](https://visualization-dashboard-hazel.vercel.app/)
- **Backend (API):** [View API JSON](https://visualization-dashboard-backend-ehib.onrender.com/api/insights)

---

## 📊 Project Overview

This dashboard is built to **visualize complex data easily** using D3.js charts and filters. It consumes a JSON data file via a backend API and displays:

### ✅ Key Features

- 📁 JSON data rendered from API
- 📊 D3.js-based charts:
  - Bar Chart (e.g., Intensity by Topic)
  - Line Chart
  - Pie Chart
  - Bubble Chart
- 🎛️ Interactive filters:
  - Region
  - Country
  - Year
  - Topic
  - Sector
  - PEST
  - Source
  - City
- 📦 Full-stack architecture
  - React.js frontend
  - Express.js backend with MongoDB (for future data handling)

---



---

## ⚙️ How It Works

1. The backend serves a large JSON file through an API endpoint:  
   `GET /api/insights`

2. The frontend fetches this data and visualizes variables like:
   - `intensity`
   - `likelihood`
   - `relevance`
   - `year`
   - `topic`, `country`, `region`, `sector`, etc.

3. The dashboard provides dropdown filters to narrow down insights and update charts dynamically.

---

## 🛠️ Tech Stack

| Layer      | Tech                            |
|------------|----------------------------------|
| Frontend   | React.js, Tailwind CSS, D3.js    |
| Backend    | Node.js, Express.js              |
| Deployment | Vercel (frontend), Render (API)  |

---

## 📌 API Endpoint

You can view or consume the raw dataset from this endpoint:

---

## 🔐 Security Note

This project is a **personal project**. The MongoDB URI and `.env` secrets are kept private and excluded from Git using `.gitignore`. No sensitive user data is involved.

---

## 🤝 Credits

Built by **Sidhanta** – as part of a personal learning project on full-stack development and data visualization.

---


