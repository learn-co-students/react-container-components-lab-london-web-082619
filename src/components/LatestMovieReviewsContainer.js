import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    componentDidMount(){
        this.getReviews().then(this.updateStateWithReviews)
    }

    getReviews = () => {
        return fetch(URL).then(resp => resp.json())
    }

    updateStateWithReviews = (reviews) => {
        this.setState({
            reviews: reviews.results
        })
        console.log(this.state.reviews)
    }

    render(){
        return(
            < MovieReviews reviews={this.state.reviews}/>
        )
    }

}

export default LatestMovieReviewsContainer