import Link from 'next/link'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import ReviewProduct from '../homepage/ReviewProduct';

const BlogsCategory = () => {
    return (
        <div className='w-4/12 py-10 flex flex-col items-start'>
            <div className="w-full h-12 flex items-center justify-center relative">
                <input type="text" placeholder='Search...' className='border border-gray-400 outline-none h-full w-full px-4 rounded-full' />
                <Link href="" className=' absolute right-5 text-2xl z-10 opacity-50'><IoIosSearch /></Link>
            </div>

            <div className="flex flex-col items-start mt-12">
                <p className='text-3xl font-extrabold'>Categories</p>

                <div className="flex flex-col items-start space-y-6 text-lg text-gray-600 mt-9">
                    <Link href="" className=''>All</Link>
                    <Link href="" className=''>Beauty (20)</Link>
                    <Link href="" className=''>Food (5)</Link>
                    <Link href="" className=''>Life Style (9)</Link>
                    <Link href="" className=''>Travel (10)</Link>
                </div>
            </div>
            <div className="flex flex-col items-start mt-12 space-y-5">
                <p className='text-3xl font-extrabold'>Recent News</p>

                <div className="h-20 flex space-x-5 items-center justify-start">
                    <img src="/products/feature-1.jpg.webp" alt="" className='h-full' />
                    <Link href="" className="flex flex-col items-start space-y-2">
                        <p className='text-lg font-extrabold'>09 Kinds Of Vegetables Protect The Liver</p>
                        <p className='text-sm text-gray-600'>MAR 05, 2019</p>
                    </Link>
                </div>
                <div className="h-20 flex space-x-5 items-center justify-start">
                    <img src="/products/feature-1.jpg.webp" alt="" className='h-full' />
                    <Link href="" className="flex flex-col items-start space-y-2">
                        <p className='text-lg font-extrabold'>4 Principles Help  You Lose Weight With Vegetables</p>
                        <p className='text-sm text-gray-600'>MAR 05, 2019</p>
                    </Link>
                </div>
                <div className="h-20 flex space-x-5 items-center justify-start">
                    <img src="/products/feature-1.jpg.webp" alt="" className='h-full' />
                    <Link href="" className="flex flex-col items-start space-y-2">
                        <p className='text-lg font-extrabold'>Tips You To Balance
                            Nutrition Meal Day</p>
                        <p className='text-sm text-gray-600'>MAR 05, 2019</p>
                    </Link>
                </div>
            </div>

            <div className='w-full flex flex-col items-start justify-start mt-12'>
                <p className='text-3xl font-bold'>Search By</p>
                <div className="w-full h-24 grid grid-cols-3 grid-rows-2 gap-3 mt-5">
                    <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Apple</Link>
                    <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Beauty</Link>
                    <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Vegetables</Link>
                    <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Fruit</Link>
                    <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Healthy Food</Link>
                    <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Lifestyle</Link>
                </div>
            </div>

            <div className="w-full mt-12">
                <ReviewProduct/>
            </div>
        </div>
    )
}

export default BlogsCategory