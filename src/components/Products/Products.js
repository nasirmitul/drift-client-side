import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Modal from './Modal';

const Products = () => {
    const products = useLoaderData();
    const [modal, setModal] = useState(null);
    const closeModal = () =>{
        setModal(null)
    }
    return (
        <div className='container' >

            <div className="products-container" style={{ "display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "15px" }}>
                {
                    products.map(product =>
                        <div key={product._id} >
                            <p>{product.product_name}</p>
                            <p>Price: {product.resale_price}</p>
                            <button className='custom-button' onClick={() => setModal(product)}>Book now</button>
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