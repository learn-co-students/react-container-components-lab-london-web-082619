// Code MovieReviews Here
import React from 'react';
import Review from './Review.js'


const MovieReviews = (props) => {

    return(
        <div className="review-list">
            {props.reviews.map(review => < Review review={review}/> )}
        </div>
    )

}

export default MovieReviews