import React from 'react'

const News = () => {
    return (
        <div className='lg:p-20 p-4 space-y-5'>
            <h2 className='text-center sm:text-5xl text-lg  font-bold italic'>LATEST NEWS</h2>
            <p className='text-center font-semibold text-gray-400'>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br /> aute irure dolor in reprehenderit in voluptate.</p>
            <div className='flex flex-col xl:flex-row justify-between gap-4'>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/b-saffron-and-nougat-ice-cream.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h3 className='text-base tracking-wider font-normal'>NOV 04, 2015</h3>
                        <h1 className='text-2xl font-bold'>NOUGAT ICE CREAM</h1>
                        <p className='text-base font-semibold'>Interdum et malesuada fames ac ante ipsum  primis in faucibus. Quisque at tellus felis. Sed fringilla, tellus non congue porttitor, dui eros fauci...</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/b-brazilian-burger-with-egg.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h3 className='text-base tracking-wider font-normal'>NOV 04, 2015</h3>
                        <h1 className='text-2xl font-bold'>BRAZILIAN BURGER</h1>
                        <p className='text-base font-semibold'>Interdum et malesuada fames ac ante ipsum  primis in faucibus. Quisque at tellus felis. Sed fringilla, tellus non congue porttitor, dui eros fauci...</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/home-1-blog-31.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h3 className='text-base tracking-wider font-normal'>NOV 04, 2015</h3>
                        <h1 className='text-2xl font-bold'>GRILLED DUCK BREASTS</h1>
                        <p className='text-base font-semibold'>Interdum et malesuada fames ac ante ipsum  primis in faucibus. Quisque at tellus felis. Sed fringilla, tellus non congue porttitor, dui eros fauci...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
