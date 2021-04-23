import React, { Component } from 'react';
import Movies from '../../services/moviesApi';

class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/credits`, '', 1);
    this.setState({ cast: response.cast });
  }

  render() {
    return (
      <div>
        {this.state.cast.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </div>
    );
  }
}

export default Cast;
