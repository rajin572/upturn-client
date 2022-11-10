import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ReviewCard = ({reviews, handleDelete}) => {
    const {_id,img, message, price, serviceName} = reviews

    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="px-1">
            <Card.Title>{serviceName}</Card.Title>
          <Card.Text className="px-0 mt-3 text-secondary">
            <b>Review:</b> {message}
          </Card.Text>
          <h3>Price: ${price}</h3>
            <Button onClick={() => handleDelete(_id)} variant="danger" className="w-100 mt-3">
              Delete
            </Button>
            <Button variant="primary" className="w-100 mt-3">
              Update
            </Button>
        </Card.Body>
      </Card>
    );
};

export default ReviewCard;