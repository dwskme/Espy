import React, { useContext } from 'react';
import { MovieContext } from '../../utils/movieContext';
import { TopUserContext } from '../../utils/topUserContext';



const Info = () => {
    const { movies, watchList } = useContext(MovieContext)
    const { topRater, topWatcher } = useContext(TopUserContext)
    const [movieData, setMovieData] = movies
    const [topWatchList, setTopWatchList] = watchList
    const [topRaterUser, setTopRater] = topRater
    const [topWatcherUser, setTopWatcher] = topWatcher
    console.log(topRaterUser)
    return (
        < div >
            <div className="container row p-0">
                <div className="col-md-3 mb-4">
                    <div className="rounded border text-light custom-shadow"
                        style={{ background: "#E0D8B0" }}>
                        <h6 className="m-3">Top Rated</h6>
                        <div className="d-flex px-3 pr-5 mx-auto" >
                            <h5 className="m-0 mt-4" style={{ whiteSpace: "nowwrap", overflow: "hidden", textOverflow: "ellipsis", height: "3.5ch" }}>1. {movieData[0]?.title ? movieData[0].title : movieData[0]?.name}</h5>
                        </div>
                        <hr className='m-1' />
                        <a href={'#top'} className='m-0 mx-auto d-block mb-2 btn btn-sm p-0 fw-bold text-light'>Show All</a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="rounded border text-light custom-shadow"
                        style={{ background: "#3042ff" }}>
                        <h6 className="m-3">Most Added to Watchlist</h6>
                        <div className="d-flex px-3 pr-5 mx-auto" >
                            <h5 className="m-0 mt-4" style={{ whiteSpace: "nowwrap", overflow: "hidden", textOverflow: "ellipsis", height: "3.5ch" }}>1. {topWatchList[0]?.title ? topWatchList[0].title : topWatchList[0]?.name}</h5>
                        </div>
                        <hr className='m-1' />
                        <a href={"#watch"} className='m-0 mx-auto d-block mb-2 btn btn-sm p-0 fw-bold text-light'>Show All</a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="rounded border text-light custom-shadow"
                        style={{ background: "#ff3030" }}>
                        <h6 className="m-3">Top Rating Contributor</h6>
                        <div className="d-flex px-3 pr-5 mx-auto" >
                            <h5 className="m-0 mt-4" style={{ whiteSpace: "nowwrap", overflow: "hidden", textOverflow: "ellipsis", height: "3.5ch" }}>1. {topRaterUser?.name}</h5>
                            {/* <small className='m-0'>{topRaterUser?.email}</small> */}
                        </div>
                        <hr className='m-1' />
                        <a href={"#users"} className='m-0 mx-auto d-block mb-2 btn btn-sm p-0 fw-bold text-light'>Show All</a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="rounded border text-light custom-shadow"
                        style={{ background: "#20cce3" }}>
                        <h6 className="m-3">Top Watcher</h6>
                        <div className="d-flex px-3 pr-5 mx-auto" >
                            <h5 className="mt-4 m-0" style={{ whiteSpace: "nowwrap", overflow: "hidden", textOverflow: "ellipsis", height: "3.5ch" }}>1. {topWatcherUser?.name}</h5>
                            {/* <small className='m-0'>{topWatcherUser?.email}</small> */}
                        </div>
                        <hr className='m-1' />
                        <a href={"#users"} className='m-0 mx-auto d-block mb-2 btn btn-sm p-0 fw-bold text-light'>Show All</a>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Info