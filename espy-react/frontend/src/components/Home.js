import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL, POPULAR_SHOWS_URL } from '../config';
import Nav from './nav';
import $ from 'jquery';
import Trending from './Trending';
import NavBar from './NavBar';

export default function Home() {

    const [movie, setMovie] = useState();
    const [shows, setShows] = useState();

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(POPULAR_BASE_URL).then(function (result) {
            // console.log(result.data.results);
            setMovie(result.data.results);
        }).finally(() => setLoading(false), console.log(movie));

        axios.get(POPULAR_SHOWS_URL).then(function (result) {
            console.log(result.data.results);
            setShows(result.data.results);
        }).finally(() => setLoading(false), console.log(movie));


    }, []);

    $('.carousel-item').eq(7).addClass('active')
    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <Nav tab="home"></Nav>
                </div>



                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                movie?.map((val, index) => {
                                    return (
                                        <div className='carousel-item bg-secondary'>
                                            <img style={{ height: "65ch", width: "100%", objectFit: "cover" }} src={`http://image.tmdb.org/t/p/w1280/${val?.backdrop_path}`} alt="" />
                                            <div className='carousel-caption d-block'>
                                                <div className='info px-3 py-3'>
                                                    <p className='fw-bold' style={{ fontSize: "3em" }}>{val.title}</p>
                                                    <p className='' style={{ fontSize: "1.2em" }}>{val.overview}</p>
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
                                    <Trending type={'Movies'} data={movie}></Trending>
                                    <Trending type={'Shows'} data={shows}></Trending>
                                </>
                        }
                    </div>

                </div>


            </div>

        </>
    );
}
