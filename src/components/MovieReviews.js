// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className='review-list'>
                {reviews.map(review => {
                return (
                <div key={review.display_title} >
                    {review.display_title}
                    <p className='review'>{review.summary_short} </p>
                </div>)
            })}
            
        </div>
    )
}

export default MovieReviews
