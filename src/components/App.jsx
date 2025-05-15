import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { route } from '../constants'
import { Navigation, Loader, MainLayout } from '.'

const HomePage = lazy(() => import('../pages/home/HomePage'))
const MoviesPage = lazy(() => import('../pages/movies/MoviesPage'))
const MovieDetailsPage = lazy(
  () => import('../pages/movie-details/MovieDetailsPage')
)

function App() {
  return (
    <MainLayout>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={route.HOME} element={<HomePage />} />
          <Route path={route.MOVIES} element={<MoviesPage />} />
          <Route
            path={`${route.MOVIES}${route.MOVIE_ID}`}
            element={<MovieDetailsPage />}
          />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
