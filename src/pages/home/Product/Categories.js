import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {data : categories =[]} = useQuery({
        queryKey : ['categories'],
        queryFn : ()=> fetch(`http://localhost:5000/categories`)
        .then(res=>res.json())
    })
    const categoriesSection = <div>{categories.map((c,i) => <Link to={`phones/${c}`} className='mx-3 border border-gray-200 rounded-md py-3 px-5' key={i}>{c}</Link>)}</div>
    return (
        <div className='my-7 mx-auto'>
            {categoriesSection}
        </div>
    );
};

export default Categories;