import React from 'react'
import Image from "../assets/pexels-scott-webb-311458.jpg"
const Start = () => {
    return (
        <div style={{
            background: `url(${Image}) center bottom / contain no-repeat`,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '29px'
        }} className='mt-32'>
            <div className='flex flex-col items-center mt-32 gap-8'>
                <h1 className='text-[#222] text-center md:text-3xl text-2xl font-semibold'>Your Ultimate Guide to Plant & Gardening</h1>
                <p className='md:w-1/2 text-xl text-center text-[#6c757d]'>Your ultimate online destination for everything related to plants and gardening. Petal Parade is dedicated to providing you with reliable information, expert advice, and inspiration to help you create and maintain a beautiful and thhriving garden.</p>
                <button className='bg-[#222] md:text-xl rounded-3xl border text-white py-2 px-6 mt-4'>Get Started</button>

            </div>
        </div>


    )
}

export default Start