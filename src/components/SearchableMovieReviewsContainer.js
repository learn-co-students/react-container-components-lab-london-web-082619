import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchReviews}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }

  searchReviews = (event) => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(movieReviews => this.setState({ reviews: movieReviews.results }))
      .catch(console.error)
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

}

export default SearchableMovieReviewsContainer;

