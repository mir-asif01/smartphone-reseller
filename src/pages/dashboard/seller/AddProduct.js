import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target;

        const category = form.category.value;
        const name = form.name.value;
        const location = form.location.value;
        const price = form.price.value;
        const resale_price = form.resale_price.value;
        const img = form.img.value;
        const post_time = form.post_time.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const years_of_use = form.years_of_use.value;
        const condition = form.condition.value;

        const product = {
            category,
            name,
            location,
            price,
            resale_price,
            img,
            post_time,
            seller_name,
            seller_email,
            years_of_use,
            condition
        }

        fetch('https://smartphone-reseller-server.vercel.app/products',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(()=>{
            toast.success('New Product Added')
            navigate('/myproducts')
            form.reset()
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-xl text-rose-800 font-semibold text-center'>Add product</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="form-control">
                                <input type="text" name='seller_name' readOnly defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='seller_email' readOnly defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='category' required placeholder="category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='name' required placeholder="product name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='location' required placeholder="location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='price' required placeholder="original price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='resale_price' required placeholder="resale_price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='img' required placeholder="provide a image link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="date" name='post_time' required placeholder="post_time" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='years_of_use' required placeholder="years_of_use" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='phone' required placeholder="phone" className="input input-bordered" />
                            </div>
                            <div>
                                <h1>Please Select the condition of product.</h1>
                                <select required className='w-full text-center p-2 border rounded-lg font-semibold' name="condition">
                                    <option className='font-semibold' value="excllent">Excllent</option>
                                    <option className='font-semibold' value="good">Good</option>
                                    <option className='font-semibold' value="fair">Fair</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default AddProduct;