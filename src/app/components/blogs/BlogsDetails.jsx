import React from 'react'
import { SlCalender } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';


const BlogsDetails = ({ img, date, comment, headLine}) => {
    const summery = "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
    return (
        <div className='h-[500px] flex flex-col items-start justify-start'>
            <img src={img} alt="" className='w-full object-cover object-center' />
            <div className="mt-4 font-semibold flex items-center justify-start text-gray-600">
                <SlCalender className='mr-3'/>
                <p>{date}</p>
                <LuMessageSquare className='ml-5 mt-1 text-lg mx-1'/>
                <p>{comment}</p>
            </div>
            <Link href="" className='text-lg font-black my-3'>{headLine}</Link>
            <p className='text-lg text-gray-600'>{summery}</p>

            <Link href="" className='flex items-center justify-center gap-x-4 bg-white px-5 py-3 rounded-full uppercase border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 mt-7'>Read more <FaLongArrowAltRight className='mt-1'/></Link>
        </div>
    )
}

export default BlogsDetails