import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Modal = ({ product, closeModal }) => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const product_name = form.product_name.value;
        const product_price = form.product_price.value;
        const phone_number = form.phone_number.value;
        const location = form.location.value;

        const myOrder = {
            user_name,
            user_email,
            product_name,
            product_price,
            phone_number,
            location,
            product_image: product.product_image,
            product_id: product._id
        }


        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrder)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    closeModal();
                    toast.success("You have successfully booked this item");
                }
                console.log(data);
            })


    }

    return (
        <div className='main-modal'>
            <div className={`product-modal`}>
                <div className="modal-title">
                    <p>Book <span>{product.product_name}</span></p>
                    <TiDelete className='cross-icon' onClick={closeModal}></TiDelete>
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name='user_name' value={user?.displayName} readOnly required />
                    <input type="text" name='user_email' value={user?.email} readOnly required />
                    <input type="text" name='product_name' value={product.product_name} readOnly required />
                    <input type="text" name='product_price' value={product.resale_price} readOnly required />
                    <input type="tel" name='phone_number' placeholder='Phone number' required />
                    <input type="text" name='location' placeholder='Meeting location' required />
                    <button className='custom-button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;