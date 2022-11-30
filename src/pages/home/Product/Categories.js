import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {data : categories =[]} = useQuery({
        queryKey : ['categories'],
        queryFn : ()=> fetch(`https://smartphone-reseller-server.vercel.app/categories`)
        .then(res=>res.json())
    })
    const categoriesSection = <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>{categories.map((c,i) => <Link to={`phones/${c}`} className='mx-3 border border-gray-200 rounded-md py-3 px-5 text-center' key={i}>{c}</Link>)}</div>
    return (
        <div className='my-7 mx-auto'>
            {categoriesSection}
        </div>
    );
};

export default Categories;