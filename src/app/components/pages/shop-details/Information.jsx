'use client'
import React, { useState } from 'react'
import InformationText from './InformationText';
import DescriptionText from './descriptionText';
import ReviewsText from './ReviewsText';

const Information = () => {
    const [option, setOption] = useState('description');
    return (
        <div className='h-96 w-full mt-20 flex flex-col items-center'>
            <div className="w-full flex items-center justify-center space-x-10">
                <div className="w-96 h-px bg-gray-300"></div>
                <div className="flex items-center justify-center space-x-10 text-lg font-extrabold">
                    <button className={`${option == "description" ? "text-gray-900" : "text-gray-500"}`} onClick={() => setOption('description')}>Description</button>

                    <button className={`${option == "information" ? "text-gray-900" : "text-gray-500"}`} onClick={() => setOption('information')}>Information</button>

                    <button className={`${option == "reviews" ? "text-gray-900" : "text-gray-500"}`} onClick={() => setOption('reviews')}>Reviews (1)</button>
                </div>
                <div className="w-96 h-px bg-gray-300"></div>
            </div>
            <div className="w-full px-20 mt-10 flex flex-col items-start">
                <p className='text-lg font-extrabold'>{option == "description" && "Description" || option == "information" && "Information" || option == "reviews" && "Reviews"}</p>

                <div className='text-gray-500 mt-10'>
                    {option == "description" && <DescriptionText /> || option == "information" && <InformationText /> || option == "reviews" && <ReviewsText />}
                </div>
            </div>
        </div>
    )
}

export default Information