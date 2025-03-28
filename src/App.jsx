import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import UsersList from "./pages/UsersList";
import EditUser from "./pages/EditUser";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/usersList",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
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
    </div>
  );
}

export default App;
