# HRMS Lite – Employee & Attendance Management System

A lightweight **Human Resource Management System (HRMS)** built with a modern full-stack architecture.
It allows organizations to manage employees and track attendance through a simple web interface.

---

## Live Demo

Frontend: https://hrms-lite.vercel.app \
Backend API: https://hrms-lite-backend.onrender.com/api

---

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS / UI components

### Backend

* Node.js
* Express.js
* REST API architecture

### Database

* MongoDB Atlas (Cloud Database)
* Mongoose ODM

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## Project Structure

```
hrms-lite
│
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── components
    ├── pages
    ├── api.js
    └── package.json
```

---

## Features

* Add new employees
* View employee list
* Delete employees
* Mark attendance
* REST API integration
* Cloud deployment

---

## Installation (Local Setup)

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_GITHUB_USERNAME/hrms-lite.git
cd hrms-lite
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## API Endpoints

### Employees

GET Employees

```
GET /api/employees
```

Add Employee

```
POST /api/employees
```

Delete Employee

```
DELETE /api/employees/:id
```

---

## Screenshots

<img width="1264" height="668" alt="Screenshot 2026-03-05 at 9 46 58 PM" src="https://github.com/user-attachments/assets/1ac2bee9-bfd2-4109-ba5c-fe6e2c50c65f" />


Example:

* Employee dashboard
* Add employee form
* Attendance tracking

---

## Deployment

### Frontend

Deployed on **Vercel**

### Backend

Deployed on **Render**

### Database

Hosted on **MongoDB Atlas**

---

## Future Improvements

* Authentication (JWT Login)
* Role-based access (Admin / Employee)
* Attendance analytics
* Dashboard charts
* Search & filters
* Pagination

---

## Author

Swati Angadi

Robotics & AI Educator | Developer

GitHub: https://github.com/swati123455

