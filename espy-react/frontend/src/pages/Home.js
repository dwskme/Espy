import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { POPULAR_MOVIE_URL, POPULAR_SHOWS_URL } from '../config';
import SideBar from '../components/layout/SideBar';
import $ from 'jquery';
import Trending from '../components/layout/Trending';
import NavBar from '../components/layout/NavBar';
import { UserContext } from '../utils/userContext';

export default function Home() {
    const [movie, setMovie] = useState();
    const [shows, setShows] = useState();
    const [isLoading, setLoading] = useState(false)
    const [rec, setRec] = useState([])


    const [user, setUser] = useContext(UserContext);
    const ratedList = user?.ratedList;
    console.log(ratedList)
    useEffect(() => {
        if (ratedList) {
            var data = []
            for (var i = 0; i < ratedList.length; i++) {
                var title = ratedList[i].movie.title ? ratedList[i].movie.title : ratedList[i].movie.name
                var rating = ratedList[i].rating
                data.push({ "title": title, "rating": rating })
            }

            console.log(data)
            axios.get('http://127.0.0.1:5000/user', { data: JSON.stringify(data) }).then(function (result) {
                console.log(result.data)
            })
        }
    }, [])


    useEffect(() => {
        setLoading(true);
        axios.get(POPULAR_MOVIE_URL).then(function (result) {
            // console.log(result.data.results);
            setMovie(result.data.results);
        }).finally(() => setLoading(false));
        axios.get(POPULAR_SHOWS_URL).then(function (result) {
            console.log(result.data.results);
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
                                        <div className='carousel-item bg-secondary'>
                                            <img style={{ height: "65ch", width: "100%", objectFit: "cover" }} src={`http://image.tmdb.org/t/p/w1280/${val?.backdrop_path}`} alt="Poster-Image" />
                                            <div className='carousel-caption d-block'>
                                                <div className='info px-3 py-3'>
                                                    <p className='fw-bold text-light' style={{ fontSize: "3em" }}>{val.title}</p>
                                                    <p className='text-light' style={{ fontSize: "1.2em" }}>{val.overview}</p>
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
