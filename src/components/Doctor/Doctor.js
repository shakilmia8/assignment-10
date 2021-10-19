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
                            <p> Country : {country}</p>
                            <p> Designation : {role}</p>
                            <p> Age : {age}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;