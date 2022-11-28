import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';

const MyOrders = () => {

    const {user} = useContext(AuthContext)
    const userEmail = user?.email;
    const[orders,setOrders] = useState([]);

    fetch(`http://localhost:5000/orders?email=${userEmail}`)
    .then(res=>res.json())
    .then(data=>setOrders(data))

    return (
        <div>
            <h1>I have {orders.length} Orders </h1>
        </div>
    );
};

export default MyOrders;