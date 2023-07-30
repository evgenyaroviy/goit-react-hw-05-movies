import css from "./movie.module.css";

export const Movie = (movie) => {
    const { poster_path, genres, original_title, overview, vote_average, release_date
 } = movie.movie;
    const vote = Math.round(vote_average * 10);
    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
    const noFoto = 'https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg'
    const releaseDate = release_date;
    const shortenedDate = releaseDate.substring(0, 4);


    return (
        <div className={css.movie}>
            {poster_path ? <img loading="lazy" src={poster} alt={original_title} width="350"/> : <img loading="lazy" src={noFoto} alt={original_title} width="350"/>}
        <div>
            <h2>{original_title} ({shortenedDate})</h2>
            <p>User score: {vote}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            
            <h3>Genres</h3>
            <ul>
                {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
                ))}
                </ul>
        </div>
            
        </div>
    )

}

// export default Movie;