import React from 'react';
import '../../styles/card.css';
import $ from 'jquery';
const MovieCard = (props) => {

    const handleMouseOver = () => {
        $(`#${props.id} .info-box`).css("visibility", "visible");
        $(`#${props.id} .fake-box`).css("visibility", "visible");
    }

    const handleMouseOut = () => {
        $(`#${props.id} .info-box`).css("visibility", "hidden");
        $(`#${props.id} .fake-box`).css("visibility", "hidden");

    }


    return (
        <>
            <a href={`/details/${props.type}/${props.id}`}>
                <div className='movie-card' id={props.id} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} style={{ position: "relative", width: "27ch" }}>
                    <div className='' >
                        <img className='img img-fluid' style={{ objectFit: "cover", borderRadius: '20px' }} src={props.img} alt="poster" />
                    </div>
                    <div className='fake-box'>
                    </div>
                    <div className='info-box d-flex align-items-center'>
                        <div>
                            <p className='m-0 text-light mx-2 fw-bold'>{props?.title}</p>
                            <p className='m-0 text-light mx-2 fw-bold'>{props?.name}</p>
                            <p className='m-0 text-light mx-2'>Rating: {props.rating}⭐</p>
                            {
                                props.userRating !== undefined ?
                                    <p className='m-0 text-light mx-2'>Your Rating: {props.userRating}⭐</p>
                                    :
                                    <></>
                            }
                            <p className='movie-description m-0 text-light mx-2 mt-5' style={{ fontSize: "0.85em" }}>{props.overview}</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default MovieCard;

