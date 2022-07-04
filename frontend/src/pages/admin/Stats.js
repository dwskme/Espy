import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { API_KEY } from '../../config';
import Card from '../../components/layout/Card';
import { MovieContext } from '../../utils/movieContext';

const Stats = (props) => {
    const navigate = useNavigate();
    const { movies, watchList } = useContext(MovieContext)

    const [movieData, setMovieData] = movies;
    const [topWatchList, setTopWatchList] = watchList;


    return (
        <>
            <h4 id='top'>
                Top Movies and Shows Rated By Users
            </h4>
            <table className='table table-hover border border-secondary rounded shadow'>
                <thead>
                    <tr>
                        <td className='fw-bold'>Media</td>
                        <td className='fw-bold'>Category</td>
                        <td className='fw-bold'>Rating</td>
                        <td className='fw-bold'>Average Rating</td>
                        <td className='fw-bold'>Genre</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieData?.slice(0, 10).map((val, index) => {
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
                                    <td><p>{val.average_rating.toFixed(1)}</p></td>
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

            <h4 className='mt-5'>Most Added To Watch List</h4>
            <table id="watch" className='table table-hover border border-secondary rounded shadow'>
                <thead>
                    <tr>
                        <td className='fw-bold'>Media</td>
                        <td className='fw-bold'>Category</td>
                        <td className='fw-bold'>Awaiting Viewers</td>
                        <td className='fw-bold'>Genre</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        topWatchList?.slice(0, 10).map((val, index) => {
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
                                    <td><p>{val.users_count}</p></td>
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
        </>
    )
}

export default Stats;