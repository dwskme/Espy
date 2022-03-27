import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_KEY } from '../config';


const Details = () => {
    const id = useParams().id

    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&external_source=imdb_id`).then(function (result) {
            console.log(result);
            setData(result.data)
        })
    }, [])


    return (
        <>
            <div className='container-fluid p-0'>
                <div>
                    <img className='backdrop-image' src={`http://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`} alt="backdrop" />
                    <div className='d-flex'>
                        <div className='desc-info d-flex text-light p-5'>
                            <img className='img img-thumbnail' src={`http://image.tmdb.org/t/p/w342/${data?.poster_path}`} alt="poster" />
                            <div>
                                <div className='d-flex'>
                                    <button className='btn btn-sm btn-primary text-light fw-bold mx-2'>Watch Later</button>
                                    <button className='btn btn-sm btn-success text-light fw-bold mx-2'>Mark Watched</button>
                                </div>
                                <p style={{ fontSize: "2em" }} className='m-0 fw-bold px-3 my-1'>{data?.title}</p>
                                <p className='m-0 fw-bold px-3 my-1'>{data?.release_date}</p>

                                <div className='genres d-flex'>
                                    {
                                        data?.genres.map((val) => {
                                            return (
                                                <p className='m-0 fw-bold px-3 my-1'>{val?.name}</p>
                                            )
                                        })
                                    }
                                </div>
                                <p className='m-0 fw-bold px-3 my-1'>Language: {data?.original_language.toUpperCase()}</p>
                                <p className='m-0 px-3 my-1'>Duration: {data?.runtime} Minutes</p>
                                <p className='m-0  px-3 my-1'>Rating: {data?.vote_average}⭐</p>
                                <p className='m-0 px-3 my-1'>{data?.overview}</p>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Details