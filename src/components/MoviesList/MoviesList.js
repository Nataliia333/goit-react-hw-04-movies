import { Link, withRouter } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MovieList = ({ data, location }) => {
  return (
    <div className={styles.MoviesList}>
      {data.map(({ title, name, id }) => (
        <li className={styles.MovieItem} key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              search: location.search,
              state: {
                from: location.pathname,
              },
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default withRouter(MovieList);
