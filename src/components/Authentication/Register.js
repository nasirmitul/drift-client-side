import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import app from '../../firebase/firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../Spinner/Spinner';


const auth = getAuth(app)

const Register = () => {
    const [showError, setShowError] = useState("");
    const { createUser, googleSign, loading } = useContext(AuthContext)

    const [usersEmail, setUserEmail] = useState('');
    console.log("usersEmail", usersEmail);
    // const [token] = useToken(usersEmail);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    /* if (token) {
        navigate(from, { replace: true });
    } */

    if (loading) {
        return <Spinner></Spinner>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user_type = form.user_type.value;
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://i.ibb.co/P1ZYLSv/male-avatar.png"
                }).then(() => {
                    console.log('profile updated');
                    const uid = result.user.uid
                    saveUser(name, email, user_type, uid);
                    form.reset();
                }).catch((error) => {
                    console.log(error);
                });
            })

            .catch((error) => {
                console.log(error);
                if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setShowError('Password should be min 6 character long');
                }

                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setShowError('This Email Already in use. Please use another one');
                }
            })
    }

    const signWithGoogle = () => {
        googleSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUserEmail(user.email);
            }).catch((error) => {
                console.log(error);
            });
    }


    const saveUser = (name, email, role, uid) => {
        const userData = {
            name,
            email,
            user_role: role, 
            f_user_id: uid
        }

        fetch('https://drift-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email);
                console.log(data);
            })
    }


    return (
        <div className='container sign-account'>
            <div className="sign-account-form">
                <form action="" className='sign' onSubmit={handleSubmit}>
                    <h2 className='heading'>Create new account<span>.</span></h2>
                    <p className='change-to'>Have an account? <Link to='/login'>Login</Link> </p>

                    <div className="inputs">

                        <input type="text" placeholder='Enter your Name' name='name' required />
                        <input type="email" placeholder='Enter Your Email' name='email' required />
                        <input type="password" placeholder='Type Password' name='password' required />

                        <div className="check-user">
                            <div className="normal-user">
                                <input type="radio" name="user_type" value="user" id='user' required />
                                <label htmlFor="user">User</label>
                            </div>
                            <div className="seller-user">
                                <input type="radio" name="user_type" value="seller" id='seller' required />
                                <label htmlFor="seller">Seller</label>
                            </div>
                        </div>

                        <p style={{ color: 'red', marginTop: '-10px' }}>{showError}</p>
                    </div>

                    <div className="action-button">
                        <button className='custom-button sign-to-account' type='submit'>Signup</button>
                    </div>
                </form>

                <div className="other-options">
                    <p className='or-title'>Or Signup With</p>
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

export default Register;