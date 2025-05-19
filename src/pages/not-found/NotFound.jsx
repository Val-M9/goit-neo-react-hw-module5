import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Oops! Page not found</p>
        <button onClick={() => navigate(-1)} className={styles.button}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default NotFound
