import React from 'react'

const Chief = () => {
    return (
        <div className='chief lg:p-20 p-4 space-y-5'>
            <h2 className='text-center sm:text-5xl text-lg text-white font-bold italic'>RECOMMENDED BY OUR CHEF</h2>
            <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <div className='flex flex-col xl:flex-row justify-between gap-4'>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/single-food-1a.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h1 className='text-2xl font-bold'>Masala-Spiced Chickpeas</h1>
                        <p className='text-base font-semibold'>Sed ut perspiciatis unde omnis iste natus  error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/single-food-2a.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h1 className='text-2xl font-bold'>Kung Pao Pastrami</h1>
                        <p className='text-base font-semibold'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg'>
                    <img className='w-full' src="./images/single-food-31.jpg" alt="" />
                    <div className='xl:px-6 px-2 py-6'>
                        <h1 className='text-2xl font-bold'>Jalapeno-Mango Salsa</h1>
                        <p className='text-base font-semibold'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chief
