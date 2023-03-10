import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Auth/AuthProvider';
import Spinner from '../shared/Spinner';
const Login = () => {

    const navigate = useNavigate()
    const {googleLogin,loginWithWEmailPass,loader} = useContext(AuthContext)

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            const user = result.user;
            navigate('/')
            toast.success('Login With Google Success')
        })
        .catch(err=>{
            toast.error(`${err.message}`)
            console.log(err)
        })
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        loginWithWEmailPass(email,password)
        .then(()=> {
            navigate('/')
            toast.success('Login Sccessfull')
            form.reset()
        })
        .catch(err=>toast.error(`${err.message}`))

    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>New Customer?? <Link to='/signup'>Sign Up</Link></p>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-accent">Log In With Google</button>
                </div>
            </div>
            <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default Login;