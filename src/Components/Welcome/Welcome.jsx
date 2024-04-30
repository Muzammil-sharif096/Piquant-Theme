import React from 'react';

const Welcome = () => {
    return (
        <div className='flex bg-gray-100 flex-col lg:flex-row items-center justify-center lg:gap-12 p-8 lg:p-20'>
            <div className='text-center lg:text-left lg:w-1/2 space-y-3'>
                <h1 className='text-4xl font-bold'>WELCOME TO PIQUANT</h1>
                <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className='px-8 py-2 bg-yellow-400 font-bold tracking-wider'>Read More</button>
            </div>
            <div className='mt-6 lg:mt-0 lg:w-1/2'>
                <img className='w-full' src="./images/home-1-image-4.jpg" alt="" />
            </div>
        </div>
    );
};

export default Welcome;
