import css from "./movie.module.css";

export const Movie = (movie) => {
    const { poster_path, genres, original_title, overview, vote_average } = movie.movie;
    const vote = Math.round(vote_average * 10);
    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
    const noFoto = 'https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg'


    return (
        <div className={css.movie}>
            {poster_path ? <img src={poster} alt={original_title} width="350"/> : <img src={noFoto} alt={original_title} width="350"/>}
            <div>
            <h2>{original_title} </h2>
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