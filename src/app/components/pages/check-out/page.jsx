'use client'
import React from 'react'
import CategoryHead from '../../homepage/CategoryHead'
import Link from 'next/link'
import { IoPricetagOutline } from "react-icons/io5";
import Form from './Form';
import PlaceOrder from './PlaceOrder';

const page = () => {
    
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full h-14 px-20 flex items-center justify-between relative">
                <CategoryHead />
            </div>
            <div className="w-full h-44 mt-8 flex flex-col items-center space-y-2 justify-center bg-[url('/shops/breadcrumb.jpg.webp')] bg-cover bg-center text-white">
                <p className='text-5xl font-bold'>Checkout</p>
                <div className="flex items-center space-x-2 justify-center ">
                    <Link href="/" className='text-lg font-bold'>Home-</Link>
                    <p>Checkout</p>
                </div>
            </div>
            <div className="w-full px-20 h-14 mt-16">
                <div className="w-full h-full bg-gray-100 border-t border-t-green-600 flex items-center justify-center">
                    <div className="text-xl text-green-600">
                        <IoPricetagOutline />
                    </div>
                    <p className='text-gray-500 px-4'>
                        Have a coupon? <Link href="" className='px-1 underline decoration-gray-400'>Click here</Link> to enter your code
                    </p>
                </div>
            </div>
            <div className="w-full px-20 mt-14 flex flex-col items-center">
                <p className='w-full py-2.5 text-2xl font-extrabold border-b border-b-gray-300'>Billing Details</p>
                <div className="w-full flex items-start justify-between space-x-4 mt-5">
                    <Form />
                    <PlaceOrder/>
                </div>
            </div>
        </div>
    )
}

export default page