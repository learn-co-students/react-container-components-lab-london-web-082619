import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state ={
        reviews: [],
        searchTerm: ''
    }

    fetchSearchReview = (query) =>{
        fetch(URL + query).then(res => res.json()).then(data => this.setState({reviews: data.results}))
    }

    handleChange = (e) => {
        e.persist()
        this.setState({[e.target.name]: e.target.value})
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchSearchReview(this.state.searchTerm)
    }
    render() {
        return (
            <div className='searchable-movie-reviews'>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange} />
                <input type='submit'/>
                
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
