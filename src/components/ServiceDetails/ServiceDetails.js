import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [singleService, setSingleService] = useState({});

    // const url = `./servicesdetails.json/${serviceId}`;
    useEffect(() => {
        fetch('/servicesdetails.json')
            .then(res => res.json())
            .then(data => setService(data.tree));
    }, [serviceId])

    useEffect(() => {
        const foundService = service.find(ser => ser.id === serviceId)
        setSingleService(foundService);
    }, [service])


    return (
        <div className='details'>
            <h2>Welcome is Service Details</h2>

            <Col>
                <Card>
                    <Card.Img className='img' variant="top" src={singleService?.img} />
                    <Card.Body>
                        <Card.Title>{singleService?.name}</Card.Title>
                        <Card.Text>
                            {singleService?.describe}
                            <br />
                            <br />
                            <Link to={`/home`}>
                                <Button variant='dark'>See All Services</Button>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ServiceDetails;