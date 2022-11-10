import React, { useEffect, useState } from 'react';
import ShowReviewCard from './ShowReviewCard';

const ShowServiceReview = ({data}) => {
    const [reviewData, setReviewData] = useState([])
    const { _id } = data;
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviewData(data)
        })
    },[_id])
    return (
        <div>
            <h1 className='text-center'>All Reviews</h1>
            <div>
                {
                    reviewData.length > 0 ?
                    <>
                    <div>
                        {
                            reviewData.map(review => <ShowReviewCard key={review._id} review={review} ></ShowReviewCard>)
                        }
                    </div>
                    </>
                    :
                    <p className='warningMassage text-center'>No Review Yet</p>
                }
            </div>
        </div>
    );
};

export default ShowServiceReview;