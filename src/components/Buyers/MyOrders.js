import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: myOrders = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders/${user.email}`, {
                headers: {
                    authorization: localStorage.getItem('secret-token')
                }
            });
            const data = await res.json();
            return data;
        }
    })

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
                        myOrders.map(order =>
                            <div className="order-body" key={order._id}>
                                <div className="image-name">
                                    <div className="image">
                                        <img className='product-image' src={order.product_image} alt="" />
                                    </div>

                                    <p className='product-name'>{order.product_name}</p>
                                </div>
                                <div className="price-pay">
                                    <p className='price'>{order.product_price}</p>

                                    <Link to={`/dashboard/myOrders/payment/${order._id}`}><p className='pay'>Pay</p></Link>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default MyOrders;