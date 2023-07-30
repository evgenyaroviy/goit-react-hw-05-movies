import { useCallback, useEffect, useRef, useState } from "react";
import { requestSearch } from "../../api";
import { Link, useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import css from "./moviesPage.module.css"

const MoviesPage = () => {

    const [querySearch, setQuerySearch] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get('query');
    const location = useLocation();
    const firstRender = useRef(true)

    const handleChange = e => {
        setQuerySearch(e.target.value);
        firstRender.current = false;
    };

    const handleSubmit = e => {
        e.preventDefault();
        getMovieBySearch(querySearch)
       
    }
    const getMovieBySearch = useCallback(async (query) => {
        if (querySearch || searchValue) {
 try {
                const response = await requestSearch(query);
                const searchMoviesData = response.results;

                if (searchMoviesData.length === 0) {
                    return toast.error('Sorry, we couldn\'t find any movies. Please, try again.');
                } else {
                    setSearchParams({ query: querySearch || searchValue});
                    setSearchMovies(searchMoviesData);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setQuerySearch('');
            }

        } else {
            return toast.error('Please enter keywords for search');
        }
    }, [querySearch,searchValue, setSearchMovies, setSearchParams]);

    useEffect(() => {
        if (firstRender.current === true && searchValue) {
            getMovieBySearch(searchValue);
        }
    }, [searchValue, getMovieBySearch, setSearchParams]);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    name="query"
                    placeholder="Search"
                    value={querySearch}
                    onChange={handleChange}
                />
                <button type="submit" className={css.button}>Search</button>
            </form>

            {searchMovies.length > 0 ? (
                <ul className={css.page}>
                    {searchMovies.map((film) => (
                        <Link to={`/movies/${film.id}`} key={film.id} className={css.links} state={location}>{film.title}</Link>
                    ))}
                </ul>
            ) : (
                <div>{error}</div>
            )}
            <Toaster />
        </div>
    )
}

export default MoviesPage;