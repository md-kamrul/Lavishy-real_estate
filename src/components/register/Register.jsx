import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
    return (
        <div className="md:w-[80%] mx-auto mt-8">
            <h2 className="text-center text-2xl font-bold">Register</h2>
            <div className="card shrink-0 w-[80%] mx-auto">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Photo URL</span>
                        </label>
                        <input type="text" placeholder="Your Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered" required />
                        <FaEye className="text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" />
                        <IoMdEyeOff className="hidden text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" />
                        <label className="label">
                            <span className="label-text">Confirm Your Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Your Password" className="input input-bordered" required />
                        <FaEye className="text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" />
                        <IoMdEyeOff className="hidden text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" />
                        <div className="flex justify-between">
                            <label className="label label-text-alt">
                                Have an Account? <Link to="/login" className="label-text-alt link link-hover text-[#2b3440] font-bold"> LogIn</Link>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#2b3440] text-white">Register</button>
                    </div>
                    <div>
                        <h2 className="mt-5 text-center md:text-xl">-------------  Or Register Using  -------------</h2>
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

export default Register;