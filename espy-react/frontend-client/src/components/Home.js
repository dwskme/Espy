import React from 'react';
import placeholder from "../img/placeholder.png";


const Movie = (props) => {
    return(
    <>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={placeholder} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">{props.genre}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.title}</h1>
                    <p className="leading-relaxed"> {props.summary}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default function Home() {
    return(
    <>
        <div className='flex  items-center justify-center min-h-screen py-2 bg-gray-100'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-12  mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Popular Choice of the Day.</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <Movie title={'Title'} genre={'Action'} summary={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'} />
                        <Movie title={'Title'} genre={'Comedy'} summary={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'} />
                        <Movie title={'Title'} genre={'Comedy'} summary={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'} />
                        <Movie title={'Title'} genre={'Comedy'} summary={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'} />
                        <Movie title={'Title'} genre={'Comedy'} summary={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'} />
                        <Movie title={'Title'} genre={'Comedy'} summary={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'} />
                    </div>
                </div>
            </section> 
        </div>
    </>
    );
}
