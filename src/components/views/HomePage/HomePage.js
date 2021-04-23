// import React from 'react';

// const HomePage = () => {
//   return <h1>Это домашняя страница</h1>;
// };

// export default HomePage;

import React, { Component } from 'react';
import Movies from '../../../services/moviesApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Movies.getMovies('/trending/all/day', '', 1);
    this.setState({ movies: response.results });
  }

  render() {
    return (
      <div>
        <h1>Список популярных фильмов на сегодня</h1>
        {this.state.movies.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </div>
    );
  }
}

export default HomePage;
