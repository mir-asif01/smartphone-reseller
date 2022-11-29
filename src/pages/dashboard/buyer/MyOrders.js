import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    const [orders, setOrders] = useState([]);

    // fetch(`http://localhost:5000/orders?email=${userEmail}`)
    //     .then(res => res.json())
    //     .then(data => setOrders(data))

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userEmail])

    console.log(orders)

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
                                <td><button>Pay</button></td>
                            </tr>)
                        }
                        {/* <tr>
                            <th>1</th>
                            <td><img className='w-10' src="https://www.mobiledokan.co/wp-content/uploads/2021/05/Nokia-C30-White.jpg" alt="" /></td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;