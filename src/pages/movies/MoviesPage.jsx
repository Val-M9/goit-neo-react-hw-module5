import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { moviesService } from '../../services/movies-service'
import { PageWrapper, SearchBar, MovieList, Loader } from '../../components'
import styles from './MoviesPage.module.css'

const MoviesPage = () => {
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams)
    updatedParams.set(key, value)
    setSearchParams(updatedParams)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get('query')
      if (!query) {
        return
      }
      try {
        setMovies(null)
        setIsLoading(true)
        const data = await moviesService.searchMovies(query)
        setMovies(data.results)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [searchParams])

  return (
    <PageWrapper>
      <SearchBar onUpdateSearchParams={updateSearchParams} />
      {isLoading && <Loader />}
      <div className={styles.listWrapper}>
        {movies && <MovieList movies={movies} />}
      </div>
    </PageWrapper>
  )
}

export default MoviesPage
