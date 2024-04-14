import Footer from "../footer/Footer";
import OurClients from "../ourClients/OurClients";
import DataCards from "./DataCards"

const Home = () => {

    

    return (
        <div>
            {/* Slider */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="./../../../public/assets/banner_1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="./../../../public/assets/banner_2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="./../../../public/assets/banner_3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="./../../../public/assets/banner_4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#00c867] border-[#00c867] text-white hover:bg-transparent hover:border-[#00c867] hover:text-[#00c867]">❯</a>
                    </div>
                </div>
            </div>

            {/* data cards */}
            <DataCards></DataCards>

            {/* client */}
            <OurClients></OurClients>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;