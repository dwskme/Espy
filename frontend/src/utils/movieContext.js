import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../config';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [topWatchList, setTopWatchList] = useState([]);
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/get-stats").then(function (result) {
            const moData = (result.data.movies)
            const topWatchList = (result.data.watchList)
            moData?.map((val, index) => {
                axios.get(`https://api.themoviedb.org/3/${val.type == "movies" ? "movie" : "tv"}/${val.id}?api_key=${API_KEY}`).then(function (result) {
                    result.data.vote_count = val.rating_count
                    result.data.average_rating = val.averageRating
                    setMovieData((list) => [...list, result.data]);
                })
            })
            topWatchList?.map((val, index) => {
                axios.get(`https://api.themoviedb.org/3/${val.type == "movies" ? "movie" : "tv"}/${val.id}?api_key=${API_KEY}`).then(function (result) {
                    result.data.users_count = val.users_count
                    setTopWatchList((list) => [...list, result.data]);
                })
            })
        })
    }, [])

    return (
        <MovieContext.Provider value={{ movies: [movieData, setMovieData], watchList: [topWatchList, setTopWatchList] }}>
            {props.children}
        </MovieContext.Provider >
    )
}