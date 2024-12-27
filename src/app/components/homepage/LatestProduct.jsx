'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import ProductSlider from './ProductSlider';

const LatestProduct = () => {
    return (
        <div className="h-full relative">
            <div className="w-full flex items-center justify-between sm:px-5">
                <p className='text-2xl font-black'>Latest Products</p>

                <div className="custom-next2 flex size-8 text-2xl text-gray-400 items-center justify-center border border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-400 shadow-lg absolute right-0 z-10 cursor-pointer"><IoIosArrowForward /></div>
                <div className="custom-prev2 flex size-8 text-2xl text-gray-400 items-center justify-center border border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-400 shadow-lg absolute right-10 z-10 cursor-pointer"><IoIosArrowBack /></div>
            </div>

            <Swiper
                navigation={{
                    nextEl: '.custom-next2',
                    prevEl: '.custom-prev2',
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop
                className=" w-full h-5/6 mt-9 flex items-center justify-center relative"
            >
                <SwiperSlide>
                    <ProductSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSlider/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LatestProduct