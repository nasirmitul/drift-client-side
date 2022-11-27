import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const AllBuyers = () => {
    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser/user');
            const data = await res.json();
            return data;
        }
    })


    const handleUserDelete = (email) => {
        const proceed = window.confirm("Are you sure you want to this user?")
        if (proceed) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        refetch();                        
                        toast.success("User Deleted successfully");
                    }
                })
        }
    }
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
                            <p className='delete' onClick={() => handleUserDelete(user.email)}><MdDelete className='icon'></MdDelete></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllBuyers;