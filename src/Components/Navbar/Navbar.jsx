import React, { useState } from 'react';
import { FaBars, FaSearch, FaShopify, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const liData = [
        { Li: 'Home' },
        { Li: 'About' },
        { Li: 'Services' },
        { Li: 'Blog' },
        { Li: 'Contact' },
    ];

    return (
        <div className='nav'>
            <nav className='flex justify-between text-white shadow-md items-center lg:px-20 px-4 lg:py-6 py-2'>
                <img className='w-32' src='./images/logo-light (3).png' alt='' />
                <ul className='md:flex hidden items-center gap-8 cursor-pointer font-bold tracking-wider'>
                    {liData.map((ele, index) => (
                        <li key={index} className='hover:text-[#1262AF]'>
                            {ele.Li}
                        </li>
                    ))}
                    <FaSearch />
                    <FaShopify />
                </ul>
                <button onClick={() => setShowNavbar(true)} className='md:hidden block'>
                    <FaBars className='text-2xl' />
                </button>
                {showNavbar && (
                    <div className='lg:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50'>
                        <div className='flex justify-end p-4'>
                            <button className='text-white text-2xl cursor-pointer' onClick={() => setShowNavbar(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className='mt-4 p-2'>
                            <img className='w-32' src='./images/logo-light (3).png' alt='' />
                            <hr className='border-[#63B597] p-2 mt-2' />
                            <ul className='text-white flex flex-col cursor-pointer items-start px-4 text-base font-semibold text-center'>
                                {liData.map((ele, index) => (
                                    <React.Fragment key={index}>
                                        <li className='py-3 tracking-wider'>{ele.Li}</li>
                                        <hr className='border w-full' />
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
            <div className='flex flex-col lg:flex-row justify-between lg:p-20 p-4 items-center'>
                <div className='text-white space-y-6'>
                    <img src='./images/home-1-slide-1-graphic-1.png' alt='' />
                    <h1 className='font-bold lg:text-6xl text-base'>KNOW YOUR FOOD</h1>
                    <p className='lg:text-xl text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quod, est!</p>
                    <button className='lg:px-14 px-8 rounded-md tracking-wider font-bold lg:text-lg text-sm py-2 bg-yellow-400'>Purchase</button>
                </div>
                <div>
                    <img className='lg:w-fit w-full' src='./images/home-1-slide-1-graphic-2.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
