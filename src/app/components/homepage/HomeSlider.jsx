'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const HomeSlider = () => {
    return (
        <Swiper
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            slidesPerView={window.innerWidth < 1024 ? 2 : 4}
            spaceBetween={window.innerWidth < 1024 ? 10 : 30}
            loop
            className=" w-full h-64 mt-16 flex items-center justify-center relative"
        >
            <SwiperSlide className="bg-[url('/homeSlider/cat-1.jpg.webp')] bg-cover bg-center">
                <div className="h-full w-full flex items-end justify-center">
                    <Link href="" className='w-10/12 text-center uppercase py-2 text-lg mb-7 font-bold bg-white text-black'>fresh fruit</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/homeSlider/cat-2.jpg.webp')] bg-cover bg-center">
                <div className="h-full w-full flex items-end justify-center">
                    <Link href="" className='w-10/12 text-center uppercase py-2 text-lg mb-7 font-bold bg-white text-black'>dried fruit</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/homeSlider/cat-3.jpg.webp')] bg-cover bg-center">
                <div className="h-full w-full flex items-end justify-center">
                    <Link href="" className='w-10/12 text-center uppercase py-2 text-lg mb-7 font-bold bg-white text-black'>vegetables</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/homeSlider/cat-4.jpg.webp')] bg-cover bg-center">
                <div className="h-full w-full flex items-end justify-center">
                    <Link href="" className='w-10/12 text-center uppercase py-2 text-lg mb-7 font-bold bg-white text-black'>drink fruit</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/homeSlider/cat-5.jpg.webp')] bg-cover bg-center">
                <div className="h-full w-full flex items-end justify-center">
                    <Link href="" className='w-10/12 text-center uppercase py-2 text-lg mb-7 font-bold bg-white text-black'>fresh fruit</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/homeSlider/cat-1.jpg.webp')] bg-cover bg-center">
                <div className="h-full w-full flex items-end justify-center">
                    <Link href="" className='w-10/12 text-center uppercase py-2 text-lg mb-7 font-bold bg-white text-black'>drink fruit</Link>
                </div>
            </SwiperSlide>

            <div className="custom-next flex h-20 w-10 text-2xl text-gray-300 items-center justify-center border border-gray-300 hover:bg-gray-300 hover:text-white transition-all duration-300 shadow-lg absolute right-0 z-10 top-1/2 -translate-y-1/2 cursor-pointer"><IoIosArrowForward /></div>
            <div className="custom-prev flex h-20 w-10 text-2xl text-gray-300 items-center justify-center border border-gray-300 hover:bg-gray-300 hover:text-white transition-all duration-300 shadow-lg absolute left-0 z-10 top-1/2 -translate-y-1/2 cursor-pointer"><IoIosArrowBack /></div>
        </Swiper>
    )
}

export default HomeSlider