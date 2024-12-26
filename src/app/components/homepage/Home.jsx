import React from 'react'
import Categories from './Categories'
import HomeSlider from './HomeSlider'
import FeaturedProduct from './FeaturedProduct'
import Banner from './Banner'
import ProductReview from './ProductReview'
import AboutBlogs from './AboutBlogs'

const Home = () => {
    return (
        <div className='w-full px-20 py-10 flex flex-col items-center justify-center sm:px-5'>
            <Categories />
            <HomeSlider />
            <FeaturedProduct />
            <Banner />
            <ProductReview />
            <AboutBlogs />
        </div>
    )
}

export default Home