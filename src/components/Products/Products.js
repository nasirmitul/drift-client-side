import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Modal from './Modal';
import { FaRegHeart } from 'react-icons/fa';

const Products = () => {
    const products = useLoaderData();
    const [modal, setModal] = useState(null);
    const closeModal = () => {
        setModal(null)
    }
    return (
        <div className='container' >

            <div className="products-container">
                {
                    products.map(product =>
                        <div className='single-product' key={product._id} >
                            <div className="picture">
                                <img src={product.product_image} alt="" />
                            </div>
                            <p className='product-name'>{product.product_name}</p>
                            <p>Location: {product.location}</p>
                            <p>Price: {product.resale_price}</p>
                            <p>Original Price: {product.original_price}</p>
                            <p>Used: {product.years_used}</p>
                            <p>Posted Time: {product.time}</p>
                            <p>Seller: {product.seller_name}</p>
                            <div className="actions">
                                <button className='custom-button' onClick={() => setModal(product)}>Add to basket</button>
                                <FaRegHeart></FaRegHeart>
                            </div>

                        </div>
                    )
                }
            </div>

            {
                modal && <Modal product={modal} closeModal={closeModal}></Modal>
            }

        </div>
    );
};

export default Products;