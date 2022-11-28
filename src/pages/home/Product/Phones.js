import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from './bookNowModal/BookNowModal';
import PhoneCard from './PhoneCard';

const Phones = () => {

    const phones = useLoaderData()
    const [order,setOrder] = useState({})

    return (
        <div className='p-3 mx-auto md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                phones.map(phone=><PhoneCard key={phone._id} phone={phone} setOrder={setOrder}></PhoneCard>)
            }
            {
                <BookNowModal order={order}></BookNowModal>
            }
        </div>
    );
};

export default Phones;