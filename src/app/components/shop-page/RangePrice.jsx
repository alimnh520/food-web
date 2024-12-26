'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import productItems from '../../api/products.json'

const RangePrice = () => {
    return (
        <div className='w-full'>
            <Swiper
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                slidesPerView={3}
                spaceBetween={30}
                loop
                className=" w-full h-full grid grid-cols-3 items-center justify-center relative"
            >
                {
                    productItems.filter((priceElm) => price1 >= priceElm.price && price2 <= priceElm.price).map((currElm) => {
                        return (
                            <SwiperSlide className="w-full bg-red-400" key={currElm.id}>
                                <img src={currElm.img} alt="" className='w-full h-64 object-cover object-center' />
                                <p>{currElm.price}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default RangePrice