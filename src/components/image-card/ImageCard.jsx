import { FiHeart } from 'react-icons/fi'
import styles from './ImageCard.module.css'

const ImageCard = ({
  imageSmall,
  description,
  onOpenModal,
  id,
  author,
  likes,
}) => {
  return (
    <div onClick={() => onOpenModal(id)} className={styles.imageWrapper}>
      <img className={styles.image} src={imageSmall} alt={description} />
      <div className={styles.overlay}>
        <p className={styles.author}>By: {author}</p>
        <div className={styles.likes}>
          <FiHeart />
          <p>{likes}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
