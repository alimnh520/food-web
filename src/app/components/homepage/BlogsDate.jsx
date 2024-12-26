import React from 'react'
import { SlCalender } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";
import Link from 'next/link';


const BlogsDate = ({ img, date, comment, headLine}) => {
    const summery = "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
    return (
        <div className='h-full w-full flex flex-col items-start justify-start'>
            <img src={img} alt="" className='w-full object-cover object-center' />
            <div className="mt-4 font-semibold flex items-center justify-start text-gray-600">
                <SlCalender className='mr-3'/>
                <p>{date}</p>
                <LuMessageSquare className='ml-5 mt-1 text-lg mx-1'/>
                <p>{comment}</p>
            </div>
            <Link href="" className='text-lg font-black my-3'>{headLine}</Link>
            <p className='text-lg text-gray-600'>{summery}</p>
        </div>
    )
}

export default BlogsDate