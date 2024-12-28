import React from 'react'
import BlogsDetails from './BlogsDetails'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Blogs = () => {
    const head1 = "Cooking tips make cooking simple"
    const head2 = "6 ways to prepare breakfast for 30"
    const head3 = "Visit the clean farm in the US"
    return (
        <div className='w-8/12 flex flex-col items-start sm:w-full'>
            <div className="w-full grid gap-x-10 gap-y-14 grid-cols-2 grid-rows-3 border-b border-b-gray-300 pb-10 sm:gap-x-0 sm:gap-y-6 sm:grid-cols-1 sm:grid-rows-none">
                <BlogsDetails headLine={head1} comment={"4"} date={"july 4,2019"} img={'/from-blog/blog-1.jpg.webp'} />
                <BlogsDetails headLine={head2} comment={"7"} date={"june 12,2019"} img={'/from-blog/blog-2.jpg.webp'} />
                <BlogsDetails headLine={head3} comment={"3"} date={"april 9,2019"} img={'/from-blog/blog-3.jpg.webp'} />
                <BlogsDetails headLine={head3} comment={"3"} date={"april 9,2019"} img={'/from-blog/blog-3.jpg.webp'} />
                <BlogsDetails headLine={head3} comment={"3"} date={"april 9,2019"} img={'/from-blog/blog-3.jpg.webp'} />
                <BlogsDetails headLine={head3} comment={"3"} date={"april 9,2019"} img={'/from-blog/blog-3.jpg.webp'} />
            </div>

            <div className="flex mt-10 space-x-4 items-center justify-center">
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>1</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>2</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>3</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'>4</button>
                <button className='size-9 text-lg font-bold text-gray-500 border border-gray-400 flex items-center justify-center hover:border-transparent hover:bg-green-600 hover:text-white transition-all duration-300'><FaLongArrowAltRight /></button>
            </div>
        </div>
    )
}

export default Blogs