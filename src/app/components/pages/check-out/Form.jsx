import React from 'react'

const Form = () => {
    return (
        <form action="" method='POST' className='w-2/3 space-y-5'>
            <div className="w-full flex items-center justify-between space-x-10">
                <div className="w-1/2 flex flex-col items-start">
                    <p className='text-lg py-2'>Fist Name<span className='text-red-500'>*</span></p>
                    <input type="text" name='firstname' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
                </div>
                <div className="w-1/2 flex flex-col items-start">
                    <p className='text-lg py-2'>Last Name<span className='text-red-500'>*</span></p>
                    <input type="text" name='lastname' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
                </div>
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Country<span className='text-red-500'>*</span></p>
                <input type="text" name='country' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Address<span className='text-red-500'>*</span></p>
                <input type="text" name='address1' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
                <input type="text" name='address2' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500 mt-4' />
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Town/City<span className='text-red-500'>*</span></p>
                <input type="text" name='city' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Country/State<span className='text-red-500'>*</span></p>
                <input type="text" name='state' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Postcode / ZIP<span className='text-red-500'>*</span></p>
                <input type="number" name='postcode' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
            </div>
            <div className="w-full flex items-center justify-between space-x-10">
                <div className="w-1/2 flex flex-col items-start">
                    <p className='text-lg py-2'>Phone<span className='text-red-500'>*</span></p>
                    <input type="number" name='phone' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
                </div>
                <div className="w-1/2 flex flex-col items-start">
                    <p className='text-lg py-2'>Email<span className='text-red-500'>*</span></p>
                    <input type="email" name='email' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
                </div>
            </div>
            <div className="flex flex-col items-start space-y-6">
                <div className="flex items-center justify-start space-x-8">
                    <label className="cr-wrapper">
                        <input type="checkbox" />
                        <div className="cr-input"></div>
                        <span>Create an account?</span>
                    </label>
                </div>
                <p className='text-gray-500'>Create an account by entering the information below. If you are a returning customer please login at the top of the page</p>
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Email<span className='text-red-500'>*</span></p>
                <input type="email" name='email' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
            </div>
            <div className="flex items-center justify-start space-x-8">
                <label className="cr-wrapper">
                    <input type="checkbox" />
                    <div className="cr-input"></div>
                    <span>Ship to a different address?</span>
                </label>
            </div>
            <div className="w-full flex flex-col items-start">
                <p className='text-lg py-2'>Order notes<span className='text-red-500'>*</span></p>
                <input type="number" name='postcode' className='h-12 px-4 w-full border border-gray-300 outline-none rounded-md text-gray-500' />
            </div>
        </form>
    )
}

export default Form