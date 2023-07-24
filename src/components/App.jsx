import { Routes, Route } from 'react-router-dom'
import { Layout } from "./Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";


export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage /> } />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:movie_id' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>  
          <Route path="*" element={<HomePage />} />
        </Route>
    </Routes>
  );
};
