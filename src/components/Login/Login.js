import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login'>
            <h2>Please Login</h2>
            <form action="">
                <input type="text" name="email" id="" placeholder='Enter Your E-mail' />
                <br />
                <input type="password" name="password" id="" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="submit" />
            </form>
            <br />
            <p>Create account New to <Link to='/register'>MediLife Care</Link> </p>
            <div>------------------or------------------</div>
            <br />
            <Button onClick={signInUsingGoogle}>Google Sign In</Button>
        </div>
    );
};

export default Login;