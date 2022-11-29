import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import Navbar from '../shared/Navbar';
import MyOrders from './buyer/MyOrders';
import AddProduct from './seller/AddProduct';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;

    const [userFromDb, setUserFromDb] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setUserFromDb(data))
    }, [])

    // console.log(userFromDb)

    if (userFromDb?.userRole === 'buyer') {
        return <div>
            <Navbar></Navbar>
            <h1 className='my-3 text-4xl text-center fonr-semibold'>My Orders</h1>
            <MyOrders></MyOrders>
            
        </div>
    }
    if (userFromDb?.userRole === 'seller') {
        return <div>
            <Navbar></Navbar>
            <h1 className='my-3 text-4xl text-center fonr-semibold'>Seller Dashboard</h1>
            <div className='text-center fonr-semibold'>
                <Link className='mx-2 text-2xl' to='/myproducts'>My Products</Link>
                <Link className='mx-2 text-2xl' to='/addproduct'>Add Product</Link>
            </div>
            <Outlet></Outlet>
        </div>
    }
    if(userFromDb?.userRole === 'admin'){
        return <div>
            <Navbar></Navbar>
            <h1>Admin Dashboard</h1>
            <div>
                <Link to='/allbuyers'>All Buyers</Link>
                <Link to='/allsellers'>All Sellers</Link>
            </div>
            <Outlet></Outlet>
        </div>
    }

};

export default Dashboard;