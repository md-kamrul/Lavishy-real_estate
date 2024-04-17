import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import Footer from "../footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from 'sweetalert2'

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const confirm_password = form.get("confirm-password");

        if (password.length < 6) {
            setRegisterError("Password must be at least 6 character...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        if (!(/[a-z]/.test(password))) {
            setRegisterError("Password must have an Uppercase letter...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        if (!(/[A-Z]/.test(password))) {
            setRegisterError("Password must have an Uppercase letter...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        if (password !== confirm_password) {
            setRegisterError("Password is not matching with Confirm Password...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        setRegisterError("");

        // creating user
        createUser(email, password)
            .then(result => {
                navigate(
                    location?.state ?
                        location.state
                        :
                        "/"
                )
            })
            .catch(error => {
                if (error.message.indexOf("(auth/email-already-in-use).")) {
                    setRegisterError("This email already have an account...");
                }
                Swal.fire({
                    title: "Error!",
                    text: `${registerError}`,
                    icon: "error"
                });
            })
    }

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleRegister = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate(
                    location?.state ?
                        location.state
                        :
                        "/"
                )
            }).catch((error) => {
                console.log(error);
            });
    }

    const providerTwitter = new TwitterAuthProvider();
    const handleTwitterRegister = () => {
        signInWithPopup(auth, providerTwitter)
            .then((result) => {
                const user = result.user;
                navigate(
                    location?.state ?
                        location.state
                        :
                        "/"
                )
            }).catch((error) => {
                console.log(error);
            });
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div>
            <div className="md:w-[80%] mx-auto mt-8">
                <h2 className="text-center text-2xl font-bold">Register</h2>
                <div className="card shrink-0 w-[80%] mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input name="my-name" type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Photo URL</span>
                            </label>
                            <input name="photo-url" type="text" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Password</span>
                            </label>
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="Your Password" className="input input-bordered" required />
                            <span className="text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?
                                        <FaEye />
                                        :
                                        <IoMdEyeOff />
                                }
                            </span>
                            <label className="label">
                                <span className="label-text">Confirm Your Password</span>
                            </label>
                            <input name="confirm-password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Your Password" className="input input-bordered" required />
                            <span className="text-xl relative right-[-88%] md:right-[-94%] top-[-34px] cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {
                                    showConfirmPassword ?
                                        <FaEye />
                                        :
                                        <IoMdEyeOff />
                                }
                            </span>
                            <div className="flex justify-between">
                                <label className="label label-text-alt">
                                    Have an Account? <Link to="/login" className="label-text-alt underline text-[#2b3440] font-bold"> LogIn</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00c867] border-[#00c867] hover:bg-transparent hover:text-[#00c867] hover:border-[#00c867] text-white">Register</button>
                        </div>
                        <div>
                            <h2 className="mt-5 text-center md:text-xl">-------------  Or Register Using  -------------</h2>
                            <div className="w-[20%] mx-auto mt-5">
                                <div className="flex gap-3 md:gap-0 md:justify-evenly md:w-[80%] mx-auto">
                                    <FcGoogle onClick={handleGoogleRegister} className="text-3xl cursor-pointer" />
                                    <FaSquareXTwitter onClick={handleTwitterRegister} className="text-3xl cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Register;