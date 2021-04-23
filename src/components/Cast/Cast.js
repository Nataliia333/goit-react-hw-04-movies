import React, { Component } from 'react';
import Movies from '../../services/moviesApi';
import styles from './Cast.module.css';

class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/credits`, '', 1);
    this.setState({ cast: response.cast });
  }

  render() {
    return (
      <div className={styles.Cast}>
        {this.state.cast.length === 0 ? (
          <p>There is no information about the film</p>
        ) : (
          this.state.cast.map(({ name, id, character, profile_path }) => (
            <li className={styles.castItem} key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))
        )}
      </div>
    );
  }
}

export default Cast;
