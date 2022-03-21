import React from 'react'
import { Link } from 'react-router-dom';

const SearchCard = (props) => {
    return (
        <>
            <Link to={`/details/${props.id}`} className='item-link text-dark'>
                <div className='d-flex my-1 i-link'>
                    <div>
                        <img className='search-image' src={`http://image.tmdb.org/t/p/w92/${props.img}`} alt="" />
                    </div>
                    <p className='m-0 px-1'>{props.name}</p>
                    <p className='m-0 px-1'>{props.title}</p>
                </div>
            </Link>
        </>
    )
}

export default SearchCard