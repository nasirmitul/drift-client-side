import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Modal = ({ product, closeModal }) => {
    const notify = () => toast.success("You have successfully booked this item");
    const { user } = useContext(AuthContext);
    return (
        <div className='main-modal'>
            <div className={`product-modal`}>
                <TiDelete onClick={closeModal}></TiDelete>
                <form action="">
                    <input type="text" value={user?.displayName} readOnly required />
                    <input type="text" value={user?.email} readOnly required />
                    <input type="text" value={product.product_name} readOnly required />
                    <input type="text" value={product.resale_price} readOnly required />
                    <input type="tel" placeholder='Phone number' required />
                    <input type="text" placeholder='Meeting location' required />
                    <button onClick={notify} className='custom-button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;