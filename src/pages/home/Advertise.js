import React, { useState } from 'react';

const Advertise = () => {

    const [advertisements,setAdvertise] = useState([])

    return (
        <div>
            {
                advertisements.length > 0 && <>
                    <h1>This is advertise section</h1>
                </>
            }
        </div>
    );
};

export default Advertise;