import React from 'react';
import './Doctor.css';
import { Col, Card } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, role, age, country, img } = props.doctor;
    return (
        <div className='doctor-container'>
            <Col>
                <Card className='doctor'>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="doctor-text">Name : {name}</Card.Title>
                        <Card.Text className="doctor-text">
                            <span> Country : {country}</span><br />
                            <span> Designation : {role}</span><br />
                            <span> Age : {age}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;