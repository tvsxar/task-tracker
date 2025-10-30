# Task Tracker 

A full-featured task management application built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This project allows users to create, edit, delete, and complete tasks, with real-time frontend filtering for "all", "pending", and "completed" tasks, and a responsive, modern UI.

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Author](#author)

---

## Description

Task Tracker allows you to:

- Create, read, update, and delete tasks (CRUD)  
- Mark tasks as completed or pending  
- Filter tasks on the frontend without extra server requests  
- View tasks in a responsive and modern UI  

Backend is built with **Node.js + Express.js** and **MongoDB**.  
Frontend is built with **React (Vite)** and styled with **Tailwind CSS**.  

---

## Live Demo

Try it online via our [Live Demo](https://task-tracker-frontend-j0ko.onrender.com)!

---

## Features

- Full CRUD operations for tasks  
- Frontend filtering: All, Pending, Completed  
- Mark tasks as completed/uncompleted  
- Responsive UI with modern design  
- Optimized state management using React Context API  
- **MERN stack** setup (MongoDB, Express.js, React, Node.js)  

---

## Technologies & Stack Explanation

- **MongoDB** — NoSQL database for tasks storage  
- **Mongoose** — ODM for MongoDB  
- **Express.js / Node.js** — backend REST API  
- **React (Vite)** — frontend framework for UI  
- **Tailwind CSS** — utility-first styling  
- **axios** — for HTTP requests from frontend  

---

## Architecture & Flow

1. React frontend sends HTTP requests to backend API.  
2. Express.js backend handles requests and queries MongoDB.  
3. Backend returns JSON data.  
4. Frontend updates the UI and state based on API responses.  
5. Tasks filtering occurs on the frontend for better performance.  

---

## Installation & Run

### Backend

```bash
cd backend
npm install
npm i express mongoose cors dotenv
```

Create a `.env` file inside `backend/` with the following:

```env
PORT=3434
MONGO_URL=your_mongo_connection_string
CLIENT_URL=http://localhost:5173
```

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm i axios tailwindcss @tailwindcss/vite
```

Create a `.env` file inside `frontend/` with the following:

```env
VITE_API_URL=http://localhost:3434
```

```bash
npm run dev
```

Frontend will be available at:
http://localhost:5173

---

## Project Structure

```
task-tracker/
├─ backend/
│  ├─ config/db.js
│  ├─ models/
│  │  └─ task.model.js
│  ├─ routes/
│  │  └─ task.route.js
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ AppContent.jsx
│  │  │  ├─ Task.jsx
│  │  │  ├─ TaskForm.jsx
│  │  │  ├─ TasksList.jsx
│  │  │  └─ SortingButtons.jsx
│  │  ├─ context/
│  │  │  └─ TaskContext.jsx
│  │  └─ utilities/api.js
```

---

## API Endpoints

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| GET    | /tasks            | Get all tasks                |
| POST   | /tasks            | Add a new task               |
| PUT    | /tasks/:id        | Update a task                |
| DELETE | /tasks/:id        | Delete a  task               |

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)