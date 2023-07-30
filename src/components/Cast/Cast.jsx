import { useEffect, useState } from 'react';
import css from '../Movie/movie.module.css'
import { requestCredits } from '../api'
import { useParams } from 'react-router-dom';

const Cast = () => {

    const [casts, setCasts] = useState(null); 
    const [isLoading, setIsLoading] = useState(false)
    const { movie_id } = useParams()
    

useEffect(() => {
    const detailsCast = async () => {
        try {
            setIsLoading(true)
            const data = await requestCredits(movie_id)
            const dataCast = data.cast;
            setCasts(dataCast)
            
        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }
    detailsCast()
}, [movie_id])

    return (
        <div>
            <ul className={css.list}>
                {isLoading && <h2>Loading...</h2>}
        
                {casts && casts.map(cast => {
                    const { id, original_name, profile_path, character } = cast;
                    const poster = `https://image.tmdb.org/t/p/original/${profile_path}`;
                    const noFoto = 'https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg'
                    return <li key={id} className={css.card}>
                        {profile_path ? <img src={poster} alt={original_name} width="120"/> : <img src={noFoto} alt={original_name} width="120"/>}
                        <p className={css.name}>{original_name}</p>
                        <p className={css.character}><span>Character:</span> {character}</p>
                    </li>
           })} 
            </ul>        
        </div>
    )
}

export default Cast;