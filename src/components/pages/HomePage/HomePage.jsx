import { useEffect, useState } from 'react';
import { requestMovies } from '../../api'
import { Link } from 'react-router-dom';
import css from './homePage.module.css'

export const HomePage = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [error, setError] = useState('');

    const getTrendingToday = async () => {
        try {
            const response = await requestMovies();
            const trendingFilmsData = response.results;
            setTrendingFilms(trendingFilmsData);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getTrendingToday();
    }, []);

    return (
    <div>
        {trendingFilms.length > 0 ? (
            <div>
                <h1>Trending today</h1>
                <ul className={css.page}>
                    {trendingFilms.map((film) => (
                        <Link to={`/movies/${film.id}`} key={film.id} className={css.links}>{film.title}</Link>
                    ))}
                </ul>
            </div>
        ) : (
            <div>{error}</div>
        )}
    </div>
);

} 