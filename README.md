# 🏥 IPD Management System

A scalable **In-Patient Department (IPD) Management System** built using the **MERN Stack** to efficiently manage hospital patient records, admissions, and bed allocation.

The system follows a **modular backend architecture** and is **containerized using Docker and Docker Compose** for simplified deployment and scalability.

---

## ✨ Features

- 👨‍⚕️ **Patient Admission & Discharge Management**
- 🛏 **Bed & Ward Allocation System**
- 🔗 **RESTful API Architecture**
- ⚡ **Scalable Backend Services**
- 🐳 **Containerized Deployment using Docker**

---

## 🛠 Tech Stack

### 🎨 Frontend
- ⚛️ React.js  
- 🎨 Tailwind CSS  

### ⚙️ Backend
- 🟢 Node.js  
- 🚀 Express.js  

### 🗄 Database
- 🍃 MongoDB  

### 🧰 DevOps & Tools
- 🐳 Docker  
- 📦 Docker Compose  
- 🔧 Git & GitHub  

---

## 📂 Project Overview

This project demonstrates how modern hospital systems can be built using **scalable full-stack architecture** with containerized deployment.

The system is designed to manage **IPD operations efficiently**, including **patient records, hospital beds, and internal workflows**.

---

## 👨‍💻 Author

**Aadil Khan**

💼 MERN Stack Developer  
🔗 GitHub: https://github.com/aadiluser2005


---

# ⚙️ Standard Operating Procedure (SOP)

This section explains how to **setup, run, and manage the IPD Management System**.

---

## 📥 1. Clone the Repository

Open your **terminal** and run:

```bash
git clone https://github.com/aadiluser2005/IPD-management-.git
cd IPD-management
```

---

## 📁 2. Navigate to Project Directory

Ensure you are inside the project root:

```bash
cd IPD-management
```

---

## ⚙️ 3. Install Dependencies

### Backend Setup

```bash
cd BACKEND
npm install
```

### Frontend Setup

```bash
cd FRONTEND/my-app
npm install
```

---

## ▶️ 4. Run the Application (Development Mode)

### Start Backend Server

```bash
cd backend
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

### Start Frontend

Open a new terminal window:

```bash
cd FRONTEND/my-app
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🐳 5. Run Application Using Docker (Recommended)

Build and start containers:

```bash
docker-compose up --build
```

Run containers in background:

```bash
docker-compose up -d
```

---

## 🛑 6. Stop Docker Containers

```bash
docker-compose down
```

---

## 🔄 7. Update the Project

Pull the latest updates from GitHub:

```bash
git pull origin main
```

Rebuild containers if required:

```bash
docker-compose up --build
```

---

## 🧪 8. Check Running Containers

To see running containers:

```bash
docker ps
```

---

## 📊 9. View Container Logs

If something fails, check logs:

```bash
docker-compose logs
```

---

## ⚠️ Troubleshooting

### Port Already in Use

Stop running containers:

```bash
docker-compose down
```

---

### Dependencies Issue

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

---

✅ After completing these steps, the **IPD Management System should be fully operational**.
