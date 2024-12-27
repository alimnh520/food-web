import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import CopyRights from './CopyRights'

const Footer = () => {
    return (
        <div className='w-full px-20 pt-10 mt-20 bg-zinc-100 sm:px-1 sm:mt-5'>
            <div className="w-full grid grid-cols-3 font-normal sm:grid-cols-1 sm:grid-rows-3">
                <div className="flex flex-col space-y-4 w-full">
                    <img src="/Footer/logo.png.webp" alt="" className='w-36 mb-3' />
                    <p>Address: Shipyard Road Khulna, Khulna</p>
                    <p>Phone: +8801931039368</p>
                    <p>Email: alimnh412@gmail.com</p>
                </div>
                <div className="mt-3 flex flex-col space-y-4">
                    <p className='font-bold'>Useful Links</p>
                    <div className="grid grid-cols-2 text-sm sm:text-base">
                        <div className="flex flex-col space-y-4">
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>About Us</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>About Our Shop</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Secure Shopping</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Delivery infomation</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Privacy Policy</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Our Sitemap</Link>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Who We Are</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Our Services</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Projects</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Contact</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Innovation</Link>
                            <Link href="" className='hover:text-green-700 transition-all duration-300'>Testimonials</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 mt-3">
                    <p className='font-bold'>Join Our Newsletter Now</p>
                    <p className='my-3 text-sm pb-5'>Get E-mail updates about our latest shop and special offers.</p>
                    <div className="h-14 w-full flex items-center border border-gray-200">
                        <input type="text" className='h-full w-9/12 px-5 outline-none text-gray-700 sm:w-8/12' placeholder='Enter Your Email' />
                        <button className='h-full w-3/12 bg-green-600 text-sm font-bold uppercase text-white hover:bg-transparent  hover:text-green-600 border-l hover:border-gray-200 sm:w-4/12'>Subscribe</button>
                    </div>
                    <div className="flex items-center justify-start pt-5 space-x-4 sm:pt-3">
                        <Link href="" className='text-white hover:bg-white transition-all duration-300 border hover:border-blue-800 hover:text-blue-800 size-10 bg-blue-800 flex items-center justify-center rounded-full'><FaFacebookF /></Link>
                        <Link href="" className='text-white hover:bg-white transition-all duration-300 border hover:border-blue-600 hover:text-blue-600 size-10 bg-blue-600 flex items-center justify-center rounded-full'><FaTwitter /></Link>
                        <Link href="" className='text-white hover:bg-white transition-all duration-300 border hover:border-blue-700 hover:text-blue-700 size-10 bg-blue-700 flex items-center justify-center rounded-full'><FaLinkedin /></Link>
                        <Link href="" className='text-white hover:bg-white transition-all duration-300 border hover:border-orange-700 hover:text-orange-700 size-10 bg-orange-700 flex items-center justify-center rounded-full'><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <CopyRights/>
        </div>
    )
}

export default Footer