import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {

    const phones = useLoaderData()
    console.log(phones)

    return (
        <div>
            <h1>This is phones</h1>
        </div>
    );
};

export default Phones;