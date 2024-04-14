import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navbar = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>

        {
            user ?
                <li><Link onClick={handleSignOut}>LogOut</Link></li>
                :
                <li><NavLink to="/login">LogIn</NavLink></li>
        }
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/profile"><CgProfile className="text-3xl" /></NavLink></li>
    </>

    return (
        <div className="w-[80%] mx-auto ">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl text-[#00c867] hover:bg-transparent">
                        Lavishy
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;