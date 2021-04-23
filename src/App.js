import React, { Suspense, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import HomePage from './components/views/HomePage/HomePage';
// import MoviesPage from './components/views/MoviesPage/MoviesPage';
// import MovieDetailsPage from './components/views/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('./components/views/HomePage/HomePage.js'));
const MoviesPage = lazy(() =>
  import('./components/views/MoviesPage/MoviesPage.js'),
);
const MovieDetailsPage = lazy(() =>
  import('./components/views/MovieDetailsPage/MovieDetailsPage.js'),
);
const NotFoundPage = lazy(() =>
  import('./components/views/NotFoundPage/NotFoundPage'),
);

const App = () => (
  <>
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Container>
  </>
);

export default App;
