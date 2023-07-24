import { Link, Outlet, useParams } from "react-router-dom"
import { requestDetails } from "../api"
import { Movie } from "../Movie/Movie"
import { Button } from "../Button/Button"
import { useEffect, useState } from "react"
import css from "../Movie/movie.module.css"


export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);  
    const [isLoading, setIsLoading] = useState(false)
    const { movie_id } = useParams();

useEffect(() => {
    const detailsMovie = async () => {
        try {
            setIsLoading(true)
            const data = await requestDetails(movie_id)
            setMovie(data)
            
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false)
        }
    }
    detailsMovie()
}, [movie_id])
    
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            <Button />
            {movie && <Movie movie={movie} />}
            <div className={css.links}>
                <Link to={`cast`} key={`${movie_id}-cast`} className={css.links}>Cast</Link>
                <Link to={`reviews`} key={`${movie_id}-reviews`} className={css.links}>Reviews</Link>
            </div>
            <Outlet />
      </div>
    )
}