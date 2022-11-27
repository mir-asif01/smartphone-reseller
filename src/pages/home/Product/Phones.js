import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const Phones = () => {

    const phones = useLoaderData()
    console.log(phones)

    return (
        <div className='p-3 mx-auto md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                phones.map(phone=><PhoneCard key={phone._id} phone={phone}></PhoneCard>)
            }
        </div>
    );
};

export default Phones;