import React from 'react';
import Card from './Card';

const Trending = (props) => {
    return (
        <div className='py-2'>
            <div className="container-fluid">
                <div className="flex flex-col w-full mb-20 mt-3">
                    <h1 className="text-secondary">Trending {props.type}</h1>
                </div>
                <div className='row'>
                    {
                        props.data?.splice(0, 4).map((val, index) => {
                            return (
                                <div key={index} className='col-md-3'>
                                    <div key={index + 1} className="flex flex-wrap m-4">
                                        {<Card key={index + 2} type={props.type} id={val.id} name={val.name} title={val.title} overview={val.overview} rating={val.vote_average} img={`http://image.tmdb.org/t/p/w500/${val?.poster_path}`}></Card>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Trending