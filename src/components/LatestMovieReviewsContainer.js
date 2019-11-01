import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount = () => {
    this.getReviews();
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  getReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(movieReviews => this.setState({reviews: movieReviews.results}))
      .catch(console.error);
  }
}

export default LatestMovieReviewsContainer;
