import React from 'react';

const HotSale = () => {
    return (
        <div className='my-10 text-center'>
            <h1 className='text-rose-600 font-semibold text-3xl mb-2'>Hot Sale!</h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 53 }}></span>
                    </span>
                    sec
                </div>
            </div>
            <h1 className='text-rose-600 font-semibold text-3xl mt-2'>25% off on every product</h1>
            <p>Get Your favorite phone...</p>
        </div>
    );
};

export default HotSale;