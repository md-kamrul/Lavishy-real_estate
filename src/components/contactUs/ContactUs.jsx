// import Footer from "../footer/Footer";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div>
            <div className="p-14 bg-[#2b3440] text-white mt-24 w-[80%] mx-auto rounded-lg flex justify-between">
                <div className="flex gap-2">
                    <MdEmail className="text-2xl" />
                    <div>
                        <h2 className="font-semibold">Email</h2>
                        <p>info@lavishy.com</p>
                        <p>sales@lavishy.com</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaPhoneSquareAlt className="text-2xl" />
                    <div>
                        <h2 className="font-semibold">Phones</h2>
                        <p>+8801234567891</p>
                        <p>+8801123456789</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaLocationCrosshairs className="text-2xl" />
                    <div>
                        <h2 className="font-semibold">Office Address</h2>
                        <p>Mirpur-2, Dhaka-1216,</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[80%] mx-auto mt-14">
                <div className="card shrink-0 w-[50%]">
                    <form className="card-body">
                        <div className="flex gap-5">
                            <input type="text" placeholder="Your First Name" className="input input-bordered" required />
                            <input type="text" placeholder="Your Last Name" className="input input-bordered" required />
                        </div>
                        <div className="flex gap-5">
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                            <input type="number" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <textarea placeholder="Type Your Massege" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        <button className="btn bg-[#00c867] border text-white mt-5 hover:text-[#00c867] hover:bg-transparent hover:border-[#00c867]">Submit</button>
                    </form>
                </div>
            </div>
            {/* <div>
                <Footer></Footer>
            </div> */}
        </div>
    );
};

export default ContactUs;