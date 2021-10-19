import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    const img = 'https://hairtransplant.com.bd/wp-content/uploads/2019/04/our-specialists.jpg';
    return (
        <div className='doctors'>
            <img className='images' src={img} alt="" />
            <h1>Our Doctors</h1>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        doctors.map(doctor => <Doctor key={doctor.key} doctor={doctor}></Doctor>)
                    ))}
                </Row>

            }
        </div>
    );
};

export default Doctors;