import React from 'react'

const Message = () => {
    return (
        <div className='w-full px-20 h-[430px] flex flex-col items-center mt-16 sm:px-5 sm:mt-10'>
            <p className='text-4xl font-bold sm:text-3xl'>Leave Message</p>

            <form action="" method='post' className='w-full flex flex-col items-center'>
                <div className="w-full flex space-x-10 items-center justify-center mt-14 sm:mt-8">
                    <input type="text" placeholder='Your name' className='border border-gray-300 rounded-md outline-none text-gray-600 w-1/2 px-4 py-3 '/>
                    <input type="text" placeholder='Your email' className='border border-gray-300 rounded-md outline-none text-gray-600 w-1/2 px-4 py-3 '/>
                </div>
                <textarea name="" id="" className='w-full h-44 mt-10 border border-gray-300 p-4 rounded-md outline-none text-gray-600' placeholder='Your message'></textarea>
                <button type="submit"className=' uppercase bg-green-600 px-10 py-4 font-bold text-white mt-10'>Send message</button>
            </form>
        </div>
    )
}

export default Message