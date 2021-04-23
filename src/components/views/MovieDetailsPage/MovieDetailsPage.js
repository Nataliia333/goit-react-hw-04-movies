import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Movies from '../../../services/moviesApi';
import Cast from '../../Cast/Cast';
import Reviews from '../../Reviews/Reviews';

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    id: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}`);
    this.setState({ ...response });
  }

  render() {
    const {
      poster_path,
      title,
      id,
      vote_average,
      overview,
      genres,
    } = this.state;
    const { match, history, location } = this.props;
    return (
      <div className={styles.MovieDetailsPage}>
        <button
          className={styles.ButtonMovie}
          type="button"
          onClick={() => {
            history.push({
              pathname: location.state.from,
              search: location.search,
            });
          }}
        >
          Back
        </button>
        <div className={styles.MovieImagePage}>
          <img
            className={styles.MovieImage}
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
          <div>
            <h2 className={styles.MovieTitle}>{title}</h2>
            <p className={styles.MovieTitleP}>
              User Score: {vote_average * 10}%
            </p>
            <h3 className={styles.MovieOverview}>Overview</h3>
            <p className={styles.MovieOverviewP}>{overview}</p>
            <h4 className={styles.MovieGenres}>Genres</h4>
            {genres.map(({ id, name }) => (
              <li className={styles.MovieGenresLi} key={id}>
                {name}
              </li>
            ))}
          </div>
        </div>

        <ul className={styles.MovieOverviewP}>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                search: location.search,
                state: {
                  from: location.state.from,
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                search: location.search,

                state: {
                  from: location.state.from,
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
