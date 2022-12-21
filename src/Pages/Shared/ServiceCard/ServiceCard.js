import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
  console.log(service);
  const { _id, img, description, price, title } = service;
  return (
    <Card>
      <PhotoProvider>
        <PhotoView src={img}>
          <Card.Img variant="top" src={img} />
        </PhotoView>
      </PhotoProvider>
      <Card.Body className="px-1 card-posstion">
        <div className="mb-5">
        <Card.Title>
          {" "}
          <h3>{title}</h3>{" "}
        </Card.Title>
        <Card.Text className="px-0 mt-3 text-secondary">
          {description.slice(0, 100)}...
        </Card.Text>
        <h3>Price: ${price}</h3>
        </div>
        <div className="button-possition w-100">
        <Link to={`/services/${_id}`}>
          <Button variant="primary" className="d-block w-100">
            View Details
          </Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
