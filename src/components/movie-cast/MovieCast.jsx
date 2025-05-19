import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { moviesService } from '../../services/movies-service'
import { url } from '../../constants'
import Loader from '../loader/Loader'
import noImage from '../../assets/images/no-image.webp'
import styles from './MovieCast.module.css'

const MovieCast = () => {
  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { movieId } = useParams()

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setCast([])
        setIsLoading(true)
        const { cast } = await moviesService.getMovieCast(movieId)
        setCast(cast)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCast()
  }, [movieId])

  if (isLoading) {
    return <Loader />
  }

  if (cast.length === 0) {
    return (
      <p className={styles.noCredits}>
        Sorry, no credits available for this movie
      </p>
    )
  }

  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.castItem}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={
                actor.profile_path
                  ? `${url.SM_IMAGE_URL}${actor.profile_path}`
                  : noImage
              }
              alt={actor.name}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{actor.name}</p>
            <p className={styles.character}>
              Character: <span>{actor.character}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MovieCast
