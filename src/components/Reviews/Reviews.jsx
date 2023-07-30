import { requestReviews } from '../api'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {

     const [reviews, setReviews] = useState(null); 
    const [isLoading, setIsLoading] = useState(false)
    const { movie_id } = useParams()
    

useEffect(() => {
    const detailsCast = async () => {
        try {
            setIsLoading(true)
            const data = await requestReviews(movie_id)
            const dataReview = data.results;
            setReviews(dataReview)
            
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
        {isLoading && <p>Loading...</p>}
        {reviews && reviews.length > 0 ? (
            reviews.map(review => {
                const { author, content } = review;
                return (
                    <div key={author} style={{ marginBottom: '30px' }}>
                        <div>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <h3>We don't have any reviews for this movie</h3>
        )}
    </div>
);

}

export default Reviews;