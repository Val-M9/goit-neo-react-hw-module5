import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { moviesService } from '../../services/movies-service'
import styles from './MovieReviews.module.css'
import Loader from '../loader/Loader'

const MovieReviews = () => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { movieId } = useParams()

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviews([])
        setIsLoading(true)
        const { results } = await moviesService.getMovieReviews(movieId)
        setReviews(results)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [movieId])

  if (isLoading) {
    return <Loader />
  }

  if (reviews.length === 0) {
    return (
      <p className={styles.noReviews}>There is no reviews yet for this movie</p>
    )
  }

  return (
    reviews &&
    reviews.map((review) => (
      <div key={review.id} className={styles.wrapper}>
        <p className={styles.author}>{review.author}</p>
        <p className={styles.content}>{review.content}</p>
      </div>
    ))
  )
}

export default MovieReviews
