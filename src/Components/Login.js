import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((e) => alert(e.message));
    };


    const register = event => {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG6.png' />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                    <h5>Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                    <button onClick={login} type='submit' className='login__signinBtn'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login__registerBtn'>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
