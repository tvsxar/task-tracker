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
- **Docker & Docker Compose** - for containerization and easy environment orchestration
- **Nginx** - high-performance web server for serving the production frontend build

---

## Architecture & Flow

1. React frontend sends HTTP requests to backend API.
2. Express.js backend handles requests and queries MongoDB.
3. Backend returns JSON data.
4. Frontend updates the UI and state based on API responses.
5. Tasks filtering occurs on the frontend for better performance.

---

## Installation & Run

### 1. The Quickest Way (Docker Compose)

_Requires [Docker](https://www.docker.com/get-started/)_

1. Create a `.env` file inside `backend/` and add your `MONGO_URL`
2. **Note:** Ensure your `PORT` in `.env` is set to `3434` (or leave it out, as Docker will use the one from `docker-compose.yml`)
3. Run everything with one command:
   ```bash
   docker-compose up --build
   ```
4. Open http://localhost:5173 in your browser

### 2. Manual Setup (For Development)

If you want to run the services separately without Docker:

#### Backend

```bash
cd backend
npm install
# Create .env with PORT, MONGO_URL, CLIENT_URL
npm run dev
```

---

#### Frontend

```bash
cd frontend
npm install
# Create .env with VITE_API_URL
npm run dev
```

Frontend will be available at:
http://localhost:5173

---

## Project Structure

```
task-tracker/
├─ docker-compose.yml
├─ backend/
│  ├─ Dockerfile
│  ├─ config/db.js
│  ├─ models/
│  │  └─ task.model.js
│  ├─ routes/
│  │  └─ task.route.js
│  └─ server.js
├─ frontend/
│  ├─ Dockerfile
│  ├─ nginx.conf
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

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /tasks     | Get all tasks  |
| POST   | /tasks     | Add a new task |
| PUT    | /tasks/:id | Update a task  |
| DELETE | /tasks/:id | Delete a task  |

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)
