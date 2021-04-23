import React, { Component } from 'react';
import Movies from '../../services/moviesApi';

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/reviews`, '', 1);
    this.setState({ reviews: response.results });
  }

  render() {
    return (
      <div>
        {this.state.reviews.map(({ author, id }) => (
          <li key={id}>{author}</li>
        ))}
      </div>
    );
  }
}

export default Reviews;
