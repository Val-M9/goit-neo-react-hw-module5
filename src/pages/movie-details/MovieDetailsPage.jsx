import { useRef, useEffect, useState } from 'react'
import { useLocation, Link, useParams, Outlet } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { route, url } from '../../constants'
import { moviesService } from '../../services/movies-service'
import { PageWrapper, MovieDetails, Loader } from '../../components'
import styles from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const prevLocationRef = useRef(location.state)
  const { movieId } = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setMovie(null)
        setIsLoading(true)
        const movieData = await moviesService.getMovieById(movieId)
        setMovie(movieData)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [movieId])

  return (
    <PageWrapper>
      <Link
        className={styles.goBackBtn}
        to={prevLocationRef.current ?? route.MOVIES}>
        <FiChevronLeft />
        Back
      </Link>
      {isLoading && <Loader />}
      {movie && (
        <MovieDetails
          title={movie.title}
          image={`${url.LG_IMAGE_URL}${movie.backdrop_path}`}
          genres={movie.genres}
          avgScore={movie.vote_average.toFixed(2)}
          overview={movie.overview}
        />
      )}
      <div className={styles.links}>
        <Link to={route.CAST} className={styles.link}>
          Cast
        </Link>
        <Link to={route.REVIEWS} className={styles.link}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </PageWrapper>
  )
}

export default MovieDetailsPage
