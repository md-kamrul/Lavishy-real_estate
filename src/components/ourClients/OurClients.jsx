// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div data-aos="zoom-in">
            <h2 className='text-center text-[#2b3440] mt-24 font-bold text-4xl mb-5' >Our Clients</h2>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper flex items-center"
                >
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_5.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_6.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_7.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_8.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[60%] ms-auto my-auto' src="/assets/clients/clients_9.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
