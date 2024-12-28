'use client'
import React from 'react'
import CategoryHead from '../homepage/CategoryHead'
import Link from 'next/link'
import { IoCall } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import Message from './Message';

const page = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full h-44 flex flex-col items-center space-y-2 justify-center bg-[url('/shops/breadcrumb.jpg.webp')] bg-cover bg-center text-white">
                <p className='text-5xl sm:text-3xl font-bold'>Contact Us</p>
                <div className="flex items-center space-x-2 justify-center ">
                    <Link href="/" className='text-lg font-bold'>Home-</Link>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="w-full h-64 px-28 flex space-x-24 items-center justify-center sm:space-x-0 sm:mt-5 sm:h-auto sm:flex-col sm:space-y-5 sm:px-0">
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <IoCall className='text-5xl sm:text-3xl font-bold text-green-600' />
                    <p className='text-4xl font-bold'>Phone</p>
                    <p className='text-gray-600 text-lg'>+8801931039368</p>
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <IoLocationOutline className='text-5xl sm:text-3xl font-bold text-green-600' />
                    <p className='text-4xl font-bold'>Address</p>
                    <p className='text-gray-600 text-lg'>Khulna shipyard-road, Jinnahpara</p>
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <IoTimeOutline className='text-5xl sm:text-3xl font-bold text-green-600' />
                    <p className='text-4xl font-bold'>Open time</p>
                    <p className='text-gray-600 text-lg'>10:00 am to 23:00 pm</p>
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <GoMail className='text-5xl sm:text-3xl font-bold text-green-600' />
                    <p className='text-4xl font-bold'>Email</p>
                    <p className='text-gray-600 text-lg'>alimnh412@gmail.com</p>
                </div>
            </div>
            <div className="w-full h-[500px] flex items-center justify-center mt-10 relative sm:h-[450px]">
                <div className=" absolute h-28 w-80 bg-white flex flex-col items-center justify-center space-y-1 shadow-[0_0_20px_rgba(0,0,0,0.3)] before:absolute before:content-[''] before:size-5 before:bg-white before:rotate-45 before:-bottom-2.5">
                    <p className='text-2xl font-bold'>Khulna</p>
                    <p className='text-gray-600'>+8801931039368</p>
                    <p className='text-gray-600'> Add: Khulna shipyard road, Jinnahpara</p>
                </div>
                <div className=" absolute top-[330px]">
                    <FaLocationDot className='text-5xl sm:text-3xl font-bold text-green-600' />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117706.86283211022!2d89.56331330000002!3d22.789882099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1732966033718!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
            </div>
            <Message/>
        </div>
    )
}

export default page