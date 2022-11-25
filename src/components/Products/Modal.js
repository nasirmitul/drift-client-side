import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { TiDelete } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
        </div>
    );
};

export default Modal;