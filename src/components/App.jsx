import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Rewiews/Reviews'));

const App = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {' '}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
