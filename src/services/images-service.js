import axios from 'axios'

class ImagesService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.unsplash.com',
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        'Accept-Version': 'v1',
      },
    })
  }

  async searchImages(query, page = 1) {
    try {
      const response = await this.api.get(
        `/search/photos?page=${page}&query=${query}&per_page=20`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching images:', error)
      throw error
    }
  }
}

const imagesService = new ImagesService()
export default imagesService
