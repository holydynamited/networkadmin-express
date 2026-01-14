# Router Management Dashboard 🌐

A full-stack **MERN** (MongoDB, Express, React, Node.js) application for managing network equipment inventory.  
The dashboard provides a clean and intuitive interface for tracking routers, their status, location, and pricing.

This project demonstrates practical full-stack skills: REST API design, CRUD operations, React state management, and a modern UI.

---
## 📸 Screenshots
<img width="1919" height="976" alt="image" src="https://github.com/user-attachments/assets/5b47cbe3-b62e-458b-b3df-af81db1fbb2b" />

---
## 🚀 Features

- **CRUD Operations**  
  Create, read, update, and delete routers via a RESTful API.

- **Live Statistics Dashboard**  
  Displays:
  - Total number of routers  
  - Active routers count  
  - Total inventory value  

- **Modal-based Forms**  
  Add and edit routers using dynamic modals without page reloads.

- **Responsive Dark UI**  
  Built with **Tailwind CSS** for a modern, mobile-friendly dark theme.

- **Partial Updates (PATCH)**  
  Efficient updates using HTTP PATCH requests.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Lucide Icons
- React Hooks (`useState`, `useEffect`)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

---
## 📝 Roadmap
- [ ] User Authentication: Implement JWT for secure login.

- [ ] Search & Filter: Add a search bar to find routers by Name or IP.

- [ ] Dark/Light Mode: Toggle between different UI themes.

- [ ] Cloud Deployment: Host the project on Vercel and Render.
---

## 📦 Installation & Setup

### 1. Clone the repository
- ```bash
  git clone https://github.com/holydynamited/networkadmin-express.git
    cd networkadmin-express

### 2. Setup the backend 
- Navigate to the server folder:
- ```bash
   cd server

- Install dependencies:
-  ```bash
   npm install

- Create a .env file and add your MONGO_URI

 - Start the server:
-  ```bash
    npm start

### 3. Setup Frontend 
- Navigate to the client folder:
 - ```bash
   cd client

- Install dependencies: 
 - ```bash
   npm install
- Run the development server:
   - ```bash
      npm run dev
