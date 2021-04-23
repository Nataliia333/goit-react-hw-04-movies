// import React from 'react';

// const HomePage = () => {
//   return <h1>Это домашняя страница</h1>;
// };

// export default HomePage;

import React, { Component } from 'react';
import Movies from '../../../services/moviesApi';
import MovieList from '../../MoviesList/MoviesList';

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
        <h1>Список популярных фильмов на сегодня</h1>
        <MovieList data={this.state.movies}></MovieList>
      </div>
    );
  }
}

export default HomePage;
