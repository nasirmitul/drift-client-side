import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const MyProduct = () => {
    const { user, loading } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [])


    const handelProductDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to this Product?")
        if (proceed) {
            fetch(`http://localhost:5000/myProducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Product Deleted successfully");
                    }
                })
        }
    }


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
                        <strong className='price'>Status</strong>
                        <strong className='pay'>Advertise</strong>
                        <strong className='pay'>Delete</strong>
                    </div>
                </div>

                {
                    loading ? <Spinner></Spinner> :
                        myProducts.map(product =>
                            <div className="order-body" key={product._id}>
                                <div className="image-name">
                                    <div className="image">
                                        <img className='product-image' src={product.product_image} alt="" />
                                    </div>
                                    <p className='product-name'>{product.product_name}</p>
                                </div>
                                <div className="price-pay">
                                    <p className='price'>{product.resale_price}</p>
                                    <p className='price'>{product.status ? product.status : "unsold"}</p>
                                    <p className='pay'>Advertise</p>
                                    <p className='delete' onClick={() => handelProductDelete(product._id)}><MdDelete className='icon'></MdDelete></p>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default MyProduct;