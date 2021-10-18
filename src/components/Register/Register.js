import { Button } from 'react-bootstrap';
import React from 'react';
import './Register.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='register'>
            <h2>Please Sign Up</h2>
            <form action="">
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <input type="text" name="email" id="" placeholder='Enter Your E-mail' />
                <br />
                <input type="password" name="password" id="" placeholder='Enter Your Password' />
                <br />
                <input type="password" name="password" id="" placeholder='Enter Your Re-password' />
                <br />
                <input type="submit" value="submit" />
            </form>
            <br />
            <p>Already have an account? <Link to='/login'>click here</Link></p>
            <div>------------------or------------------</div>
            <br />
            <Button onClick={signInUsingGoogle}>Google Sign In</Button>
        </div>
    );
};

export default Register;