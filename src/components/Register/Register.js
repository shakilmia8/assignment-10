import { Button } from 'react-bootstrap';
import React from 'react';
import './Register.css';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const { auth, error, setUser, setError, signInUsingGoogle, createUserWithEmailAndPassword } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            });
    };
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    const handleRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be at least 6 characters');
            return;
        };
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                setError('');
            }).catch(error => {
                setError(error.message);
            });
    };
    return (
        <div className='register'>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input onBlur={handleNameChange} type="text" name="name" id="#" placeholder='Enter Your Name' required />
                <br />
                <input onBlur={handleEmailChange} type="text" name="email" id="#" placeholder='Enter Your E-mail' required />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="password" id="#" placeholder='Enter Your Password' required />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="password" id="#" placeholder='Enter Your Re-password' required />
                <br />
                <div>{error}</div>
                <input type="submit" value="Register" />
            </form>
            <br />
            <p>Already have an account? <Link to='/login'>click here</Link></p>
            <div>------------------or------------------</div>
            <br />
            <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
    );
};

export default Register;