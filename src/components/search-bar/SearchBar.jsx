import { FiSearch } from 'react-icons/fi'
import toast from 'react-hot-toast'
import styles from './SearchBar.module.css'

const SearchBox = ({ onSubmit }) => {
  const onSearch = (e) => {
    e.preventDefault()
    const form = e.target
    const value = form.elements['search'].value
    value.trim() === ''
      ? toast.error('Please provide search query', { position: 'top-left' })
      : onSubmit(value)
    form.reset()
  }

  return (
    <header className={styles.header}>
      <form className={styles.searchForm} onSubmit={onSearch}>
        <input
          name="search"
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.searchBtn} type="submit">
          <FiSearch />
        </button>
      </form>
    </header>
  )
}

export default SearchBox
