'use client'
import React, { useState } from 'react'

const PriceRange = ({ rangeOne, setRangeOne, rangeTwo, setRangeTwo }) => {
    return (
        <div className='w-full h-full flex flex-col items-start space-y-4'>
            <p className='text-4xl font-bold'>Price</p>
            <div className="flex space-x-5 items-center justify-center">
                <input type="number" className='border border-gray-300 w-20 h-10 p-2 outline-none rounded-md' placeholder='min 10' value={rangeOne} onChange={(e) => setRangeOne(e.target.value)}/>
                <input type="number" className='border border-gray-300 w-20 h-10 p-2 outline-none rounded-md' placeholder='min 300' value={rangeTwo} onChange={(e) => setRangeTwo(e.target.value)}/>
            </div>
            <p className='font-bold text-lg text-red-500'>${rangeOne}  -  ${rangeTwo}</p>
        </div>
    )
}

export default PriceRange