import { useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { route } from '../../constants'
import styles from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const location = useLocation()
  const prevLocationRef = useRef(location.state)

  console.log(prevLocationRef)

  return (
    <div>
      <Link
        className={styles.goBackBtn}
        to={prevLocationRef.current ?? route.MOVIES}>
        <FiChevronLeft />
        Back
      </Link>
      MovieDetailsPage
    </div>
  )
}

export default MovieDetailsPage
