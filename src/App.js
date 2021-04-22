import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage';
import MoviesPage from './components/views/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';
const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/">MovieDetails</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
