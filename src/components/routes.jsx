import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const routes =[ 
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [

        ]
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
        children: [

        ]
    },
    {
        path: "/register",
        element: <Register/>,
        errorElement: <ErrorPage />,
        children: [

        ]
    },

]