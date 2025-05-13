import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import {
  Container,
  ImageGallery,
  SearchBar,
  ImageModal,
  LoadMoreBtn,
  Loader,
  ErrorMessage,
} from './components'
import imagesService from './services/images-service'

function App() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleSearch = async (newQuery) => {
    setError(null)
    setQuery(newQuery)
    setPage(1)
    setImages([])
    handleLoadImages(newQuery, 1)
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    handleLoadImages(query, nextPage)
  }

  const handleLoadImages = async (searchQuery, currentPage) => {
    try {
      setIsLoading(true)
      const data = await imagesService.searchImages(searchQuery, currentPage)
      if (data.results.length === 0) {
        setError('Sorry, no images found. Please try a different search query.')
      } else {
        setImages((prevImages) =>
          currentPage === 1 ? data.results : [...prevImages, ...data.results]
        )
        setTotalPages(data.total_pages)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenModal = (id) => {
    const image = images.find((image) => image.id === id)
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Container>
        {!error ? (
          <ImageGallery images={images} onOpenModal={handleOpenModal} />
        ) : (
          <ErrorMessage message={error} />
        )}
        <Loader isLoading={isLoading} />
      </Container>
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          imageRegular={selectedImage?.urls?.regular}
          description={selectedImage?.description}
          onClose={handleCloseModal}
        />
      )}
      <Toaster />
    </>
  )
}

export default App
