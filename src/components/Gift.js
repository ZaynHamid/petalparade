import React from 'react'
import Image from "../assets/pexels-min-an-793012.jpg"
const Gift = () => {
    return (
        <div className='container mx-auto mt-32'>
            <div className='md:flex gap-4'>
                <div className='md:w-1/2 mx-auto py-4 p-4 md:p-0'>
                    <h1 className='text-2xl text-[#222] mb-4 font-bold uppercase'>The Perfect Gift for your loved ones!</h1>
                    <p className='mb-4 text-[#6c757c] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi eget efficitur vehicula,
                        felis nisi fringilla erat, non tristique lectus felis non justo. Nullam fringilla ipsum at libero faucibus,
                        id auctor lectus lacinia. Vivamus vel sapien sed libero feugiat feugiat eget in arcu. Etiam vel elit vel mi
                        vehicula auctor. Aenean ut justo dolor. Sed bibendum enim nec justo iaculis, vel fringilla lorem mattis.
                        Vestibulum eget feugiat odio. Quisque consectetur hendrerit quam, eu fermentum dui sagittis non.
                    </p>
                    <button className='border-2 mb-4 border-black px-6 py-3 text-[#222]'>Read More</button>
                </div>
                <div className='md:w-1/2 mx-auto p-4'>
                    <img src={Image} alt='flowers pots' />
                </div>
            </div>
        </div>
    )
}

export default Gift