import React from 'react'

const PlaceOrder = () => {
    const products = [
        { name: "Vegetable's Package", price: "$75.99" },
        { name: "Fresh Vegetable", price: "$151.99" },
        { name: "Organic Bananas", price: "$53.99" },
    ];
    
    return (
        <div className="w-1/3 px-8 py-6 flex flex-col items-start bg-gray-200 sm:w-full">
            <p className='w-full py-3 text-2xl font-extrabold border-b border-b-gray-300'>Your Order</p>

            <form action="" method='POST' className='w-full mt-5 space-y-5'>
                <table className='w-full flex flex-col'>
                    <thead className='w-full'>
                        <tr className='w-full flex items-center justify-between text-lg font-extrabold'>
                            <th>Products</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className='w-full flex flex-col space-y-4 mt-5 text-gray-700'>
                        {products.map((product, index) => (
                            <tr key={index} className='w-full flex items-center justify-between'>
                                <td>{product.name}</td>
                                <td className='text-lg font-extrabold'>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="w-full grid grid-cols-1 grid-rows-2 divide-y divide-gray-300 text-lg font-extrabold border-t border-t-gray-300 border-b border-b-gray-300">
                    <div className="flex items-center justify-between py-3">
                        <p>Subtotal</p>
                        <p>$750.99</p>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <p>Total</p>
                        <p className='text-red-500'>$750.99</p>
                    </div>
                </div>
                <div className="flex items-center justify-start space-x-8 mt-2">
                    <label className="cr-wrapper">
                        <input type="checkbox" />
                        <div className="cr-input"></div>
                        <span>Create an account?</span>
                    </label>
                </div>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="flex flex-col items-start justify-center space-y-3">
                    <label className="cr-wrapper">
                        <input type="checkbox" />
                        <div className="cr-input"></div>
                        <span>Check Payment</span>
                    </label>

                    <label className="cr-wrapper">
                        <input type="checkbox" />
                        <div className="cr-input"></div>
                        <span>Paypal</span>
                    </label>
                </div>
                <button type='submit' className='py-4 w-full bg-green-600 text-lg font-extrabold text-white'>PLACE ORDER</button>
            </form>
        </div>
    )
}

export default PlaceOrder