
import React from 'react';

const Review = (props) => {

    return(
        <div className="review">
            <h2> {props.review.display_title} </h2>
            <p> {props.review.summary_short} </p>
        </div>
    )

}

export default Review