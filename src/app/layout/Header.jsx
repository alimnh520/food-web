'use client'
import React, { useState } from 'react'
import TopHead from './TopHead'
import Link from 'next/link'
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Pages from './Pages';

const Header = () => {
    const [showNav, setNav] = useState(false);
    let itemsPrice = 0;
    const cartItem = 0;
    const linkCls = "uppercase hover:text-green-600 py-2 px-5 sm:w-full sm:px-0 sm:py-0 transition-all duration-700"
    const iconCls = "absolute size-4 flex items-center justify-center -top-3 group-hover:-top-4 transition-all duration-300 -right-1.5 text-sm bg-green-600 rounded-full text-white font-semibold";
    return (
        <div className='w-full flex flex-col bg-red-50 relative'>
            <TopHead />
            <div className="h-10 w-28 bg-gray-600 absolute right-5 top-20 cursor-pointer text-lg font-bold text-white hidden sm:flex items-center justify-between px-2 sm:right-0" onClick={() => setNav(!showNav)}>
                MENU
                <GiHamburgerMenu className='text-2xl'/>
            </div>
            <div className={`w-full px-20 h-16 flex items-center justify-between transition-all duration-300 ${showNav ? "sm:h-80" : "sm:h-14"} sm:overflow-hidden sm:justify-start sm:flex-col sm:items-start sm:px-1`}>
                <img src="/header/logo.png.webp" alt="" />
                <ul className={`flex items-center justify-center space-x-5 font-semibold text-sm sm:flex-col sm:items-start sm:space-y-5 sm:space-x-0 sm:w-full sm:pt-5`}>
                    <li><Link href="/" className={`${linkCls}`} onClick={() => setNav(!showNav)}>Home</Link></li>
                    <li><Link href="/components/shop-page" className={`${linkCls} transition-all duration-500`} onClick={() => setNav(!showNav)}>Shop</Link></li>
                    <li className={`${linkCls} group relative cursor-pointer`}>
                        pages
                        <Pages setNav={setNav} showNav={showNav}/>
                    </li>
                    <li><Link href="/components/blogs" className={`${linkCls}`} onClick={() => setNav(!showNav)}>blogs</Link></li>
                    <li><Link href="/components/contact" className={`${linkCls}`} onClick={() => setNav(!showNav)}>contact</Link></li>
                </ul>
                <div className="flex items-center justify-center space-x-5 sm:py-5">
                    <Link href="" className="flex items-center justify-center relative group">
                        <p className={iconCls}>{cartItem}</p>
                        <FaHeart className='text-lg' />
                    </Link>
                    <Link href="" className="flex items-center justify-center relative group">
                        <p className={iconCls}>{cartItem}</p>
                        <MdShoppingCart className='text-xl' />
                    </Link>
                    <p className='text-gray-600'>item: <span className='text-base font-semibold text-black'>${itemsPrice}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Header