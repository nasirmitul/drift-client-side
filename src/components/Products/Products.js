import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import { MdVerified } from 'react-icons/md';


const Products = () => {
    const { user } = useContext(AuthContext)
    const products = useLoaderData();
    const [modal, setModal] = useState(null);
    const closeModal = () => {
        setModal(null)
    }

    const handleWishlist = (wishlist) => {
        fetch('https://drift-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ wishlist, email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    closeModal();
                    toast.success("Item added to wishlist");
                }
                console.log(data);
            })
    }
    return (
        <div className='container' >
            <div className="products-container">
                {
                    products.map(product => product.paid ||
                        <div className='single-product' key={product._id} >
                            <div className="picture">
                                <img src={product.product_image} alt="" />
                            </div>
                            <p className='product-name'>{product.product_name}</p>
                            <p className='data location'>Location: <span>{product.location}</span></p>
                            <p className='data original-price'>Original Price: <span>{product.original_price}</span></p>
                            <p className='data used'>Used: <span>{product.years_used} year</span></p>
                            <p className='data time'>Posted Time: <span>{product.time.slice(0, 10)} at {product.time.slice(11, 19)}</span></p>
                            <span className='seller-name-verify'>
                                <p className='data seller'>Seller: <span>{product.seller_name}</span></p> 
                                {
                                    product.verify === 'verified' && <MdVerified className='verify'></MdVerified>
                                }
                            </span>

                            <p className='price data' >Price: <span>{product.resale_price}</span></p>

                            <div className="actions">
                                <button className='add-to-basket' onClick={() => setModal(product)}><AiOutlinePlus></AiOutlinePlus> Add to basket</button>
                                <button className='add-to-wishlist' onClick={() => handleWishlist(product)}>
                                    <FaRegHeart className='icon'></FaRegHeart>
                                </button>

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