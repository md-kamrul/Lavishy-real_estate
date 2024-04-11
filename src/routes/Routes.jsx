import { createBrowserRouter, } from "react-router-dom";
import Roots from "../layout/root/Roots";
import Home from "../components/Home/Home";
import Login from "../components/logIn/Login";
import Register from "../components/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;