import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {

    const contactBanner = 'https://guidedeskk.com/wp-content/uploads/2020/04/contact_us_image_qbluir.png';
    return (
        <div>
            <div className='img'>
                <img src={contactBanner} alt="" />
            </div>
            <div className='contact'>
                <h1>CONTACT US</h1>
                <form action="">
                    <input className="contact-number" type="text" placeholder="Enter your first name" /><br /><br />
                    <input className="contact-number" type="text" placeholder="Enter your second name" />
                    <br />
                    <br />
                    <input className="contact-number" type="text" placeholder="Enter your e-mail" />
                    <br />
                    <br />
                    <input className="contact-number" type="number" placeholder="Enter your phone number" />
                    <br />
                    <br />
                </form>
                <Button>Send Us</Button>
            </div>
            <div className='other'>
                <h1>OTHER WAYS TO <br /> <span>CONTACT US</span> </h1>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
            </div>
        </div>
    );
};

export default Contact;
