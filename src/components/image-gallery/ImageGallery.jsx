import ImageCard from '../image-card/ImageCard'
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={styles.gallery}>
      {images &&
        images.map((image) => (
          <li key={image.id}>
            <ImageCard
              onOpenModal={onOpenModal}
              id={image.id}
              imageSmall={image.urls.small}
              imageRegular={image.urls.regular}
              description={image.description}
              author={image.user.name}
              likes={image.likes}
            />
          </li>
        ))}
    </ul>
  )
}

export default ImageGallery
