import { createBrowserRouter, } from "react-router-dom";
import Roots from "../layout/root/Roots";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;