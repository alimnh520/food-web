'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import ProductSlide from './ProductSlide';
import PriceRange from './PriceRange';
import AllProduct from './AllProduct';
import Color from './Color';
import Size from './Size';
import LatestProduct from '../homepage/LatestProduct';
import { FaAngleDoubleRight } from "react-icons/fa";

const ShopItems = () => {
    const [rangeOne, setRangeOne] = useState(1);
    const [rangeTwo, setRangeTwo] = useState(300);
    const [showShop, setShowShop] = useState(true);
    return (
        <div className='w-full px-20 flex items-start justify-between mt-20 sm:mt-0 sm:px-1 sm:flex-col sm:justify-center sm:space-y-10 relative'>
            <div className=" hidden absolute sm:flex size-10 rounded-full bg-red-500 right-5 top-10 z-30 items-center justify-center text-lg font-bold text-gray-300 hover:text-white transition-all duration-300" onClick={() => setShowShop(!showShop)}><FaAngleDoubleRight /></div>
            <div className={`w-3/12 flex flex-col items-start sm:w-full sm:h-[600px] sm:overflow-y-scroll sm:px-5 sm:pb-5 sm:absolute sm:z-20 sm:top-0 sm:bg-white transition-all duration-300 ${showShop ? '-left-full' : 'left-0'}`}>
                <p className='text-3xl font-bold'>Department</p>
                <div className="flex w-full flex-col items-start space-y-3 mt-5 text-lg">
                    <Link href="" className='w-full'>Fresh Meat</Link>
                    <Link href="" className='w-full'>Vegetables</Link>
                    <Link href="" className='w-full'>Fruit & Nut Gifts</Link>
                    <Link href="" className='w-full'>Fresh Berries</Link>
                    <Link href="" className='w-full'>Ocean Foods</Link>
                    <Link href="" className='w-full'>Butter & Eggs</Link>
                    <Link href="" className='w-full'>Fastfood</Link>
                    <Link href="" className='w-full'>Fresh Onion</Link>
                    <Link href="" className='w-full'>Papayaya & Crisps</Link>
                    <Link href="" className='w-full'>Oatmeal</Link>
                </div>

                <div className="w-full h-40 mt-16 sm:mt-8">
                    <PriceRange rangeOne={rangeOne} rangeTwo={rangeTwo} setRangeOne={setRangeOne} setRangeTwo={setRangeTwo} />
                </div>
                <Color />
                <Size />
                <div className="w-full pr-2 mt-14 sm:mt-5">
                    <LatestProduct />
                </div>
            </div>


            <div className="w-9/12 flex flex-col items-start sm:w-full sm:px-5">
                <p className='text-4xl font-bold flex items-center justify-center relative before:absolute before:content-[""] before:h-1 before:w-28 before:bg-green-600 before:-bottom-4'>Sale Off</p>
                <ProductSlide />
                <AllProduct rangeOne={rangeOne} rangeTwo={rangeTwo} />
            </div>
        </div>
    )
}

export default ShopItems