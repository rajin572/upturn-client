import React, { useEffect, useState } from 'react';

const ShowServiceReview = ({data}) => {
    const [reviewData, setReviewData] = useState([])
    const { _id, title, price, img } = data;
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
        .then(res => res.json())
        .then(data => setReviewData(data))
    },[])
    return (
        <div>
            <h1>
                {
                    reviewData.length > 0 ?
                    <p>Reviews: {reviewData.length}</p>
                    :
                    <p>No data Found</p>
                }
            </h1>
        </div>
    );
};

export default ShowServiceReview;