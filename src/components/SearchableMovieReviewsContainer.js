import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let searchQuery = event.target.elements[0].value;
        this.getReviews(searchQuery).then(this.updateStateWithReviews)
    }

    getReviews = (searchQuery) => {
        let searchURL = this.generateSearchURL(searchQuery)
        return fetch(searchURL).then(resp => resp.json())
    }

    generateSearchURL = (searchQuery) => {
        return `${URL}&query=${searchQuery}`
    }

    updateStateWithReviews = (reviews) => {
        this.setState({
            reviews: reviews.results
        })
        console.log(this.state.reviews)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter search here..."></input>
                    <input type="submit" value="Search"></input>
                </form>
                < MovieReviews reviews={this.state.reviews}/>
            </div>

            
        )
    }

}

export default SearchableMovieReviewsContainer