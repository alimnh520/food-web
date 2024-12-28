import React from 'react'
import productItems from '../../../api/products.json'
import { IoCartOutline } from 'react-icons/io5'
import { TfiReload } from 'react-icons/tfi'
import { IoMdHeartEmpty } from 'react-icons/io'
import Link from 'next/link'

const RelatedProduct = () => {
    return (
        <div className='w-full px-20 flex flex-col items-center sm:px-5 sm:mt-5'>
            <p className='text-5xl flex items-center justify-center font-bold relative before:absolute before:content-[""] before:h-1 before:w-28 before:bg-green-600 before:-bottom-7 sm:text-3xl'>Related Product</p>
            <div className="w-full h-80 mt-20 grid gap-x-5 grid-cols-4 grid-rows-1 sm:gap-x-0 sm:mt-10 sm:grid-cols-1 sm:grid-rows-4 sm:h-auto">
                {
                    productItems.slice(0, 4).map((currElm) => {
                        return (
                            <div className="flex flex-col items-center relative group" key={currElm.id}>
                                <img src={currElm.img} alt="" className='h-64 w-full object-cover object-center' />
                                <p className='text-lg mt-2 capitalize'>{currElm.name}</p>
                                <div className="flex items-center justify-center space-x-5">
                                    <p className='text-lg font-bold'>${currElm.price}</p>
                                </div>
                                <div className=" absolute w-60 top-40 hidden space-x-3 items-center justify-center group-hover:flex">
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
        </div>
    )
}

export default RelatedProduct