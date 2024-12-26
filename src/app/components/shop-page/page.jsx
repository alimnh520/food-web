'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import ShopItems from './ShopItems';
import CategoryHead from '../homepage/CategoryHead';

const page = () => {
    const [hide, setHide] = useState(false);
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full h-14 px-20 flex items-center justify-between relative">
                <CategoryHead />
            </div>
            <div className="w-full h-44 mt-8 flex flex-col items-center space-y-2 justify-center bg-[url('/shops/breadcrumb.jpg.webp')] bg-cover bg-center text-white">
                <p className='text-5xl font-bold'>Organi Shop</p>
                <div className="flex items-center space-x-2 justify-center ">
                    <Link href="/" className='text-lg font-bold'>Home-</Link>
                    <p>Shops</p>
                </div>
            </div>
            <ShopItems/>
        </div>
    )
}

export default page