import React from 'react'
import latestItems from '../../api/products.json';

const ProductSlider = () => {
    return (
        <div className="h-full w-full flex flex-col space-y-5">
            {
                latestItems.slice(0, 3).map((allElm) => {
                    return (
                        <div className="h-32 bg-gray-200 flex items-start justify-start " key={allElm.id}>
                            <img src={allElm.img} alt="" className='h-full' />
                            <div className="flex flex-col items-start justify-start p-4">
                                <p className='text-lg'>{allElm.name}</p>
                                <p className='font-black text-lg'>${allElm.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductSlider