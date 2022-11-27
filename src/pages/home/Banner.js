import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center'>
            <div className='m-3'>
                <h1 className='text-3xl font-bold'>Best Place for Your next Smartphone</h1>
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum necessitatibus, officiis nihil quaerat amet autem cupiditate a expedita nesciunt vero reiciendis repellendus natus fuga placeat consequatur animi perferendis in quibusdam ad nobis commodi nemo nam eveniet. Quia, harum excepturi!
                </p>
            </div>
            <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/03/xiaomi-phones-generic-2.jpg" alt="" className='md:w-1/2 rounded-md' />
        </div>
    );
};

export default Banner;