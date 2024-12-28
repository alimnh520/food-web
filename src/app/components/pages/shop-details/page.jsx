import React from 'react'
import CategoryHead from '../../homepage/CategoryHead'
import Link from 'next/link'
import VegetablePackage from './VegetablePackage'
import Information from './Information'
import RelatedProduct from './RelatedProduct'

const page = () => {
    return (
        <div className='w-full flex flex-col sm:mt-16'>
            <div className="w-full h-14 px-20 flex items-center justify-between relative sm:px-0">
                <CategoryHead />
            </div>
            <div className="w-full h-44 mt-8 flex flex-col items-center space-y-2 justify-center bg-[url('/shops/breadcrumb.jpg.webp')] bg-cover bg-center text-white sm:mt-14">
                <p className='text-5xl font-bold sm:text-2xl'>Vegetable’s Package</p>
                <div className="flex items-center space-x-2 justify-center ">
                    <Link href="/" className='text-lg font-bold'>Home-</Link>
                    <p>Vegetable’s Package</p>
                </div>
            </div>
            <VegetablePackage/>
            <Information/>
            <RelatedProduct/>
        </div>
    )
}

export default page