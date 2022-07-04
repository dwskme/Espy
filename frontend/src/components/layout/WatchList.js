import React from 'react';
import Card from './Card';

const WatchList = (props) => {
    return (
        <div className='py-2'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-12  mx-auto">
                    <div className="flex flex-col w-full mb-20 mt-3">
                        <h1 className="">{props.type}</h1>
                    </div>
                    <div className='row container mx-auto p-0'>
                        {
                            props.data?.map((val, index) => {
                                return (
                                    <div key={index} className='col-md-3'>
                                        <div key={index + 1} className="flex flex-wrap m-4">
                                            {/* <MovieCard name={val?.title} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`} title={val?.title} genre={val?.genres[0]?.name} summary={val?.overview} /> */}
                                            {<Card key={index + 2} id={val.id} name={val.name} title={val.title} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WatchList