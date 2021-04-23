import React, { Component } from 'react';
import Movies from '../../services/moviesApi';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/reviews`, '', 1);
    this.setState({ reviews: response.results });
  }

  render() {
    return (
      <div className={styles.Reviews}>
        {this.state.reviews.length === 0 ? (
          <p>There is no information about the film</p>
        ) : (
          this.state.reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p className={styles.Author}>{author}</p>
              <p>{content}</p>
            </li>
          ))
        )}
      </div>
    );
  }
}

export default Reviews;
