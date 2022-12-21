import React from "react";
import { Button, Card } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./ReviewCard.css";

const ReviewCard = ({ reviews, handleDelete }) => {
  const { _id, img, message, serviceName } = reviews;

  return (
    <Card>
      <PhotoProvider>
        <PhotoView src={img}>
          <Card.Img variant="top" src={img} />
        </PhotoView>
      </PhotoProvider>
      <Card.Body className="px-1 card-posstion">
        <div className="mb-5">
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text className="px-0 mt-3 text-secondary">
              <b>Review:</b> {message}
          </Card.Text>
        </div>
        <div className="button-possition w-100">
          <Button
            onClick={() => handleDelete(_id)}
            variant="danger"
            className="d-block w-100 mt-3"
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
