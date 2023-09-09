import React from 'react'
import Image from "../assets/pexels-sohail-nachiti-807598.jpg";

const Blog = () => {
    return (
        <div className='container mx-auto mt-32'>
            <h1 className='text-center font-bold text-3xl mb-32'>Blogs</h1>
            <div className='md:flex justify-center md:space-y-0 space-y-8 gap-5'>
                <div className='px-4'>
                    <img src={Image} alt='blog-post' width={500} />
                    <h1 className='md:text-2xl text-xl my-2 font-bold'>Lorem ipsum dollor si</h1>
                    <p className='text-[#6c757d] my-3'>By <span className='underline pointer text-blue-500'>user123</span> / Nov 2, 2021</p>
                    <p className='text-[#6c757d] text-lg'>Vivamus vel sapien sed libero feugiat feugiat eget in arcu. Etiam vel elit vel mi vehicula auctor. Aenean ut justo dolor. Sed bibendum enim nec justo iaculis</p>
                    <hr className='my-3' />
                    <p className='underline font-bold my-3'>Continue Reading</p>
                </div>
                <div className='px-4'>

                    <img src={Image} alt='blog-post' width={500} />
                    <h1 className='md:text-2xl text-xl my-2 font-bold'>Lorem ipsum dollor si</h1>

                    <p className='text-[#6c757d] my-3'>By <span className='underline pointer text-blue-500'>user123</span> / Nov 2, 2021</p>
                    <p className='text-[#6c757d] text-lg'>Vivamus vel sapien sed libero feugiat feugiat eget in arcu. Etiam vel elit vel mi vehicula auctor. Aenean ut justo dolor. Sed bibendum enim nec justo iaculis</p>
                    <hr className='my-3' />
                    <p className='underline font-bold my-3'>Continue Reading</p>
                </div>
                <div className='px-4'>
                    <img src={Image} alt='blog-post' width={500} />
                    <h1 className='md:text-2xl text-xl my-2 font-bold'>Lorem ipsum dollor si</h1>

                    <p className='text-[#6c757d] my-3'>By <span className='underline pointer text-blue-500'>user123</span> / Nov 2, 2021</p>
                    <p className='text-[#6c757d] text-lg'>Vivamus vel sapien sed libero feugiat feugiat eget in arcu. Etiam vel elit vel mi vehicula auctor. Aenean ut justo dolor. Sed bibendum enim nec justo iaculis</p>
                    <hr className='my-3' />
                    <p className='underline font-bold my-3'>Continue Reading</p>
                </div>
            </div>
        </div>
    )
}

export default Blog