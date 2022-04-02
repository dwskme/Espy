import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { API_KEY } from '../../config';
import Card from '../../components/layout/Card';


const Stats = (props) => {
    const navigate = useNavigate();
    const [topData, setTopData] = useState(null);
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/get-stats").then(function (result) {
            setTopData(result.data.movies)
            const moData = (result.data.movies)
            console.log(moData)

            moData.map((val, index) => {
                axios.get(`https://api.themoviedb.org/3/${val.type == "movies" ? "movie" : "tv"}/${val.id}?api_key=${API_KEY}`).then(function (result) {
                    result.data.vote_count = val.rating_count
                    setMovieData((list) => [...list, result.data]);
                })
            })
        })
    }, [])

    console.log(movieData)


    return (
        <>

            <table className='table table-hover border rounded'>
                <thead>
                    <tr>
                        <td className='fw-bold'>Media</td>
                        <td className='fw-bold'>Category</td>
                        <td className='fw-bold'>Total Votes</td>
                        <td className='fw-bold'>Average Rating</td>
                        <td className='fw-bold'>Genre</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieData?.map((val, index) => {
                            return (
                                <tr>
                                    <td className='d-flex'>
                                        <div>
                                            <img style={{ height: '8ch', width: "6ch", objectFit: "cover" }} src={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`} alt="" />
                                        </div>
                                        <p className='mx-1'>{val?.title}{val?.name}</p>
                                    </td>
                                    <td>
                                        <p>{val.name ? "TV Show" : "Movie"}</p>
                                    </td>
                                    <td><p>{val.vote_count}</p></td>
                                    <td><p>{val.vote_average}</p></td>
                                    <td className=''>
                                        {
                                            val.genres?.map((genre, index) => {
                                                return (
                                                    <small className='badge bg-info mx-1'><small>{genre.name}</small></small>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='row'>
                {/* {
                    movieData?.map((val, index) => {
                        return (
                            <div className='col-md-3'>
                                <div className="flex flex-wrap m-4">
                                    <Card type={"movies"} id={val.id} name={val.name} title={val.title} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
        </>
    )
}

export default Stats;