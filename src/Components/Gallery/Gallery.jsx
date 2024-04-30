import React from 'react'

const Gallery = () => {
    return (
        <div className='bg-black/90 p-8  space-y-6 '>
            <h1 className='text-5xl italic text-white font-bold text-center'>GALLERY</h1>
            <div className='flex xl:gap-8 gap-10 flex-col xl:flex-row  justify-between'>
                <div>
                    <img className='xl:w-fit w-full'  src="./images/Carne-Asada-Tacos.jpg" alt="" />
                </div>
                <div>
                    <img className='xl:w-fit w-full'  src="./images/Mango-Chile-Chutney.jpg" alt="" />
                </div>
                <div>
                    <img className='xl:w-fit w-full'  src="./images/A-Treat-For-Your-Taste-Buds.jpg" alt="" />
                </div>
                <div>
                    <img  className='xl:w-fit w-full' src="./images/Wasabi-Wednesday.jpg" alt="" />
                </div>
                <div>
                    <img className='xl:w-fit w-full'  src="./images/Amazing-Interior.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
