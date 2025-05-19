import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { moviesService } from '../../services/movies-service'
import { Loader, MovieList, PageWrapper } from '../../components'
const HomePage = () => {
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        const { results } = await moviesService.getTrendingMovies()
        setMovies(results)
        console.log('data', results)
      } catch (error) {
        toast.error(`Error fetching movies: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return <PageWrapper>{movies && <MovieList movies={movies} />}</PageWrapper>
}

export default HomePage
