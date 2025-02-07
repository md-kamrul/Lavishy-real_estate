import { createBrowserRouter, } from "react-router-dom";
import Roots from "../layout/root/Roots";
import Home from "../components/Home/Home";
import Login from "../components/logIn/Login";
import Register from "../components/register/Register";
import Profile from "../components/profile/Profile";
import ContactUs from "../components/contactUs/ContactUs";
import PropertyDetails from "../components/propertiesDetails/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/data.json")
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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/properties/:id",
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch("/data.json")
            }
        ]
    },
]);

export default router;