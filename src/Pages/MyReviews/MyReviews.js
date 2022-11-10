import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
import './MyReviews.css'
import useTitle from '../../hook/useTitle';

const MyReviews = () => {
    useTitle('myreviwes')
    const {user} = useContext(AuthContext)
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviewData(data)
        })
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    const remaining = reviewData.filter(odr => odr._id !== id);
                    setReviewData(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h2 className='text-center'>My All Reviews: {reviewData.length}</h2>
            <div className='reviewCard'>
                {
                    reviewData.map(reviews => <ReviewCard key={reviews._id} reviews={reviews} handleDelete={handleDelete}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;