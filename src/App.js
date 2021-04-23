import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/views/HomePage/HomePage';
import MoviesPage from './components/views/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';

const App = () => (
  <>
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  </>
);

export default App;
