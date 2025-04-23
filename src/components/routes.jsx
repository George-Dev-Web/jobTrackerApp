import { Children } from "react";
import App from "../App";

export const routes =[ 
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [

        ]
    }
]