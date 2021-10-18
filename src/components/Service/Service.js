import React from 'react';
import './Service.css';
import { Col, Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, describe, img } = props.service;

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
                    </Card.Body>
                    <Button variant='dark'>See Details</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Service;