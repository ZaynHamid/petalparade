import React, { useState } from 'react';
import arrowDown from "../assets/svgs/down-arrow.png"
import cart from "../assets/svgs/shopping-bag.png"
import user from "../assets/svgs/user.png"
import fav from "../assets/svgs/heart.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setDropdown] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdown = () => {
        setDropdown(!showDropdown)
    }

    return (
        <nav className="border-b border p-4 shadow-xl">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-black text-2xl font-bold">Petal Parade</div>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-[#1d1d1f] focus:outline-none focus:text-[#1d1d1f]"
                        >
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } lg:flex lg:space-x-4 lg:items-center w-full lg:w-auto`}
                    >
                        <ul className="lg:flex lg:space-x-4 md:my-0 my-6 font-semibold lg:items-center">
                            <li className="text-[#1d1d1f] hover:text-gray-300 transition duration-300 ease-in-out">
                                <a href="#">Home</a>
                            </li>
                            <li className="text-[#1d1d1f] flex relative items-center space-x-1 transition duration-300 ease-in-out">
                                <a href="#" onClick={handleDropdown}>Shop</a>
                                <img src={arrowDown} width={14} />
                                <div className={` border absolute top-3 mt-4 w-36 bg-white ${showDropdown ? "block" : "hidden"}`}>
                                    <div className='border-b py-2 px-3'>Item 1</div>
                                    <div className='border-b py-2 px-3'>Item 2</div>
                                    <div className='border-b py-2 px-3'>Item 3</div>
                                </div>
                            </li>
                            <li className="text-[#1d1d1f] hover:text-gray-300 transition duration-300 ease-in-out">
                                <a href="#">Blog</a>
                            </li>
                            <li className="text-[#1d1d1f] hover:text-gray-300 transition duration-300 ease-in-out">
                                <a href="#">About</a>
                            </li>
                            <li className="text-[#1d1d1f] hover:text-gray-300 transition duration-300 ease-in-out">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } lg:flex lg:space-x-4 lg:items-center font-semibold w-full lg:w-auto`}
                    >
                        <div className="flex space-x-4 lg:items-center">
                            <img src={cart} width={18} alt='icon' />
                            <img src={fav} width={18} alt='icon' />
                            <img src={user} width={18} alt='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
