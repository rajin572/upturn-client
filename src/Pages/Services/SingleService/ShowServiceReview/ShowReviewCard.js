import React from 'react';
import './ShowServiceReview.css'

const ShowReviewCard = ({review}) => {
    console.log(review);
    const {customer, img, customerImage, email, message} = review
    return (
        <div className='reviewAll'>
            <img src={customerImage} alt="" />
            <div>
                <p> <b>Name:</b> {customer}</p>
                <p> <b>Email:</b> {email}</p>
            </div>
            <div>
                <p> <b>Massage:</b> {message}</p>
            </div>
        </div>
    );
};

export default ShowReviewCard;