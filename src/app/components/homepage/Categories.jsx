'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import CategoryHead from './CategoryHead';

const Categories = () => {
    return (
        <div className='w-full flex flex-col gap-x-7 items-end justify-center'>
            <CategoryHead/>
            <div className="w-9/12 h-full sm:mt-0 mt-8 bg-[url('/homeImage/WeightWatchersatWork2014.jpg')] flex flex-col items-start justify-center p-20 space-y-5 sm:w-full sm:px-4">
                <p className='font-black text-green-700 text-sm'>FRUIT FRESH</p>
                <p className='text-4xl font-black text-gray-900'>Vegetable <br />
                    100% Organic</p>
                <p className='text-gray-700'>Free Pickup and Delivery Available</p>
                <Link href="" className='bg-green-600 px-4 py-2 text-white font-bold hover:text-green-600 hover:bg-transparent border border-green-600'>SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Categories