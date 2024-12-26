import Link from 'next/link'
import React from 'react'

const Pages = () => {
    return (
        <div className="h-32 w-40 -left-10 top-9 hidden flex-col justify-center p-4 group-hover:flex bg-gray-950 absolute text-white font-normal space-y-2 capitalize z-10 sm:left-28 sm:top-0 z-20">
            <Link href="/components/pages/shop-details" className='hover:text-green-600 transition-all duration-300'>Shop Details</Link>
            <Link href="" className='hover:text-green-600 transition-all duration-300'>Shopping Cart</Link>
            <Link href="/components/pages/check-out" className='hover:text-green-600 transition-all duration-300'>Check Out</Link>
            <Link href="" className='hover:text-green-600 transition-all duration-300'>Blogs Details</Link>
        </div>
    )
}

export default Pages