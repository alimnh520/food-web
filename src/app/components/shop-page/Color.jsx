'use client'
import Link from 'next/link'
import React from 'react'

const Color = () => {
    return (
        <div className="flex flex-col items-start justify-start mt-10">
            <p className='text-3xl font-bold'>Colors</p>
            <div className="h-40 w-full grid gap-x-5 grid-rows-3 grid-cols-2 mt-3">
                <Link href="" className="flex items-center justify-start space-x-3">
                    <div className="size-4 rounded-full border-2 border-gray-500"></div>
                    <p>White</p>
                </Link>
                <Link href="" className="flex items-center justify-start space-x-3">
                    <div className="size-4 rounded-full bg-gray-600"></div>
                    <p>Gray</p>
                </Link>
                <Link href="" className="flex items-center justify-start space-x-3">
                    <div className="size-4 rounded-full bg-red-600"></div>
                    <p>Red</p>
                </Link>
                <Link href="" className="flex items-center justify-start space-x-3">
                    <div className="size-4 rounded-full bg-black"></div>
                    <p>Black</p>
                </Link>
                <Link href="" className="flex items-center justify-start space-x-3">
                    <div className="size-4 rounded-full bg-blue-600"></div>
                    <p>Blue</p>
                </Link>
                <Link href="" className="flex items-center justify-start space-x-3">
                    <div className="size-4 rounded-full bg-green-600"></div>
                    <p>Green</p>
                </Link>
            </div>
        </div>
    )
}

export default Color