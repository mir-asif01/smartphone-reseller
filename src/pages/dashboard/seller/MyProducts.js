import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../Auth/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://smartphone-reseller-server.vercel.app/products?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [userEmail])

    const handleProductDelete=(id)=>{

        const remainingProducts = products.filter(pd=>pd._id !== id)
        setProducts(remainingProducts)

        fetch(`https://smartphone-reseller-server.vercel.app/products/${id}`,{
            method : "DELETE"
        })
        .then((res)=>res.json())
        .then(()=>{
            toast.success('Product Delted Successfully')
        })

    }

    const handleAdvertise =(product)=>{

        const advertisement = {
            img : product.img,
            name : product.name,
            resale_price : product.resale_price,
            time : new Date().getTime()
        }

        fetch(`https://smartphone-reseller-server.vercel.app/advertisements`,{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(advertisement)
        }).then(res=>res.json())
        .then(()=>{
            navigate('/')
            toast.success('Advertise Added')
        })
    }

    return (
        <div className='p-3'>
            <h1 className='text-rose-800 font-semibold'>You have added {products.length} products</h1>
            <h1 className='text-right underline text-blue-400'><Link to='/dashboard'>Go To Dashboard</Link></h1>
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
                                <td><button onClick={()=>handleProductDelete(pd._id)} className='bg-rose-600 py-2 px-5 rounded-md text-white'>Delete</button></td>
                                <td><button onClick={()=>handleAdvertise(pd)} className='bg-cyan-500 py-2 px-5 rounded-md text-white'>Advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default MyProducts;