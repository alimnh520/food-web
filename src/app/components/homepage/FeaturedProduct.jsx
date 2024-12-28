'use client'
import React, { useState } from 'react'
import products from '../../api/products.json'
import FeatureItems from './FeatureItems';

const FeaturedProduct = () => {
    const [list, setList] = useState('all');

    const btnCls = `text-lg relative before:absolute before:content-[""] before:h-0.5 before:hover:w-full before:bg-green-600 before:-bottom-0 before:transition-all before:duration-300`
    return (
        <div className='w-full mt-20 flex flex-col items-center justify-center sm:mt-10'>
            <p className='text-5xl flex items-center justify-center font-bold relative before:absolute before:content-[""] before:h-1 before:w-28 before:bg-green-600 before:-bottom-7 sm:text-3xl'>Featured Product</p>

            <div className="flex space-x-6 items-center justify-center mt-16 sm:w-full sm:mt-10 sm:justify-between sm:space-x-2 sm:text-xs">
                <button className={`${btnCls} ${list == 'all' ? 'before:w-full' : 'before:w-0'}`} onClick={() => setList('all')}>All</button>
                <button className={`${btnCls} ${list == 'fruit' ? 'before:w-full' : 'before:w-0'}`} onClick={() => setList('fruit')}>Fruits</button>
                <button className={`${btnCls} ${list == 'meat' ? 'before:w-full' : 'before:w-0'}`} onClick={() => setList('meat')}>Fresh Meat</button>
                <button className={`${btnCls} ${list == 'vegetables' ? 'before:w-full' : 'before:w-0'}`} onClick={() => setList('vegetables')}>Vegetables</button>
                <button className={`${btnCls} ${list == 'fastfood' ? 'before:w-full' : 'before:w-0'}`} onClick={() => setList('fastfood')}>Fastfood</button>
            </div>

            <div className="w-full mt-14 grid gap-x-8 gap-y-10 grid-cols-4 items-center justify-center sm:mt-10 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-0 sm:h-[550px] sm:px-5 sm:overflow-y-scroll">
                {
                    products.filter(() => list == 'all').map((currElm) => {
                        return (
                            <FeatureItems currElm={currElm} key={currElm.id}/>
                        );
                    })
                }
                {
                    products.filter((allElm) => list == 'fruit' && allElm.listName == 'fruit').map((currElm) => {
                        return (
                            <FeatureItems currElm={currElm} key={currElm.id}/>
                        );
                    })
                }
                {
                    products.filter((allElm) => list == 'fastfood' && allElm.listName == 'fastfood').map((currElm) => {
                        return (
                            <FeatureItems currElm={currElm} key={currElm.id}/>
                        );
                    })
                }
                {
                    products.filter((allElm) => list == 'meat' && allElm.listName == 'meat').map((currElm) => {
                        return (
                            <FeatureItems currElm={currElm} key={currElm.id}/>
                        );
                    })
                }
                {
                    products.filter((allElm) => list == 'vegetables' && allElm.listName == 'vegetable').map((currElm) => {
                        return (
                            <FeatureItems currElm={currElm} key={currElm.id}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProduct