import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userEmail])

    return (
        <div className='p-5'>
            <h1 className='mb-2 font-semibold text-rose-800'>You have {orders.length} Orders pending. </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,i) => <tr key={order._id}>
                                <th>{i+1}</th>
                                <td><img className='w-10' src={order.img} alt="" /></td>
                                <td>{order.itemName}</td>
                                <td>${order.itemPrice}</td>
                                <td><button className='py-2 px-5 bg-green-600 rounded-md text-white font-semibold'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;