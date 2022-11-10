import React from 'react';
import './ShowServiceReview.css'

const ShowReviewCard = ({review}) => {
    console.log(review);
    const {customer, customerImage, email, message} = review
    return (
        <div className='reviewAll'>
            <img src={customerImage} alt="" />
            <div>
                <b>Name:</b> 
                <p>{customer}</p>
                <b>Email:</b>
                <p>{email}</p>
            </div>
            <div className='reviewMassage'>
                <b>Review:</b>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ShowReviewCard;