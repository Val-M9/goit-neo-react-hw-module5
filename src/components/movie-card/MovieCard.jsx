import styles from './MovieCard.module.css'
import noImage from '../../assets/images/no-image.webp'

const MovieCard = ({ title, poster }) => {
  const posterSrc = poster.endsWith('null') ? noImage : poster
  return (
    <div className={styles.card}>
      <img className={styles.poster} src={posterSrc} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default MovieCard
