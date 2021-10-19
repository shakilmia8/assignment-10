import React from 'react';
import './Service.css';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, describe, img } = props.service;

    return (
        <div className='service'>
            <Col>
                <Card>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {describe.slice(0, 100)}
                        </Card.Text>
                        <Link to={`/serviceDetails/${id}`}>
                            <Button variant='dark'>See Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;