import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { POPULAR_MOVIE_URL, POPULAR_SHOWS_URL } from '../config';
import SideBar from '../components/layout/SideBar';
import $ from 'jquery';
import Trending from '../components/layout/Trending';
import NavBar from '../components/layout/NavBar';
import { UserContext } from '../utils/userContext';
import { API_KEY } from '../config';
import { RecContext } from '../utils/RecContext';

export default function Home() {
    const [movie, setMovie] = useState();
    const [shows, setShows] = useState();
    const [isLoading, setLoading] = useState(false)
    const [rec, setRec] = useState([])


    useEffect(() => {
        setLoading(true);
        axios.get(POPULAR_MOVIE_URL).then(function (result) {
            // console.log(result.data.results);
            setMovie(result.data.results);
        }).finally(() => setLoading(false));
        axios.get(POPULAR_SHOWS_URL).then(function (result) {
            // console.log(result.data.results);
            setShows(result.data.results);
        }).finally(() => setLoading(false));
    }, []);

    $('.carousel-item').eq(7).addClass('active')
    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <SideBar tab="home"></SideBar>
                </div>



                <div className='mx-auto container-fluid text-light'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                movie?.map((val, index) => {
                                    return (
                                        <div key={index} className='carousel-item bg-secondary'>
                                            <img key={index + 1} style={{ height: "65ch", width: "100%", objectFit: "cover" }} src={`http://image.tmdb.org/t/p/w1280/${val?.backdrop_path}`} alt="Poster-Image" />
                                            <div key={index + 2} className='carousel-caption d-block'>
                                                <div key={index + 3} className='info px-3 py-3'>
                                                    <p key={index + 4} className='fw-bold text-light' style={{ fontSize: "3em" }}>{val.title}</p>
                                                    <p key={index + 5} className='text-light' style={{ fontSize: "1.2em" }}>{val.overview}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='container px-5'>
                        {
                            isLoading ? <>Loading...</> :
                                <>
                                    <Trending type={'movies'} data={movie}></Trending>
                                    <Trending type={'shows'} data={shows}></Trending>
                                </>
                        }
                    </div>
                </div>


            </div>

        </>
    );
}
