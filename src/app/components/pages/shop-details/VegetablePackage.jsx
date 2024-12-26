'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaStar, FaTwitter } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import latestItems from '../../../api/products.json';

const VegetablePackage = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
        }
    }
    const increment = () => {
        setCount(count + 1);
        if (count >= 10) {
            setCount(10);
        }
    }
    return (
        <div className="w-full mt-16 px-20 flex gap-y-5 flex-col items-center justify-center">
            <div className='w-full h-[550px] grid gap-x-8 grid-cols-2 grid-rows-1'>
                <div className="">
                    <img src="/products/product-details-1.jpg.webp" alt="" className='h-full w-full object-cover object-center' />
                </div>
                <div className="h-full text-gray-700 flex flex-col items-start space-y-6">
                    <p className='text-4xl font-extrabold'>Vegetable’s Package</p>
                    <div className="flex items-center justify-center space-x-1 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfStroke />
                        <p className='text-red-500 text-xs'>(18 reviews)</p>
                    </div>

                    <p className='text-red-500 text-3xl font-semibold'>$50.00</p>

                    <p className='text-gray-500 leading-7'>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>

                    <div className="flex items-center justify-start py- space-x-3 border-b border-b-gray-200 w-full pt-5 pb-9">
                        <div className="h-12 w-40 bg-gray-100 flex items-center justify-between px-5 text-gray-600">
                            <button className='text-3xl' onClick={decrement}>-</button>
                            <p className='text-2xl mt-1'>{count}</p>
                            <button className='text-2xl' onClick={increment}>+</button>
                        </div>
                        <Link href="" className='h-12 w-40 flex items-center justify-center text-white bg-green-600 text-lg font-extrabold uppercase'>Add to cart</Link>
                        <Link href="" className='size-12 flex items-center justify-center bg-gray-100 text-gray-500 text-2xl'>
                            <IoHeartOutline />
                        </Link>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-3">
                        <div className="flex items-center justify-start">
                            <p className='w-40 text-lg font-extrabold'>Availability</p>
                            <p> In Stock</p>
                        </div>

                        <div className="flex items-center justify-start">
                            <p className='w-40 text-lg font-extrabold'>Shipping</p>
                            <p>  01 day shipping. <span className='text-red-500 font-mono'>Free pickup today</span></p>
                        </div>

                        <div className="flex items-center justify-start">
                            <p className='w-40 text-lg font-extrabold'>Weight</p>
                            <p>0.5 kg</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <p className='w-40 text-lg font-extrabold'>Share on</p>
                            <div className="flex items-center justify-center space-x-5 text-sm">
                                <Link href=""><FaFacebook /></Link>
                                <Link href=""><FaTwitter /></Link>
                                <Link href=""><FaInstagram /></Link>
                                <Link href=""><FaPinterest /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative h-32 flex items-center space-x-10 justify-start">
                <div className="w-1/2 h-full flex items-center justify-center">
                    <Swiper
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                        slidesPerView={4}
                        spaceBetween={30}
                        loop
                        className="w-full h-full"
                    >
                        {
                            latestItems.map((currElm) => {
                                return (
                                    <SwiperSlide key={currElm.id}>
                                        <img src={currElm.img} alt="" className='h-full w-full object-cover object-center' />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default VegetablePackage