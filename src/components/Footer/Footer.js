import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-up'>
                <div>
                    <h4>Contact Details</h4>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> Chandina, Cumilla, Dhaka</li>
                        <li><i className="fas fa-envelope"></i> shakilmia8@gmail.com</li>
                        <li><i className="fas fa-phone-alt"></i>  + 0088 016 82 33 42 46</li>
                    </ul>
                </div>
                <div>
                    <h4>Other Contact</h4>
                    <ul>
                        <li><i className="fab fa-facebook-square"></i> Facebook</li>
                        <li><i className="fab fa-twitter-square"></i> Twitter</li>
                        <li><i className="fab fa-instagram-square"></i> Instagram</li>
                        <li><i className="fab fa-youtube-square"></i> Youtube</li>
                    </ul>
                </div>
            </div>
            <p>Copyright &copy; Md Tariqul Islam 2021 All rights reserved</p>
        </div>
    );
};

export default Footer;