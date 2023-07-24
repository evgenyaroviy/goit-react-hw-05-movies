import { useState } from "react";
import { requestSearch } from "../../api";
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import css from "./moviesPage.module.css"

export const MoviesPage = () => {

    const [querySearch, setQuerySearch] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("query");

    const handleChange = e => {
        setQuerySearch(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (querySearch === '') {
            return toast.error('Please enter keywords for search');
        } else {
            try {
                const response = await requestSearch(querySearch);
                const searchMoviesData = response.results;
                if (searchMoviesData.length === 0) {
                    return toast.error('Sorry, we couldn\'t find any movies. Please, try again.');
                } else {
                    setSearchMovies(searchMoviesData);
                    setSearchParams({ query: querySearch });
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setQuerySearch('');
            }
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search"
                    value={querySearch}
                    onChange={handleChange}
                />
                <button type="submit" className={css.button}>Search</button>
            </form>

            {searchMovies.length > 0 ? (
                <ul className={css.page}>
                    {searchMovies.map((film) => (
                        <Link to={`/movies/${film.id}`} key={film.id} className={css.links}>{film.title}</Link>
                    ))}
                </ul>
            ) : (
                <div>{error}</div>
            )}
            <Toaster />
        </div>
    )
}
