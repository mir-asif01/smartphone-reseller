import React, { useContext } from 'react';
import { AuthContext } from '../../../../Auth/AuthProvider';

const BookNowModal = ({order,setOrder}) => {
    const {user} = useContext(AuthContext)
    const { _id, name, category, img, resale_price, seller_name, years_of_use, price, post_time,location } = order

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form =e.target;

        const email = user?.email;
        const userName = user?.displayName;
        const itemName = name;
        const itemPrice = resale_price;
        const location = form.location.value;
        const phone = form.phone.value

        const order = {
            email,
            userName,
            itemName,
            itemPrice,
            location,
            phone
        }

        fetch('http://localhost:5000/orders',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(order)
        }).then(res=>res.json())
        .then(()=>{
            setOrder(null)
        })

        console.log(email,userName,itemName,itemPrice,location,phone)
    }

    return (
        <div>
            <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">name</h3>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Name" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered w-full my-1" />
                        <input type="email" placeholder="Email Address" defaultValue={user?.email} readOnly className="input input-bordered w-full my-1" />
                        <input type="text" placeholder="Item name" required name='itemName' readOnly defaultValue={name} className="input input-bordered w-full my-1" />
                        <input type="text" placeholder="Item Price" required name='itemPrice' readOnly defaultValue={resale_price} className="input input-bordered w-full my-1" />
                        <input type="text" placeholder="Phone Number" required name='phone' className="input input-bordered w-full my-1" />
                        <input type="text" placeholder="Meeting Location" required name='location' className="input input-bordered w-full my-1" />
                        <br />
                        <button type='submit' className='bg-slate-700 py-2 px-5 rounded-md text-white w-full mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
        </div>
    );
};

export default BookNowModal;