import React from 'react'

const Newsletter = () => {
    return (
        <div className='md:w-1/2 mx-auto mt-32'>
            <div className='flex flex-col gap-4 items-center'>
                <div>
                    <h2 className='md:text-3xl text-center text-2xl font-bold'>Don't want to miss out on sales? Subscribe our Newsletter!</h2>
                </div>
                <div className='border-2 my-4 border-gray-600 md:w-1/2 w-2/3 flex items-center md:py-3 rounded-lg relative'>
                    <input type="text" className='w-full md:text-xl text-lg text-[#1d1d1f] bg-transparent py-2 px-4 outline-none font-semibold placeholder:text-[#1d1d1f]' placeholder='Search' />
                    <button className='bg-[#1d1d1f] rounded-tr-lg rounded-br-lg absolute top-0 right-0 bottom-0 md:px-8 px-6 text-lg text-white'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter