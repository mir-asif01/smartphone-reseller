import React, { useEffect, useState } from 'react';

const Advertise = () => {

    const [advertisements, setAdvertise] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertisements')
            .then(res => res.json())
            .then(data => setAdvertise(data))
    }, [])

    return (
        <div>
            <h1 className='text-center'>Ads.....</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center'>
                {
                    advertisements.length > 0 && <>
                        {
                            advertisements.map(ad => <div key={ad._id}>
                                <img className='w-full' src={ad.img} alt="" />
                                <div className='flex items-center justify-between mx-14'>
                                    <button className='py-2 px-5 text-center bg-green-500 text-white rounded-md'>Buy This</button>
                                    <p className='text-4xl'>Price ${ad.resale_price}</p>
                                </div>
                            </div>)
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default Advertise;