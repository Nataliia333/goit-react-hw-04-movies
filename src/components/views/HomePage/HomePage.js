import React, { Component } from 'react';
import Movies from '../../../services/moviesApi';
import MovieList from '../../MoviesList/MoviesList';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Movies.getMovies('/trending/all/day');
    this.setState({ movies: response.results });
  }

  render() {
    return (
      <div>
        <h1 className={styles.Title}>Список популярных фильмов на сегодня</h1>
        <MovieList data={this.state.movies}></MovieList>
      </div>
    );
  }
}

export default HomePage;
