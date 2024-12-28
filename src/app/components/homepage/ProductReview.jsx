import React from 'react'
import LatestProduct from './LatestProduct'
import TopRated from './TopRated'
import ReviewProduct from './ReviewProduct'

const ProductReview = () => {
    return (
        <div className='w-full h-[500px] mt-20 grid grid-cols-3 space-x-10 items-center justify-center sm:h-auto sm:space-x-0 sm:space-y-5 sm:grid-cols-1 sm:grid-rows-3 sm:px-5'>
            <LatestProduct/>
            <TopRated/>
            <ReviewProduct/>
        </div>
    )
}

export default ProductReview