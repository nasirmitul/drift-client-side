import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const [showError, setShowError] = useState("");
    const { loginUser, googleSign, loading } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <Spinner></Spinner>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            
            .catch((error) => {
                console.log(error);
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setShowError('User Not found. Please Create your account.');
                }

                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setShowError('Wrong Password. Please Try Again.');
                }
            })
    }


    const signWithGoogle = () => {
        googleSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error);
            });

    }


    return (
        <div className='container sign-account'>
            <div className="sign-account-form">
                <form action="" className='sign' onSubmit={handleSubmit}>
                    <h2 className='heading'>Login to your account<span>.</span></h2>
                    <p className='change-to'>Don't have an account? <Link to='/registration'>Register</Link> </p>

                    <div className="inputs">
                        <input type="email" placeholder='Enter Your Email' name='email' required />
                        <input type="password" placeholder='Type Password' name='password' required />
                    </div>
                    <p style={{ color: 'red' }}>{showError}</p>

                    <div className="remember-forget">
                        <div className="remember-me">
                            <input id='remember' name='remember' value='remember' type="checkbox" />
                            <label htmlFor='remember'>Remember Me</label>
                        </div>

                        <Link className='forget-password' to='/forget'>Forget Password?</Link>
                    </div>

                    <div className="action-button">
                        <button className='custom-button sign-to-account' type='submit'>Login</button>
                    </div>
                </form>

                <div className="other-options">
                    <p className='or-title'>Or Login With</p>
                    <div className="google">
                        <button type='button' className='google-sign' onClick={signWithGoogle}>
                            Signup With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;