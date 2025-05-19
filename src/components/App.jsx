import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { route } from '../constants'
import { Navigation, Loader, MainLayout } from '.'

const HomePage = lazy(() => import('../pages/home/HomePage'))
const MoviesPage = lazy(() => import('../pages/movies/MoviesPage'))
const MovieDetailsPage = lazy(
  () => import('../pages/movie-details/MovieDetailsPage')
)
const MovieCast = lazy(() => import('./movie-cast/MovieCast'))
const MovieReviews = lazy(() => import('./movie-reviews/MovieReviews'))

function App() {
  return (
    <MainLayout>
      <Toaster position="top-right" />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={route.HOME} element={<HomePage />} />
          <Route path={route.MOVIES} element={<MoviesPage />} />
          <Route
            path={`${route.MOVIES}${route.MOVIE_ID}`}
            element={<MovieDetailsPage />}>
            <Route path={route.REVIEWS} element={<MovieReviews />} />
            <Route path={route.CAST} element={<MovieCast />} />
          </Route>
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
