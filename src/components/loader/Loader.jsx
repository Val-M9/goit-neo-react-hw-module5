import { DotLoader } from 'react-spinners'
import styles from './loader.module.css'

const Loader = ({ isLoading }) => {
  return (
    <DotLoader className={styles.loader} color="#42688e" loading={isLoading} />
  )
}

export default Loader
