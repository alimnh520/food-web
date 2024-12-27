import Link from 'next/link'
import React from 'react'

const Size = () => {
    return (
        <div className='flex flex-col items-start justify-start mt-10 sm:mt-0'>
            <p className='text-3xl font-bold'>Popular Size</p>
            <div className="w-full h-20 grid grid-cols-2 grid-rows-2 gap-3 mt-5">
                <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Large</Link>
                <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Medium</Link>
                <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Small</Link>
                <Link href="" className='bg-gray-300 text-gray-700 flex items-center justify-center'>Tiny</Link>
            </div>
        </div>
    )
}

export default Size