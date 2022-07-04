import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/layout/Card';
import { POPULAR_MOVIE_URL } from '../config';
import SideBar from '../components/layout/SideBar';
import $ from 'jquery';
import { useParams } from 'react-router';
import NavBar from '../components/layout/NavBar';

export default function Movies() {
    const tabName = useParams().tabName;
    const [movie, setMovie] = useState();
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(POPULAR_MOVIE_URL).then(function (result) {
            console.log(result.data.results);
            setMovie(result.data.results);
        }).finally(() => setLoading(false), console.log(movie));

    }, []);

    $('.carousel-item').eq(7).addClass('active')
    return (
        <>
            <NavBar></NavBar>

            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <SideBar tab='movies'></SideBar>
                </div>
                <div className='container-fluid'>
                    {
                        isLoading ? <>Loading...</> :
                            <div className='py-2 container-fluid'>
                                <div className="container px-5 pb-12 mx-auto p-0">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className="">Popular Choice of the Day.</h1>
                                    </div>
                                    <div className='row'>
                                        {
                                            movie?.map((val, index) => {
                                                return (
                                                    <div className='col-md-3'>
                                                        <div className="flex flex-wrap m-4">
                                                            <Card type={"movies"} id={val.id} name={val?.name} title={val?.title} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                    }

                </div>


            </div>

        </>
    );
}
