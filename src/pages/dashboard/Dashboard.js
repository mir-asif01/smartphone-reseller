import React from 'react';
import Navbar from '../shared/Navbar';
import MyOrders from './buyer/MyOrders';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>My Orders</h1>
            <MyOrders></MyOrders>
        </div>
    );
};

export default Dashboard;