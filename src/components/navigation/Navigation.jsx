import { NavLink } from 'react-router-dom'
import { route } from '../../constants'
import styles from './Navigation.module.css'

const linkClass = ({ isActive }) => {
  return `${styles.link} ${isActive && styles.active}`
}

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={route.HOME} className={linkClass}>
        Home
      </NavLink>
      <NavLink to={route.MOVIES} className={linkClass}>
        Movies
      </NavLink>
    </nav>
  )
}

export default Navigation
