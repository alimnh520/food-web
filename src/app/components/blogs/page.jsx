'use client'
import React from 'react'
import CategoryHead from '../homepage/CategoryHead'
import Link from 'next/link'
import BlogsCategory from './BlogsCategory'
import Blogs from './Blogs'

const page = () => {
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
            <div className="w-full mt-20 px-20 flex gap-x-10 justify-between sm:px-5 sm:mt-6">
                <BlogsCategory/>
                <Blogs/>
            </div>
        </div>
    )
}

export default page