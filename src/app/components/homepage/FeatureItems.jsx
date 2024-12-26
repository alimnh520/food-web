import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import React from 'react'

const FeatureItems = ({ currElm }) => {
    return (
        <div className="flex flex-col items-center justify-center relative group" key={currElm.id}>
            <img src={currElm.img} alt="" className='h-48 w-full object-cover object-center' />
            <p className='text-lg mt-2 capitalize'>{currElm.name}</p>
            <div className="flex items-center justify-center space-x-5">
                <p className='text-lg font-bold'>${currElm.price}</p>
                <p className='text-lg text-gray-600 line-through font-sans font-semibold decoration-2'>
                    {currElm.discount != 0 && currElm.price + ((currElm.discount * currElm.price) / 100)}
                </p>
            </div>
            <div className=" absolute w-60 mt-20 hidden space-x-3 items-center justify-center group-hover:flex">
                <Link href="" className='size-10 flex items-center justify-center rounded-full bg-white border border-gray-400 text-2xl text-black hover:text-white hover:bg-green-600 transition-all duration-300 hover:rotate-[360deg]'>
                    <IoMdHeartEmpty />
                </Link>
                <Link href="" className='size-10 flex items-center justify-center rounded-full bg-white border border-gray-400 text-2xl text-black hover:text-white hover:bg-green-600 transition-all duration-300 hover:rotate-[360deg]'>
                    <TfiReload />
                </Link>
                <Link href="" className='size-10 flex items-center justify-center rounded-full bg-white border border-gray-400 text-2xl text-black hover:text-white hover:bg-green-600 transition-all duration-300 hover:rotate-[360deg]'>
                    <IoCartOutline />
                </Link>
            </div>
        </div>
    )
}

export default FeatureItems