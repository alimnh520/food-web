import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import productItems from '../../api/products.json'
import Link from 'next/link';
import { IoMdHeartEmpty } from 'react-icons/io';
import { TfiReload } from 'react-icons/tfi';
import { IoCartOutline } from 'react-icons/io5';

const ProductSlide = () => {
    return (
        <div className="w-full h-96 mt-16 sm:h-80">
            <Swiper
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                slidesPerView={window.innerWidth < 1024 ? 1 : 3}
                spaceBetween={30}
                loop
                className=" w-full h-full flex items-center justify-center relative"
            >
                {
                    productItems.map((currElm) => {
                        return (
                            <SwiperSlide className="flex flex-col items-center justify-center relative group" key={currElm.id}>
                            <img src={currElm.img} alt="" className='h-64 w-full object-cover object-center' />
                            {currElm.discount != 0 && <p className=' absolute top-5 left-5 bg-red-500 size-10 flex items-center justify-center text-lg font-semibold text-white rounded-full'>-{currElm.discount != 0 && ((currElm.discount * 100)/currElm.price).toFixed()}%</p>}
                            <p className='text-lg text-center mt-2 capitalize'>{currElm.name}</p>
                            <div className="flex items-center justify-center space-x-5">
                                <p className='text-xl font-bold'>${currElm.price}</p>
                                <p className='text-xl text-gray-600 line-through font-sans font-semibold decoration-2'>
                                    {currElm.discount != 0 && currElm.price + ((currElm.discount * currElm.price) / 100)}
                                </p>
                            </div>
                            <div className=" absolute top-48 w-60 hidden space-x-3 items-center justify-center group-hover:flex">
                                <Link href="" className='size-10 flex items-center justify-center rounded-full bg-white border border-gray-400 text-2xl text-black hover:text-white hover:bg-green-600 transition-all duration-300 hover:rotate-[360deg]'>
                                    <IoMdHeartEmpty />
                                </Link>
                                <Link href="" className='size-10 flex items-center justify-center rounded-full bg-white border border-gray-400 text-2xl text-black hover:text-white hover:bg-green-600 transition-all duration-300 hover:rotate-[360deg]'>
                                    <TfiReload />
                                </Link>
                                <Link href="" className='size-10 flex items-center justify-center rounded-full bg-white border border-gray-400 text-2xl text-black hover:text-white hover:bg-green-600 transition-all duration-300 hover:rotate-[360deg]'>
                                    <IoCartOutline />
                                </Link>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProductSlide