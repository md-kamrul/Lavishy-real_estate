import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className="w-[50%] mx-auto" src="./../../../public/assets/error.png" alt="error" />
            <h2 className="text-center mb-5">
                <span className="text-xl mb-3">
                    Page Not Found.
                </span>
                <br />
                <Link to="/" className="label-text-alt link link-hover text-[#2b3440] font-bold underline"><span className="text-base">Go to Home</span></Link>
            </h2>
        </div>
    );
};

export default ErrorPage;