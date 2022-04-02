import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {API_KEY} from '../../config';


const Stats = (props)=>  {
    const navigate = useNavigate();
    const [topData, setTopData] = useState();
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        axios.get("/api/v1/get-stats").then(function (result) {
            console.log("result: "+ result.data.movies[0].id);
            setTopData(result.data?.movies);
        })
        const id = function(){
            topData.map((data,index)=>{
            
            })
        }

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(function(result){
            console.log("Movie Details: "+ result);
            setMovieData(result);
        })
    }, [])



return (
    <>
    { 
    movieData?.map((movie, index)=>{
        return (
        <>
            <h1>
            {
                movie?.id
            }    
            </h1>
        </>)
    })
    }
    </>
)
}

export default Stats;