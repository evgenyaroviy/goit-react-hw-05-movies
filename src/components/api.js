import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA';



export const requestMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_KEY}`
        }
    });
    
    return response.data;
}

export const requestSearch = async (query) => {
    const response = await axios.get(`${BASE_URL}search/movie?query=${query}`, {
        headers: {
            accept: 'application/json',
                Authorization: `Bearer ${ACCESS_KEY}`
        }
    });

    return response.data;
}


export const requestDetails = async (movie_id) => {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}`, {
        headers: {
            accept: 'application/json',
                Authorization: `Bearer ${ACCESS_KEY}`
        }
    });

    return response.data;
}

export const requestCredits = async (movie_id) => {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/credits`, {
        headers: {
            accept: 'application/json',
                Authorization: `Bearer ${ACCESS_KEY}`
        }
    });

    return response.data;
}
export const requestReviews = async (movie_id) => {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/reviews`, {
        headers: {
            accept: 'application/json',
                Authorization: `Bearer ${ACCESS_KEY}`
        }
    });

    return response.data;
}