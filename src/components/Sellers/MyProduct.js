import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const MyProduct = () => {
    const { user, loading } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    const [refetch, setRefetch] = useState(0)
    useEffect(() => {
        fetch(`https://drift-server.vercel.app/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [refetch])


    const handelProductDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to this Product?")
        if (proceed) {
            fetch(`https://drift-server.vercel.app/myProducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Product Deleted successfully");
                        setRefetch(refetch + 1)
                    }
                })
        }
    }


    const handleAdvertise = id => {
        fetch(`https://drift-server.vercel.app/advertise/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success("Product Advertised");
                    setRefetch(refetch + 1)
                }
                toast.info("Product Already Advertised");
            })
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
                                    <p className='price'>{product.resale_price}৳</p>
                                    <p className='price'>{product.paid === true ? <p className='sold-green'>sold</p> : "available"}</p>
                                    {
                                        !product.paid ? <button className='pay' onClick={() => handleAdvertise(product._id)}>Advertise</button> : <button className='pay sold'>sold</button>
                                    }
                                    <p className='delete' onClick={() => handelProductDelete(product._id)}><MdDelete className='icon'></MdDelete></p>
                                </div>
                            </div>
                        ).reverse()
                }
            </div>
        </div>
    );
};

export default MyProduct;