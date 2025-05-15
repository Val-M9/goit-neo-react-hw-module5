import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}

export default MainLayout
