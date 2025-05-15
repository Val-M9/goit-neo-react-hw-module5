import { Link, useLocation } from 'react-router-dom'
import MovieCard from '../movie-card/MovieCard'
import { route, url } from '../../constants'
import styles from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation()

  console.log('location', location)

  return (
    <ul className={styles.wrapper}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${route.MOVIES}/${movie.id}`}>
            <MovieCard
              title={movie.title}
              poster={`${url.SM_IMAGE_URL}${movie.poster_path}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
