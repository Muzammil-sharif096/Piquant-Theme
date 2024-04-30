import React from 'react';

const Happy = () => {
    return (
        <div className='happy text-white text-center p-8 md:p-20 space-y-6 md:space-y-10'>
            <h1 className='text-3xl md:text-5xl font-bold'>HAPPY CUSTOMERS</h1>
            <h2 className='text-xl md:text-2xl'>------ Delicious Food ------</h2>
            <p className='text-sm md:text-base'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores <br /> et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est <br /> laborum et dolorum fuga. Et harum quidem
                rerum.
            </p>
            <h6 className='text-sm md:text-lg'>Emma Fernandez</h6>
        </div>
    );
};

export default Happy;
