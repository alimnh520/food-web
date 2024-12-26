'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

const CategoryHead = () => {
    const [hide, setHide] = useState(false);

    return (
        <div className={`w-full h-14 flex items-center justify-center relative sm:h-auto sm:flex-col`}>
            <div className={`border w-4/12 h-full flex flex-col transition-all duration-300 relative sm:w-full sm:h-14`}>
                <div className="w-full px-6 h-full bg-green-600 flex items-center justify-start space-x-2 text-white cursor-pointer" onClick={() => setHide(!hide)} >
                    <HiMenu className='text-3xl' />
                    <p className='font-semibold text-lg'>All departments</p>
                    <IoIosArrowDown className={`mt-0.5 ml-10 transition-all duration-300 absolute ${hide ? 'rotate-180' : 'rotate-0'} right-5`} />
                </div>
                <ul className={`flex flex-col transition-all duration-300 ${hide ? 'gap-y-2.5 h-[450px] border-b border-b-gray-400' : 'gap-y-0 h-0'} items-start justify-center text-lg px-7 absolute w-full bg-white overflow-hidden top-14 z-20`}>
                    <li><Link href="">Fresh Meat</Link></li>
                    <li><Link href="">Vegetables</Link></li>
                    <li><Link href="">Fruit & Nut Gifts</Link></li>
                    <li><Link href="">Fresh Berries</Link></li>
                    <li><Link href="">Ocean Foods</Link></li>
                    <li><Link href="">Butter & Eggs</Link></li>
                    <li><Link href="">Fastfood</Link></li>
                    <li><Link href="">Fresh Onion</Link></li>
                    <li><Link href="">Papayaya & Crisps</Link></li>
                    <li><Link href="">Oatmeal</Link></li>
                    <li><Link href="">Fresh Bananas</Link></li>
                </ul>
            </div>

            <div className="w-full h-full flex space-x-5 items-center justify-between sm:flex-col sm:h-auto">
                <div className="h-full w-9/12 flex items-center border border-gray-200 sm:w-full sm:h-14">
                    <div className="h-full w-3/12 flex items-center justify-center text-black border-r border-gray-200 sm:w-44">
                        <p className='font-bold sm:text-sm'>All Categories</p>
                        <IoIosArrowDown className={`mt-0.5 ml-1`} />
                    </div>
                    <input type="text" className='h-full w-7/12 px-5 outline-none text-gray-500 sm:px-2' placeholder='What do you need?' />
                    <button className='h-full w-2/12 bg-green-600 text-sm font-bold uppercase text-white hover:bg-transparent  hover:text-green-600 border-l hover:border-gray-200 sm:w-auto sm:px-2'>Search</button>
                </div>
                <div className="h-full w-3/12 flex space-x-5 items-center justify-center sm:w-full sm:justify-start sm:py-2">
                    <Link href="" className="flex items-center justify-center  bg-gray-200 size-12 rounded-full text-lg" >
                        <IoIosCall />
                    </Link>
                    <div className="flex flex-col items-center  justify-center">
                        <p className='font-black text-lg'>+8801931039368</p>
                        <p className='text-gray-600'>support 24/7 time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryHead