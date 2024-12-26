'use client'
import { IoMdHeartEmpty } from 'react-icons/io';
import { TfiReload } from 'react-icons/tfi';
import { IoCartOutline } from 'react-icons/io5';
import React, { useState } from 'react'
import productItems from '../../api/products.json'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import { RiArrowDownWideFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

const AllProduct = ({ rangeOne, rangeTwo }) => {
    const [pageChange, setPageChange] = useState(0);
    const searchPrice = productItems.filter((priceElm) => rangeTwo >= priceElm.price && rangeOne <= priceElm.price);
    return (
        <div className="w-full h-auto flex flex-col items-start mt-10 border-t border-t-gray-400">
            <div className="w-full py-4 flex items-center justify-between">
                <div className="flex items-center justify-center space-x-4">
                    <p className='text-gray-500'>Sort By</p>
                    <button className='flex items-center justify-center font-bold '>Default <RiArrowDownWideFill className='mt-1 ml-1' /></button>
                </div>
                <p className='text-lg font-bold'>{searchPrice.length} <span className='text-sm font-medium text-gray-500'>Products found</span></p>

                <button className="flex text-3xl items-center justify-center space-x-2">
                    <CgMenuGridR />
                </button>
            </div>

            <div className='w-full grid grid-cols-3 gap-7'>
                {
                    searchPrice.map((currElm) => {
                        return (
                            <div className="h-96 relative group" key={currElm.id}>
                                <img src={currElm.img} alt="" className='h-64 w-full object-cover object-center' />
                                <p className='text-lg text-center mt-2 capitalize'>{currElm.name}</p>
                                <div className="flex items-center justify-center space-x-5">
                                    <p className='text-xl font-bold'>${currElm.price}</p>
                                </div>
                                <div className="absolute top-48 w-60 hidden space-x-3 items-center justify-center group-hover:flex">
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
                    })
                }
            </div>
            <div className="flex space-x-4 items-center justify-center">
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>1</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>2</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>3</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>4</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'><FaLongArrowAltRight /></button>
            </div>
        </div>
    )
}

export default AllProduct