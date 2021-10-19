import React, { useState } from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const { auth, error, setUser, setError, signInUsingGoogle, signInWithEmailAndPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleLogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_uri);
                setError('');
            }).catch(error => {
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogIn}>
                <input onBlur={handleEmailChange} type="text" name="email" id="#" placeholder='Enter Your E-mail' required />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="password" id="#" placeholder='Enter Your Password' required />
                <br />
                <div>{error}</div>
                <input type="submit" value="Log In" />
            </form>
            <br />
            <p>Create account New to <Link to='/register'>MediLife Care</Link> </p>
            <div>------------------or------------------</div>
            <br />
            <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
    );
};

export default Login;