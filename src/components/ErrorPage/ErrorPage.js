import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.png'

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className='error container'>
                <div className="texts">
                    <h1>Opps!</h1>
                    <p>Page not found</p>
                </div>
                <div className="image">
                    <img src={error} alt="" />
                </div>
                <div className="action">

                    <Link className='custom-button' to='/'>Go to Home</Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;