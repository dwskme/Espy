import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../config';

export const RecContext = createContext();

export const RecProvider = (props) => {
    const [rec, setRec] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/me").then(function (result) {
            console.log(result.data.user)
            const user = result.data.user
            var data = []
            var ratedList = user?.ratedList
            // console.log(ratedList)
            for (var i = 0; i < ratedList?.length; i++) {
                var title = ratedList[i].movie.title ? ratedList[i].movie.title : ratedList[i].movie.name
                var rating = ratedList[i].rating
                data.push({ "title": title, "rating": rating })
            }

            console.log(data)
            const data_ = [
                { "title": "Breakfast Club, The", "rating": 5 },
                { "title": "Toy Story", "rating": 3.5 },
                { "title": "Jumanji", "rating": 2 }
            ]
            axios.post('http://127.0.0.1:5000/user', { "data": data }).then(function (result) {
                const data = result.data.data
                var list = []
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i])
                    const movieRoute = `https://api.themoviedb.org/3/movie/${data[i]}?api_key=${API_KEY}`
                    axios.get(movieRoute).then(function (movie) {
                        console.log(movie.data)
                        setRec((list) => [...list, movie.data])
                    })
                }

            })
        })
    }, [])

    return (
        <RecContext.Provider value={[rec, setRec]}>
            {props.children}
        </RecContext.Provider>
    )
}