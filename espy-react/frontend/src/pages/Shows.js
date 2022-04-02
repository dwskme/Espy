import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/layout/Card';
import { POPULAR_SHOWS_URL } from '../config';
import SideBar from '../components/layout/SideBar';
import $ from 'jquery';
import NavBar from '../components/layout/NavBar';


export default function Shows() {
    const [show, setShow] = useState();
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(POPULAR_SHOWS_URL).then(function (result) {
            console.log(result.data.results);
            setShow(result.data.results);
        }).finally(() => setLoading(false), console.log(show));

    }, []);

    $('.carousel-item').eq(7).addClass('active')
    return (
        <>
            <NavBar></NavBar>

            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <SideBar tab='shows'></SideBar>
                </div>
                <div className='container-fluid'>
                    {
                        isLoading ? <>Loading...</> :
                            <div className='py-2'>
                                <section className="text-gray-600 body-font">
                                    <div className="container px-5 pb-12  mx-auto">
                                        <div className="flex flex-col text-center w-full mb-20">
                                            <h1 className="">Popular shows of the Day.</h1>
                                        </div>
                                        <div className='row container mx-auto'>
                                            {
                                                show?.map((val, index) => {
                                                    return (
                                                        <div className='col-md-3 py-3'>
                                                            <div className="flex flex-wrap -m-4">
                                                                {/* <showCard name={val?.title} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`} title={val?.title} genre={val?.genres[0]?.name} summary={val?.overview} /> */}
                                                                <Card id={val.id} name={val.name} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </section>
                            </div>
                    }

                </div>


            </div>

        </>
    );
}
