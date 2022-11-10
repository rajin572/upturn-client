import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    console.log(service);
    const {_id,img, description, price, title} = service
    return (
        <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className='px-1'>
          <Card.Title> <h3>{title}</h3> </Card.Title>
          <Card.Text className='px-0 mt-3 text-secondary'>
            {description.slice(0,100)}...
          </Card.Text>
          <h3>Price: {price}</h3>
          <Link to={`/services/${_id}`}><Button variant="primary" className='w-100 mt-3'>View Details</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default ServiceCard;