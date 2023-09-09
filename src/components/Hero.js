import React from 'react'
import Image from "../assets/pexels-evie-shaffer-2395240.jpg"
const Hero = () => {
    return (
        <div className='bg-[#f8f9fb]'>
            <div className='md:container mx-auto '>
                <div className='md:flex py-2 items-center justify-center'>
                    <div className='md:w-1/2 md:p-8 p-6 mx-auto'>
                        <h1 className='uppercase text-xl text-[#222] md:text-2xl'>The Plant People</h1>
                        <h1 className='md:text-5xl text-4xl my-3 text-[#222] font-bold uppercase leading-tight tracking-wide'>Bringing Nature to<br /> your doorstep</h1>
                        <p className='md:text-2xl text-xl text-[#222] font-semibold'>Flowers and plants are a beautiful and essential part of our natural world. They come in a wide range of colors, shapes, and sizes, providing a stunning visual display.</p>
                        <button className='bg-[#222] text-xl rounded-3xl border text-white py-3 px-8 mt-4'>Discover</button>
                    </div>
                    <div className='md:w-1/2 mx-auto'>
                        <img src={Image} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero