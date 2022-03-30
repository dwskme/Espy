import React from 'react';
import Card from './Card';

const Trending = (props) => {
    return (
        <div className='py-2'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-12  mx-auto">
                    <div className="flex flex-col w-full mb-20 mt-3">
                        <h1 className="">Trending {props.type}</h1>
                    </div>
                    <div className='row container mx-auto p-0'>
                        {
                            props.data?.slice(0, 4).map((val, index) => {
                                return (
                                    <div className='col-md-3'>
                                        <div className="flex flex-wrap m-4">
                                            {<Card id={val.id} name={val.name} title={val.title} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>}
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

export default Trending