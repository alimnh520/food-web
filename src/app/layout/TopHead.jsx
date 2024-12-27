'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { IoIosMail } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const TopHead = () => {
    const [country, setCountry] = useState('English');
    const [flag, setFlag] = useState('US');
    const setFlagApi = (e) => {
        setCountry(e.target.innerText);
        setFlag(e.target.value);
    }
    return (
        <div className="w-full px-20 h-10 bg-gray-100 flex items-center justify-between sm:flex-col sm:h-16 sm:items-start sm:px-2">
            <div className="flex items-center justify-center space-x-5 group sm:space-x-2 sm:w-full sm:justify-between">
                <Link href="http://alimnh412@gmail.com" target='blank' className="flex items-center justify-center space-x-2 sm:space-x-1">
                    <IoIosMail className='text-xl group-hover:text-blue-600 sm:text-lg' />
                    <p className='text-sm group-hover:text-red-500 sm:text-sm'>alimnh412@gmail.com</p>
                </Link>
                <div className="h-6 w-px bg-gray-300 sm:hidden"></div>
                <p className='text-sm sm:text-xs'>Free Shipping for all Order of $99</p>
            </div>
            <div className="flex h-full items-center justify-center space-x-4 sm:space-x-2 sm:w-full sm:justify-between">
                <div className="flex items-center justify-center space-x-4 sm:space-x-2">
                    <Link href="" className='hover:text-blue-800'><FaFacebookF /></Link>
                    <Link href="" className='hover:text-blue-600'><FaTwitter /></Link>
                    <Link href="" className='hover:text-blue-700'><FaLinkedin /></Link>
                    <Link href="" className='hover:text-orange-700'><FaInstagram /></Link>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="h-full w-28 flex items-center justify-center group space-x-2 cursor-pointer relative">
                    <img src={`https://flagsapi.com/${flag}/flat/64.png`} className='w-8' />
                    <p className='text-sm'>{country}</p>
                    <IoMdArrowDropdown className='group-hover:rotate-180 transition-all duration-300' />
                    <div className="h-24 w-32 hidden space-y-1 flex-col justify-center px-3 group-hover:flex bg-gray-300 absolute top-10">
                        <option className='hover:text-red-500 transition-all duration-300' onClick={(e) => setFlagApi(e)} value="US">English</option>
                        <option className='hover:text-red-500 transition-all duration-300' onClick={(e) => setFlagApi(e)} value="BD">Bangla</option>
                        <option className='hover:text-red-500 transition-all duration-300' onClick={(e) => setFlagApi(e)} value="IN">Hindi</option>
                    </div>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <Link href="/components/login" className="flex items-center justify-center space-x-2 group text-sm">
                    <FaUser className=' group-hover:text-blue-600' />
                    <p className=''>Login</p>
                    <FaRegArrowAltCircleRight className=''/>
                </Link>
            </div>
        </div>
    )
}

export default TopHead