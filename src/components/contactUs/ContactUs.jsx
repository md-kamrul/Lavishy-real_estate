import Footer from "../footer/Footer";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

const ContactUs = () => {

    document.title = "Lavishy - Contact Us"

    return (
        <div>
            <div className="p-14 bg-[#2b3440] text-white mt-24 w-[80%] mx-auto rounded-lg flex justify-between flex-col md:flex-row gap-5 md:gap-0">
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
                <div className="card w-full">
                    <form className="card-body">
                        <div className="flex gap-5 flex-col md:flex-row w-full">
                            <input type="text" placeholder="Your First Name" className="input input-bordered md:w-1/2" required />
                            <input type="text" placeholder="Your Last Name" className="input input-bordered md:w-1/2" required />
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <input type="email" placeholder="Your Email" className="input input-bordered md:w-1/2" required />
                            <input type="number" placeholder="Your Phone" className="input input-bordered md:w-1/2" required />
                        </div>
                        <textarea placeholder="Type Your Massege" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        <button className="w-[50%] mx-auto btn bg-[#00c867] border text-white mt-5 hover:text-[#00c867] hover:bg-transparent hover:border-[#00c867]">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ContactUs;