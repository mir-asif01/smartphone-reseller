import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignBtn = (e) =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = form.role.value

        console.log(name,email,password,userRole)
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSignBtn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div>
                            <h1>Please Select Your Role. Otherwise It will be buyer by Default.</h1>
                            <select className='w-full text-center p-2 border rounded-lg font-semibold' name="role" defaultValue='buyer'>
                                <option className='font-semibold' value="seller">Seller</option>
                                <option className='font-semibold' value="buyer">Buyer</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='text-center'>New Customer?? <Link to='/login'>Login</Link></p>
                    </form>
                            <button className="btn btn-accent">Log In With Google</button>
                    {/* <button className='py-2 px-5 bg-blue-500 rounded-lg text-white font-semibold'>Log In With Google</button> */}
                    </div>
            </div>
        </div>
    );
};

export default SignUp;