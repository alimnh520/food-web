'use client'
import React, { useState } from 'react'
import CategoryHead from '../homepage/CategoryHead'
import Link from 'next/link'
import BlogsCategory from './BlogsCategory'
import Blogs from './Blogs'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

const page = () => {
    const [showShop, setShowShop] = useState(true);
    return (
        <div className='w-full flex flex-col sm:mt-16'>
            <div className="w-full h-14 px-20 flex items-center justify-between relative sm:px-0">
                <CategoryHead />
            </div>
            <div className="w-full h-44 mt-8 flex flex-col items-center space-y-2 justify-center bg-[url('/shops/breadcrumb.jpg.webp')] bg-cover bg-center text-white sm:mt-14">
                <p className='text-5xl font-bold sm:text-2xl'>Blogs</p>
                <div className="flex items-center space-x-2 justify-center ">
                    <Link href="/" className='text-lg font-bold'>Home-</Link>
                    <p>Blogs</p>
                </div>
            </div>
            <div className="w-full mt-20 px-20 flex gap-x-10 justify-between sm:px-5 sm:mt-5 sm:gap-x-0 sm:flex-col sm:justify-center sm:space-y-10 relative">
                <div className=" hidden absolute sm:flex size-10 rounded-full bg-red-500 right-5 top-10 z-30 items-center justify-center text-lg font-bold text-gray-300 hover:text-white transition-all duration-300" onClick={() => setShowShop(!showShop)}>{showShop ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}</div>
                <BlogsCategory showShop={showShop} />
                <Blogs />
            </div>
        </div>
    )
}

export default page