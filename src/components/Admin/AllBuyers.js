import React from 'react';
import {useQuery} from '@tanstack/react-query'

const AllBuyers = () => {
    const { data: allUser = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allUser/user');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='container'>
            {allUser.length}
        </div>
    );
};

export default AllBuyers;