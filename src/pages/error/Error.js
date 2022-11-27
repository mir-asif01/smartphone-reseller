import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='min-h-screen text-center'>
            <img src="https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/error-404.jpg" className='w-3/4 mx-auto' alt="" />
            <div className='mt-5'>
                <Link className='py-2 px-5 rounded-sm text-white font-semibold bg-blue-600 mt-4' to='/'>Go To Home</Link>
            </div>
        </div>
    );
};

export default Error;