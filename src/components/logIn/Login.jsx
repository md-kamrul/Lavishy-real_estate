import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
    return (
        <div className="md:w-[80%] mx-auto mt-8">
            <h2 className="text-center text-2xl font-bold">LogIn</h2>
            <div className="card shrink-0 w-[80%] mx-auto">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Email</span>
                        </label>
                        <input type="email" placeholder="your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered" required />
                        <FaEye className="text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" />
                        <IoMdEyeOff className="hidden text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" />
                        <div className="flex gap-12 md:gap-0 md:justify-between">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label label-text-alt">
                                Do not Have an Account? <Link to="/register" className="label-text-alt link link-hover text-[#2b3440] font-bold"> Register</Link>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#2b3440] text-white">Login</button>
                    </div>
                    <div>
                        <h2 className="mt-5 text-center md:text-xl">-------------  Or LogIn Using  -------------</h2>
                        <div className="w-[20%] mx-auto mt-5">
                            <div className="flex gap-3 md:gap-0 md:justify-evenly md:w-[80%] mx-auto">
                                <FcGoogle className="text-3xl cursor-pointer" />
                                <FaSquareXTwitter className="text-3xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;