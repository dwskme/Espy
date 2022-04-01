import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



const Stats = (props)=>  {
    const navigate = useNavigate();
    const [topData, setTopData] = useState();

    useEffect(() => {
        axios.get("/api/v1/get-stats").then(function (result) {
            console.log("result: "+ result.data.movies[0].id);
            setTopData(result.data?.movies);
        })
        
    }, [])



return (
    <>
    { 
    topData?.map((movie, index)=>{
        return (
        <h1>
        {
            movie?.id
        }    
        </h1>)
    })
    }
    </>
)
}

export default Stats;