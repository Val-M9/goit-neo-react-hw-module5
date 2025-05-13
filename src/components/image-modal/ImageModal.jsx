import ReactModal from 'react-modal'
import styles from './ImageModal.module.css'

const ImageModal = ({ isOpen, imageRegular, description, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      overlayClassName={styles.overlay}
      className={styles.modal}>
      <div className={styles.content}>
        <img className={styles.image} src={imageRegular} alt={description} />
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </ReactModal>
  )
}

export default ImageModal
