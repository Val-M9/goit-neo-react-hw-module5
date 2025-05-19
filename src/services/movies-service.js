import axios from 'axios'
import { url } from '../constants'

class MoviesService {
  #api

  constructor() {
    this.#api = axios.create({
      baseURL: url.BASE,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
      },
    })
  }

  async getTrendingMovies() {
    const response = await this.#api.get(url.TRENDING)
    return response.data
  }

  async searchMovies(query) {
    const response = await this.#api.get(url.SEARCH_MOVIES, {
      params: { query },
    })
    console.log(response)

    return response.data
  }
}

export const moviesService = new MoviesService()
