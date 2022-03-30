import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_KEY } from '../config';
import { toast } from 'react-toastify';
import { UserContext } from '../utils/userContext';
import NavBar from '../components/layout/NavBar';


const Details = () => {
    const id = useParams().id

    const [user, setUser] = useContext(UserContext)
    const [rating, setRating] = useState('1');
    const [rate, setRate] = useState();
    const watchList = user?.watchList;
    const ratedList = user?.ratedList;
    const [data, setData] = useState();


    function checkRated(movieId) {
        for (var i = 0; i < ratedList?.length; i++) {
            if (ratedList[i]?.movie.id === parseInt(movieId)) {
                setRate(ratedList[i]?.rating);
                console.log("Rating " + ratedList[i]?.rating)
                return ratedList[i]?.rating;
            }
        }
        return false;
    }

    useEffect(() => {
        
        if (data?.hasOwnProperty('backdrop_path')){
            axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
            .then(function (result) {
            setData(result.data);
        })
        }else{
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(function (result) {
            setData(result.data);
        })
        }
    }, [])


    useEffect(() => {
        checkRated(id)
    })

    const watchLater = (movie) => {
        axios.put(`/api/v1/add-to-watch-list`, { movie }).then(function (result) {
            if (result.data.success) {
                toast.success(result.data.message, { position: toast.POSITION.TOP_RIGHT });
                axios.get("/api/v1/me").then(function (result) {
                    setUser(result.data.user)
                })
            } else {
                toast.error(result.data.message, { position: toast.POSITION.TOP_RIGHT })
            }
        })
    }

    const rateMovie = (movie) => {
        axios.put(`/api/v1/rate`, { movie, rating }).then(function (result) {
            console.log(result.data.message)
            if (result.data.success) {
                toast.success(result.data.message, { position: toast.POSITION.TOP_RIGHT });
                axios.get("/api/v1/me").then(function (result) {
                    setUser(result.data.user)
                })
            } else {
                toast.error(result.data.message, { position: toast.POSITION.TOP_RIGHT })
            }
        })
    }

    const remove = (movieId) => {
        axios.put(`/api/v1/remove-from-watch-list/${movieId}`).then(function (result) {
            console.log(result.data)
            if (result.data.success) {
                toast.success(result.data.message, { position: toast.POSITION.TOP_RIGHT });
                axios.get("/api/v1/me").then(function (result) {
                    setUser(result.data.user)
                })
            } else {
                toast.error(result.data.message, { position: toast.POSITION.TOP_RIGHT })
            }
        })
    }

    function checkMovie(movieId) {
        for (var i = 0; i < watchList?.length; i++) {
            if (watchList[i].id === movieId) {
                return true;
            }
        }
        return false;
    }
    return (
        <>
            <NavBar></NavBar>
            <div className='container-fluid p-0'>
                <div className='d-flex align-items-center backdrop-div' 
                style={{ height: "80vh", backgroundImage: `url('http://image.tmdb.org/t/p/w1280/${data?.backdrop_path}')`, backgroundPosition: 'center', backgroundSize: "cover" }}>
                    {console.log(data)}
                    <div className=''>
                        <div className='container desc-info d-flex text-light py-5 px-4 mx-auto col-10'>
                            <img className='img img-thumbnail' src={`http://image.tmdb.org/t/p/w342/${data?.poster_path}`} alt="poster" />
                            <div>
                                <div className='d-flex align-items-center'>
                                    {
                                        data == null ?
                                            <button className='btn btn-sm btn-primary text-light fw-bold mx-2'>
                                                <div className="spinner-border text-secondary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </button>
                                            :
                                            <>
                                                {
                                                    checkMovie(data?.id) ?
                                                        <>
                                                            <button onClick={remove.bind(this, data?.id)} className='shadow btn btn-sm btn-danger text-light mx-2'><small>Remove</small></button>
                                                        </> :
                                                        <>
                                                            <button onClick={watchLater.bind(this, data)} className='shadow btn btn-sm btn-primary text-light fw-bold mx-2'><small>Watch Later</small></button>
                                                        </>
                                                }
                                            </>
                                    }

                                    {
                                        data?.ratedList !== null ?
                                            <>
                                                {
                                                    rate !== undefined ?
                                                        <>
                                                            <p className='my-1'>Your Rating: {rate}⭐</p>
                                                        </>
                                                        :
                                                        <>
                                                            <select onChange={(e) => { setRating(e.target.value) }} className="form-select form-select-sm ms-5 me-1" style={{ width: "12ch" }} aria-label="Default select example">
                                                                <option value="1">1 Star</option>
                                                                <option value="2">2 Stars</option>
                                                                <option value="3">3 Stars</option>
                                                                <option value="4">4 Stars</option>
                                                                <option value="5">5 Stars</option>
                                                            </select>

                                                            {
                                                                data !== null ?
                                                                    <button onClick={rateMovie.bind(this, data)} type="button" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#rateCard">
                                                                        Rate Movie
                                                                    </button>
                                                                    :
                                                                    <button type="button" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#rateCard">
                                                                        Loading...
                                                                    </button>

                                                            }
                                                        </>
                                                }
                                            </>
                                            :
                                            <>

                                            </>
                                    }

                                </div>
                                <p style={{ fontSize: "2em" }} className='m-0 fw-bold px-3 my-1'>{data?.title}</p>
                                <p className='m-0 fw-bold px-3 my-1'>{data?.release_date}</p>

                                <div className='genres d-flex'>
                                    {
                                        data?.genres.map((val, index) => {
                                            return (
                                                <p key={index} className='m-0 fw-bold px-3 my-1'>{val?.name}</p>
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
            <h3 className='mx-5 mt-4'>Similar Movies</h3>
        </>
    )
}

export default Details