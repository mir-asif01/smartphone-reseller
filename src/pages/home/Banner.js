import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center'>
            <div className='m-3'>
                <h1 className='text-3xl font-bold'>Best Place for Your next Smartphone</h1>
                <p className='text-xl'>
                There’s no one smartphone that is best for everyone, but we’ve spent hundreds of hours testing scores of phones so that you can find the best one for you. The phone you buy will depend on your budget, your wireless carrier, and which of the major smartphone platforms—Apple’s iOS or Google’s Android—you’re already invested in.
                </p>
            </div>
            <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/03/xiaomi-phones-generic-2.jpg" alt="" className='md:w-1/2 rounded-md' />
        </div>
    );
};

export default Banner;