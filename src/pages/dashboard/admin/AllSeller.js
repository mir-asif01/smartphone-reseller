import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../Auth/AuthProvider';
import Navbar from '../../shared/Navbar';
import Spinner from '../../shared/Spinner';

const AllSeller = () => {
    const {loader,setLoader} = useContext(AuthContext)

    const [allUser, setAllUser] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://smartphone-reseller-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [{}])

    const seller = allUser.filter(us => us?.userRole !== 'buyer')
    setLoader(false)
    const handleDelete = (id) => {
        fetch(`https://smartphone-reseller-server.vercel.app/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => {
                navigate('/allbuyers')
                toast.success('Seller Deleted');
            })
    }

    if(loader){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-between items-center mx-3 md:mx-28'>
                <h1 className='text-3xl mb-3 font-semibold text-rose-500'>All Sellers</h1>
                <Link className='py-2 px-5 bg-green-500 rounded-md text-white mb-3' to='/allbuyers'>All Buyers</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller.map((seller, i) => <tr key={seller._id}>
                                {
                                    seller.userRole === 'admin' ? '' : <>
                                        <th>{i + 1}</th>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.userRole}</td>
                                        <td><button onClick={() => handleDelete(seller._id)} className='py-2 px-5 bg-rose-600 rounded-md text-white'>Delete</button></td>
                                    </>
                                }

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default AllSeller;