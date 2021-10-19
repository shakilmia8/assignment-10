import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `./services.json/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const { name, describe, img } = service;

    return (
        <div className='details'>
            <h2>Welcome is Details Number {serviceId} </h2>
            <h1>{name}</h1>
            <Link to={`/home`}>
                <Button variant='dark'>See All Services</Button>
            </Link>
            {/* <Col>
                <Card>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name} hello</Card.Title>
                        <Card.Text> hi
                            {describe}
                            <Link to={`/home`}>
                                <Button variant='dark'>See All Services</Button>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col> */}
        </div>
    );
};

export default ServiceDetails;