import React from 'react'
import BlogsDate from './BlogsDate'

const AboutBlogs = () => {
    const head1 = "Cooking tips make cooking simple"
    const head2 = "6 ways to prepare breakfast for 30"
    const head3 = "Visit the clean farm in the US"
    return (
        <div className='flex w-full mt-10 flex-col items-center justify-center'>
            <p className='text-4xl font-black flex items-center justify-center relative before:absolute before:content-[""] before:w-24 before:h-1 before:bg-green-600 before:-bottom-4'>From The Blog</p>
            <div className="w-full h-96 mt-10 space-x-9 flex items-center justify-center sm:h-auto sm:space-x-0 sm:flex-col sm:space-y-5">
                <BlogsDate headLine={head1} comment={"4"} date={"july 4,2019"} img={'/from-blog/blog-1.jpg.webp'}/>
                <BlogsDate headLine={head2} comment={"7"} date={"june 12,2019"} img={'/from-blog/blog-2.jpg.webp'}/>
                <BlogsDate headLine={head3} comment={"3"} date={"april 9,2019"} img={'/from-blog/blog-3.jpg.webp'}/>
            </div>
        </div>
    )
}

export default AboutBlogs