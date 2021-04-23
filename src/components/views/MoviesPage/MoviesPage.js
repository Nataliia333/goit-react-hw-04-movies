// import React from 'react';

// const MoviesPage = () => {
//   return <h1>Это страница поиска фильмов по ключевому слову</h1>;
// };

// export default MoviesPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movies from '../../../services/moviesApi';

class MoviesPage extends Component {
  state = {
    query: null,
    movies: [],
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await Movies.getMovies(
      '/search/movie',
      this.state.query,
      1,
    );
    this.setState({ movies: response.results });
  };

  render() {
    return (
      <div>
        <header>
          <form>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              <span>Search</span>
            </button>
          </form>
        </header>

        {this.state.movies &&
          this.state.movies.map(({ title, id }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/${id}`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
      </div>
    );
  }
}

export default MoviesPage;
