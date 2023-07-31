import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { requestDetails } from "../api"
import { Movie } from "../Movie/Movie"
import { useEffect, useState } from "react"
import css from "./movieDetails.module.css"


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);  
    const { movie_id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const [previousPath, setPreviousPath] = useState(location.state?.from ?? '/');
    console.log(previousPath);
    const handleBackBtn = () => {
        console.log(previousPath);
        navigate(previousPath)
    }


useEffect(() => {
    const detailsMovie = async () => {
        try {
            const data = await requestDetails(movie_id)
            setMovie(data)
            
        } catch (error) {
            console.log(error.message);
        } finally {
        }
    }
    detailsMovie()
    setPreviousPath(location.state);
}, [movie_id, location.state])

    if (movie) {
        if (!Object.keys(movie).length) {
    return <h2>Loading...</h2>;
    }}
    
    return (
        <div>
            <button type="button" onClick={handleBackBtn}>Go back</button>
            {movie && <Movie movie={movie} />}
            <h3>Additional information</h3>
            <div className={css.links}>
                <Link to={`cast`} key={`${movie_id}-cast`} className={css.links} state={previousPath}>Cast</Link>
                <Link to={`reviews`} key={`${movie_id}-reviews`} className={css.links} state={previousPath}>Reviews</Link>
            </div>
            <Outlet />
      </div>
    )
}

export default MovieDetails;