import { useState, useEffect } from 'react'
import { moviesService } from '../../services/movies-service'

const HomePage = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await moviesService.getTrendingMovies()
        setMovies(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])
  return <div>HomePage</div>
}

export default HomePage
