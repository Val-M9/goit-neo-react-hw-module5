import axios from 'axios'
import { url } from '../constants'

class MoviesService {
  constructor() {
    this.api = axios.create({
      baseURL: url.BASE,
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDJhYTYxZDZkMDJkNGNiNTY5OWExODAzNjFlOWMzYSIsIm5iZiI6MTY1NzA5ODcxMC4wMjcsInN1YiI6IjYyYzU1MWQ2MjQ0MTgyMDRkODI4YTMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o_tJc9O6bHXSUHkHdnDlt6vuBzm6Cy7JjpQn_f0Zlo4',
      },
    })
  }

  async getTrendingMovies() {
    try {
      const response = await this.api.get(url.TRENDING)
      return response
    } catch (err) {
      console.log(err)
    }
  }
}

export const moviesService = new MoviesService()
