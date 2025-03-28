import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import UsersList from "./pages/UsersList";
import EditUser from "./pages/EditUser";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "usersList",
        index: true,
        element: <UsersList />,
      },
      {
        path: "editUser/:id",
        element: <EditUser />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouter} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
