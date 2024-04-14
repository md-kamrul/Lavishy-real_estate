import { createBrowserRouter, } from "react-router-dom";
import Roots from "../layout/root/Roots";
import Home from "../components/Home/Home";
import Login from "../components/logIn/Login";
import Register from "../components/register/Register";
import Profile from "../components/profile/Profile";
import ContactUs from "../components/contactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("./../../public/data.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ]
    },
]);

export default router;