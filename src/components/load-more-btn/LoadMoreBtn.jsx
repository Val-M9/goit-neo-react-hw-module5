import styles from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button type="button" className={styles.loadMore} onClick={onLoadMore}>
      Load more
    </button>
  )
}

export default LoadMoreBtn
