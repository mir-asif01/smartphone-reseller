import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../Auth/AuthProvider';
import Spinner from '../../shared/Spinner';

const AllBuyers = () => {

    const {deleteUserFromFB,loader,setLoader} = useContext(AuthContext)
    const [allUser, setAllUser] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://smartphone-reseller-server.vercel.app/users`)
        .then(res=>res.json())
        .then(data=>setAllUser(data))
    },[{}])
    
    const buyer = allUser.filter(us => us?.userRole !== 'seller')
    setLoader(false)
    // console.log(allUser)

    const handleDelete = (id) =>{
        fetch(`https://smartphone-reseller-server.vercel.app/users/${id}`,{
            method : "DELETE"
        })
        .then(res=>res.json())
        .then(()=>{
            navigate('/allbuyers')
            toast.success('Seller Deleted');
        })

        deleteUserFromFB()
        .then(()=>{

        })
        .catch(err=>toast.error(`${err.message}`))
    }

    if(loader){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-between items-center mx-3 md:mx-28'>
            <h1 className='text-3xl mb-3 font-semibold text-rose-500'>All Buyers</h1>
            <Link className='py-2 px-5 bg-green-500 rounded-md text-white mb-3' to='/allsellers'>All Sellers</Link>
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
                           buyer.map((buyer, i) => <tr key={buyer._id}>
                                {buyer.userRole === 'admin' ? '' : <>
                                    <th>{i+1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.userRole === 'admin' ? '' : buyer.userRole}</td>
                                    <td><button onClick={()=>handleDelete(buyer._id)} className='py-2 px-5 bg-rose-600 rounded-md text-white'>Delete</button></td>
                                </>}
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default AllBuyers;