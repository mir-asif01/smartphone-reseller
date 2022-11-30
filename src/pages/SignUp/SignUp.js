import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Auth/AuthProvider';

const SignUp = () => {

    const navigate = useNavigate()
    const {googleLogin,createUser,upadateUserName} = useContext(AuthContext)

    const handleSignBtn = (e) =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = form.role.value

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            upadateUserName(name)
            .then(()=>{})
            .catch(err=>console.log(err))
            navigate('/')
            toast.success('User Created Successfully')
            form.reset()
        })
        .catch(err=>toast.error(`${err.message}`))

        const userForDb = {
            email,
            name,
            userRole
        }

        fetch('https://smartphone-reseller-server.vercel.app/users',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(userForDb)
        }).then(res=>res.json)
        .then(()=>{})

    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            const user = result.user;
            const userForDb = {
                email : user?.email,
                name : user?.displayName,
                userRole : 'buyer'
            }
            
            fetch('https://smartphone-reseller-server.vercel.app/users',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(userForDb)
            }).then(res=>res.json)
            .then(()=>{})
            navigate('/')
            toast.success('Login With Google Success')
        })
        .catch(err=>console.log(err))
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
                            <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
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
                            <button onClick={handleGoogleLogin} className="btn btn-accent">Log In With Google</button>
                    {/* <button className='py-2 px-5 bg-blue-500 rounded-lg text-white font-semibold'>Log In With Google</button> */}
                    </div>
            </div>
            <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default SignUp;