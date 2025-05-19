import noImage from '../../assets/images/no-image-horizontal.avif'
import styles from './MovieDetails.module.css'

const MovieDetails = ({ genres, image, title, avgScore, overview }) => {
  const imagePath = image.endsWith('null') ? noImage : image

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imagePath} alt={title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.score}>
          Average score: <span>{avgScore}</span>
        </p>
        <h3 className={styles.sectionTitle}>Overview</h3>
        <p className={styles.overview}>{overview}</p>
        <h3 className={styles.sectionTitle}>Genres</h3>
        <div className={styles.genres}>
          {genres.map((genre) => (
            <span key={genre.id} className={styles.genre}>
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
