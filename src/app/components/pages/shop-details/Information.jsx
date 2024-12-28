'use client'
import React, { useState } from 'react'

const Information = () => {
    const [option, setOption] = useState('description');

    const informationText = `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. <br /> <br /> Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.`;

    const descriptionText = `tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. <br /> <br /> Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget <br /> <br />  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`;

    const reviewsText = `Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. <br /> <br /> Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque tortor risus.`

    return (
        <div className='h-96 w-full mt-20 flex flex-col items-center sm:mt-10 sm:h-auto'>
            <div className="w-full flex items-center justify-center space-x-10 sm:space-x-4">
                <div className="w-96 h-px bg-gray-300 sm:w-10"></div>
                <div className="flex items-center justify-center space-x-10 text-lg font-extrabold sm:text-sm sm:space-x-4 sm:w-full sm:justify-between">
                    <button className={`${option == "description" ? "text-gray-900" : "text-gray-500"}`} onClick={() => setOption('description')}>Description</button>

                    <button className={`${option == "information" ? "text-gray-900" : "text-gray-500"}`} onClick={() => setOption('information')}>Information</button>

                    <button className={`${option == "reviews" ? "text-gray-900" : "text-gray-500"}`} onClick={() => setOption('reviews')}>Reviews (1)</button>
                </div>
                <div className="w-96 h-px bg-gray-300 sm:w-10"></div>
            </div>
            <div className="w-full px-20 mt-10 flex flex-col items-start sm:px-5 sm:mt-6">
                <p className='text-lg font-extrabold'>{option == "description" && "Description" || option == "information" && "Information" || option == "reviews" && "Reviews"}</p>

                <div className='text-gray-500 mt-10 sm:mt-5'>
                    {option == "description" && <p>{descriptionText}</p> || option == "information" && <p>{informationText}</p> || option == "reviews" && <p>{reviewsText}</p>}
                </div>
            </div>
        </div>
    )
}

export default Information