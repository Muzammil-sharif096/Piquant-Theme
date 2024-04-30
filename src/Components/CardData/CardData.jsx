import React from 'react';

const CardData = () => {
    return (
        <div className='lg:p-20 p-4 space-y-5'>
            <h2 className='text-center sm:text-5xl text-lg font-bold italic'>FAST FOOD</h2>
            <div className='flex flex-col xl:flex-row justify-between gap-4'>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/home-1-image-1.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h1 className='text-2xl font-bold'>THE REAL BURGERS</h1>
                        <p className='text-base font-semibold'>Sed ut perspiciatis unde omnis iste natus  error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/home-1-image-2.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h1 className='text-2xl font-bold'>FOR EVERY TASTE</h1>
                        <p className='text-base font-semibold'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/home-1-image-3.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h1 className='text-2xl font-bold'>THE REAL BURGERS</h1>
                        <p className='text-base font-semibold'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardData;
