import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Auth/AuthProvider';
const Login = () => {

    const {googleLogin} = useContext(AuthContext)

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            const user = result.user;
            toast.success('Login With Google Success')
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>New Customer?? <Link to='/signup'>Sign Up</Link></p>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-accent">Log In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;