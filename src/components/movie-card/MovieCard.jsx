import styles from './MovieCard.module.css'

const MovieCard = ({ title, poster }) => {
  return (
    <div className={styles.card}>
      <img className={styles.poster} src={poster} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default MovieCard
