import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import JobBoard from "../pages/JobBoard/JobBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProfilePage from "../pages/UserProfile";
import Job from "./Job";
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // Protected routes (require authentication)
      {
        element: <ProtectedRoutes />, // This will protect all child routes
        children: [
          {
            path: "job-listing",
            element: <JobBoard />,
          },
          {
            path: "user",
            element: <ProfilePage />,
          },
          {
            path: "job/:id",
            element: <Job />,
          },
        ],
      },

      // Public routes (no authentication required)
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
