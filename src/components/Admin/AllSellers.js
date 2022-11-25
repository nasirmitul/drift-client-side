import React from 'react';
import {useQuery} from '@tanstack/react-query'

const AllSellers = () => {
    const { data: allSellers = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allUser/seller');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='container'>
            {allSellers.length}
        </div>
    );
};

export default AllSellers;