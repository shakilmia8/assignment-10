import React from 'react';
import './Home.css';
import homeBanner from '../../images/homebanner.png';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <h1>Best Medical & <br /> Healthcare Service <br /> For Your Family</h1>
                <img src={homeBanner} alt="" />
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;