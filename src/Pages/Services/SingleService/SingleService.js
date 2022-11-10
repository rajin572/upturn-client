import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleService.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "./AddReview/AddReview";
import ShowServiceReview from "./ShowServiceReview/ShowServiceReview";

const SingleService = () => {
  const data = useLoaderData();
  console.log(data);
  const { img, description, price, title } = data;
  return (
    <div className="singleService">
      <div className="singleServiceData">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <div className="datatext">
          <h1>{title}</h1>
          <h5 className="text-muted">{description}</h5>
          <br />
          <h3>Price: {price}$</h3>
          <button>Add To Cart</button>
        </div>
      </div>
      <h1 className="text-center">Add Review</h1>
      <AddReview data={data}></AddReview>
      <ShowServiceReview data={data}></ShowServiceReview>
    </div>
  );
};

export default SingleService;
