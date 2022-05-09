import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import Card from '../components/layout/Card';
import { POPULAR_MOVIE_URL } from '../config';
import SideBar from '../components/layout/SideBar';
import $ from 'jquery';
import { useParams } from 'react-router';
import NavBar from '../components/layout/NavBar';
import { RecContext } from '../utils/RecContext';

const Recommended = () => {

    const [rec, setRec] = useContext(RecContext)
    console.log(rec)

    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <SideBar tab='rec'></SideBar>
                </div>
                <div className='container-fluid'>
                    <div className='py-2 container-fluid'>
                        <div className="container px-5 pb-12 mx-auto p-0">
                            <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="">Recommended For You</h1>
                            </div>
                            <div className='row'>
                                {
                                    rec.length > 0 ? rec?.map((val, index) => {
                                        return (
                                            <div className='col-md-3'>
                                                <div className="flex flex-wrap m-4">
                                                    <Card type={"movies"} id={val.id} name={val?.name} title={val?.title} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                        <small className='mt-5 text-muted text-center w-25 d-block mx-auto'>Nothing to show start rating movies so that we can suggest you with your similar choice.</small>
                                }
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </>
    )
}

export default Recommended