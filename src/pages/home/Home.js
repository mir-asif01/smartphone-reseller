import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import HotSale from './HotSale';
import Categories from './Product/Categories';

const home = () => {
    return (
        <div className='p-3 md:p-5'>
            <Categories></Categories>
            <Banner></Banner>
            <Advertise></Advertise>
            <HotSale></HotSale>
        </div>
    );
};

export default home;