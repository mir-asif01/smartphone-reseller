import React from 'react';

const PhoneCard = ({ phone , setOrder}) => {

    const { _id, name, category, img, resale_price, seller_name, years_of_use, price, post_time,location } = phone

    return (
        <div className="flex flex-col justify-center items-center md:flex-row bg-base-100 border rounded-md p-2">
            <figure className='w-full md:w-2/3'><img src={img} alt="Album" /></figure>
            <div className="w-full md:w-1/3">
                <div>
                    <h1 className='font-semibold'>${resale_price}</h1>
                    <h1 className='font-semibold'>{name}</h1>
                </div>
                <div>
                    <p>Original Price : ${price}</p>
                    <p>Seller : {seller_name}<span className='text-blue-700 font-bold'>✔</span></p>
                    <p>Used for {years_of_use} years</p>
                    <p>Location : {location}</p>
                </div>
                <p>Posted On {post_time}</p>
                <div className='text-center mt-4'>
                <label onClick={()=>setOrder(phone)} htmlFor="my-modal-3" className="py-2 px-5 cursor-pointer bg-gradient-to-r from bg-cyan-400 to-cyan-600 rounded-md text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;