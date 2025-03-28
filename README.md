# EmployWise Assessment

## 📌 Project Overview

- EmployWise is a React-based user management system built using Vite for fast development.
- The application allows users to view, search, update, and delete user data retrieved from the Reqres API.
- It includes authentication and pagination for a seamless experience.

## 🚀 Tech Stack

- Frontend: React (Vite)
- Styling: TailwindCSS
- State Management: Redux Toolkit
- API Integration: Fetch API (Reqres API)
- Routing: React Router

## 📦 Dependencies

- react-toastify: For displaying toast notifications.
- react-icons: Provides icons for the UI.
- Prettier-tailwindcss: A Prettier plugin for sorting TailwindCSS classes.

## ✨ Features

- ✅ User Authentication
- ✅ API Integration with Reqres API
- ✅ Pagination for navigating user data
- ✅ Search functionality
- ✅ Delete and Update user details

## 🛠️ Getting Started

Follow these steps to clone and run the project locally:

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Upendhar10/EmployWise-Assessment.git
cd EmployWise-asssessment
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

- The app should now be running on http://localhost:5173/ (default Vite port).

## 📂 Project Structure

```
EmployWise-Assessment/
|── node_modules/
|── dist/
|── public/
├── src/
│ ├── assets/ # Static assets
│ ├── components/ # Reusable components (e.g., UserCard, SearchFeature)
│ ├── pages/ # Page components (e.g., UsersList, EditUser)
│ ├── ReduxStore/ # Redux state management (e.g., usersSlice.js)
│ ├── constants.js # API endpoints
│ ├── App.js # Main application component
│ ├── main.jsx # React root entry point
├── index.html # HTML entry point
├── package.json # Dependencies and scripts
├── README.md # Project documentation
```

## 🔄 API Reference

- The project uses **Reqres API** for user data. Example endpoints:

- Get Users: https://reqres.in/api/users?page=1

- Get User by ID: https://reqres.in/api/users/{id}

- Update User: PUT https://reqres.in/api/users/{id}

- Delete User: DELETE https://reqres.in/api/users/{id}
