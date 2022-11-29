import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [userEmail])

    console.log(products)

    return (
        <div className='p-3'>
            <h1 className='text-rose-800 font-semibold'>You have added {products.length} products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((pd,i)=> <tr key={pd._id}>
                                <th>{i+1}</th>
                                <td><img src={pd.img} className='w-10' alt="" /></td>
                                <td>{pd.name}</td>
                                <td>{pd.resale_price}</td>
                                <td>unsold</td>
                                <td><button className='bg-rose-600 py-2 px-5 rounded-md text-white'>Delete</button></td>
                                <td><button className='bg-cyan-500 py-2 px-5 rounded-md text-white'>Advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;