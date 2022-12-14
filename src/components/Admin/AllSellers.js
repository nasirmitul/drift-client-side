import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { MdDelete } from 'react-icons/md';
import { MdVerified } from 'react-icons/md';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';

const AllSellers = () => {

    const {user} = useContext(AuthContext);
    
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://drift-server.vercel.app/allUser/seller');
            const data = await res.json();
            return data;
        }
    })

    const handleVerify = (email, name) => {
        fetch(`https://drift-server.vercel.app/allUser/seller/${email}`, {
            method: 'PATCH',
            // headers: {
            //     authorization: localStorage.getItem('secret-token')
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${name} became verified seller`);
                }
            })
    }


    const handelSellerDelete = (email) => {
        const proceed = window.confirm("Are you sure you want to this seller?")
        if (proceed) {
            fetch(`https://drift-server.vercel.app/users/${email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        refetch();                        
                        toast.success("Seller Deleted successfully");
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
                            <p className='delete' onClick={() => handleVerify(seller.email, seller.name)}><MdVerified className='icon'></MdVerified></p>
                            <p className='delete' onClick={() => handelSellerDelete(seller.email)}><MdDelete className='icon'></MdDelete></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllSellers;