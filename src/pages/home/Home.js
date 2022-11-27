import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';

const home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <Advertise></Advertise>
        </div>
    );
};

export default home;