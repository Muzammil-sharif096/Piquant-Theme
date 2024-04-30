import React, { useState } from 'react';
import { SearchData } from '../../Data';

const SearchItem = () => {
    const [data, setData] = useState('');
    const [showData, setShowData] = useState(SearchData);

    const handleSearchItem = (e) => {
        const value = e.target.value.toLowerCase();
        setData(value);

        const filteredData = SearchData.filter((item) =>
            item.name.toLowerCase().includes(value)
        );
        setShowData(filteredData);
    };
    console.log(data, "test");
    console.log(showData, "show")

    return (
        <div className='p-4 md:p-20 space-y-5'>
            <h1 className='text-5xl font-bold italic text-center'>Search Items</h1>
            <input
                onChange={handleSearchItem}
                value={data}
                className='border-2 w-full p-2 border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                type='text'
                placeholder='Search Item :'
            />
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4'>
                {showData.map((ele, index) => (
                    <div key={index} className='border-2 p-2 rounded-md'>
                        <img
                            className='w-full h-48 md:h-96 object-cover mb-2'
                            src={ele.image}
                            alt=''
                        />
                        <h1 className='text-xl font-bold'>{ele.name}</h1>
                        <p className='text-base'>{ele.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchItem;
