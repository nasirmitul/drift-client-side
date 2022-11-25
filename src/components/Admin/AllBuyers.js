import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { MdDelete } from 'react-icons/md';

const AllBuyers = () => {
    const { data: allUser = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser/user');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='user-lists'>
            <div>
                <div className='table-heading'>
                    <strong className='name'>Name</strong>
                    <strong className='email'>Email</strong>
                    <strong className='delete'>Delete</strong>
                </div>
                {
                    allUser.map(user =>
                        <div className='table-data' key={user._id}>
                            <p className='name'>{user.name}</p>
                            <p className='email'>{user.email}</p>
                            <p className='delete'><MdDelete className='icon'></MdDelete></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllBuyers;