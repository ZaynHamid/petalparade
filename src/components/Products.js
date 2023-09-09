import React from 'react'
import Image1 from "../assets/pexels-andreea-ch-1166644-removebg-preview.png";
import Image2 from "../assets/pexels-tom-swinnen-1309769-removebg-preview.png";

import { StarIcon } from "../icons";
const Products = () => {
    return (
        <div className='container mx-auto mt-32'>
            <h1 className='text-center text-4xl font-bold underline'>Products</h1>
            <div className='md:flex md:space-y-0 space-y-16 justify-center mt-32'>
                <div className='md:w-1/3 mx-auto'>
                    <div className="w-1/2 mx-auto">
                        <img src={Image2} alt='flower pot' />
                    </div>
                    <div className='flex items-center flex-col justify-center'>
                        <div className='flex mt-4'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>

                        <h1 className='my-4 text-2xl'>fermentum dui</h1>
                        <p className='md:text-2xl text-xl font-bold'>$20 <sup className='line-through'>$12</sup></p>
                        <button className='bg-[#222] md:text-xl rounded-3xl border text-white py-2 md:px-6 px-4 mt-4'>Buy now</button>

                    </div>

                </div>
                <div className='md:w-1/3 mx-auto'>
                    <div className="w-1/2 mx-auto">
                        <img src={Image1} alt='flower pot' />
                    </div>
                    <div className='flex items-center flex-col justify-center'>
                        <div className='flex'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>

                        <h1 className='my-4 text-2xl'>fermentum dui</h1>
                        <p className='md:text-2xl text-xl font-bold'>$20 <sup className='line-through'>$12</sup></p>
                        <button className='bg-[#222] md:text-xl rounded-3xl border text-white py-2 md:px-6 px-4 mt-4'>Buy now</button>

                    </div>

                </div><div className='md:w-1/3 mx-auto'>
                    <div className="w-1/2 mx-auto">
                        <img src={Image2} alt='flower pot' />
                    </div>
                    <div className='flex items-center flex-col justify-center'>
                        <div className='flex mt-4'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>

                        <h1 className='my-4 text-2xl'>fermentum dui</h1>
                        <p className='md:text-2xl text-xl font-bold'>$20 <sup className='line-through'>$12</sup></p>
                        <button className='bg-[#222] md:text-xl rounded-3xl border text-white py-2 md:px-6 px-4 mt-4'>Buy now</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products