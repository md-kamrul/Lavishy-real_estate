const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#2b3440] text-white mt-24">
                <aside>
                    <img className="w-[80px]" src="./../../../public/assets/fav_icon.png" alt="" />
                    <p>Lavishy Real Estate Ltd<br />Luxury real estate agency since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#00c867]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#00c867]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#00c867]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;