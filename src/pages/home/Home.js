import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';

const home = () => {
    return (
        <div className='p-3 md:p-5'>
            <Advertise></Advertise>
            
            <Banner></Banner>
        </div>
    );
};

export default home;