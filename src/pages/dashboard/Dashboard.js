import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import MyOrders from './buyer/MyOrders';

const Dashboard = () => {

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='my-3 text-4xl text-center fonr-semibold'>My Orders</h1>
            <MyOrders></MyOrders>
        </div>
    );
};

export default Dashboard;