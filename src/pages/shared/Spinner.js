import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div>
                <h1 className='text-4xl'>Loading</h1>
                <div className="radial-progress text-primary animate-spin" style={{ "--value": 75 }}></div>
            </div>
        </div>
    );
};

export default Spinner;