import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { MdDelete } from 'react-icons/md';
import { MdVerified } from 'react-icons/md';
import { toast } from 'react-toastify';

const AllSellers = () => {
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser/seller');
            const data = await res.json();
            return data;
        }
    })

    const handleVerify = (id, name) => {
        fetch(`http://localhost:5000/allUser/seller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${name} became verified seller`);
                }
            })
    }
    return (
        <div className='user-lists'>
            <div>
                <div className='table-heading'>
                    <strong className='name'>Name</strong>
                    <strong className='email'>Email</strong>
                    <strong className='delete'>Verify</strong>
                    <strong className='delete'>Delete</strong>
                </div>
                {
                    allSellers.map(seller =>
                        <div className='table-data' key={seller._id}>
                            <div className="user-name"></div>
                            <div className='name seller-name'>
                                <p >{seller.name}</p>{seller?.verify ? <MdVerified className='verified'></MdVerified> : ''}
                            </div>
                            <p className='email'>{seller.email}</p>
                            <p className='delete' onClick={() => handleVerify(seller._id, seller.name)}><MdVerified className='icon'></MdVerified></p>
                            <p className='delete'><MdDelete className='icon'></MdDelete></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllSellers;