import React from 'react'
import CategoryHead from '../../homepage/CategoryHead'
import Link from 'next/link'
import LeftSide from './LeftSide'

const page = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full h-14 px-20 flex items-center justify-between relative">
                <CategoryHead />
            </div>
            <div className="w-full h-72 mt-8 flex flex-col items-center space-y-4 justify-center bg-[url('/shops/breadcrumb.jpg.webp')] bg-cover bg-center text-white">
                <p className='text-5xl font-bold'>The Moment You Need To Remove Garlic From The Menu</p>
                <div className="flex items-center justify-center space-x-4">
                    <p className=''>By Michael Scofield</p>
                    <p className='border-l-2 border-l-white border-r-2 border-r-white px-4'> January 14, 2019</p>
                    <p className=''>  8 Comments</p>
                </div>
            </div>
            <div className="w-full px-20 flex items-center justify-between">
                <LeftSide/>
            </div>
        </div>
    )
}

export default page