import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const MyWishList = () => {

    const { user, loading } = useContext(AuthContext);
    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(`https://drift-server.vercel.app/wishlist/${user.email}`, {
            });
            const data = await res.json();
            return data;
        }
    })

    console.log('wish', wishlist);

    return (
        <div className='my-orders'>
            <div className="orders">
                <div className="order-heading">
                    <div className="image-name">
                        <strong className='image'>Image</strong>
                        <strong className='name'>Name</strong>
                    </div>
                    <div className="price-pay">
                        <strong className='price'>Price</strong>
                        <strong className='pay'>Action</strong>
                    </div>
                </div>

                {
                    loading ? <Spinner></Spinner> :
                        wishlist.map(wish =>
                            <div className="order-body" key={wish._id}>
                                <div className="image-name">
                                    <div className="image">
                                        <img className='product-image' src={wish?.wishlist?.product_image} alt="" />
                                    </div>

                                    <p className='product-name'>{wish?.wishlist?.product_name}</p>
                                </div>
                                <div className="price-pay">
                                    <p className='price'>{wish?.wishlist?.resale_price}</p>

                                    {
                                        wish?.wishlist?.paid === true ? <p className='paid'>Paid</p> : <button disabled><Link to={`/dashboard/myOrders/payment/${wish._id}`}><p className='pay'>Pay</p></Link></button>
                                    }
                                </div>
                            </div>
                        ).reverse()
                }
            </div>
        </div>
    );
};

export default MyWishList;