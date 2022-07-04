import React, { useEffect } from 'react';
import '../../styles/navbar.css';
import '../../styles/style.css';
import { FaBook, FaHome, FaSave, FaTv, FaFilm } from "react-icons/fa";
import { AiFillLike, } from "react-icons/ai";
import $ from 'jquery';
import { Link } from 'react-router-dom'

const Nav = (props) => {

    useEffect(() => {
        $(`#${props.tab}`).addClass('custom-active');
    }, [props.tab])


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sid" style={{ width: "280px" }}>
            {/* <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Espy</span>
            </a> */}
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="my-2 p-0">
                    <Link id='home' to={'/'} className="nav-link text-secondary">
                        <span><FaHome /> Home</span>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link id='rated' to={"/rated-movies"} className="nav-link text-secondary">
                        <span><AiFillLike /> My Ratings</span>

                    </Link>
                </li>
                <li className='my-2'>
                    <Link id="later" to={"/watch-later"} className="nav-link text-secondary">
                        <span><FaSave /> Watch Later</span>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link id='movies' to={'/movies'} className="nav-link text-secondary">
                        <span><FaFilm /> Movies</span>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link id="shows" to={'/shows'} className="nav-link text-secondary">

                        <span><FaTv /> Shows</span>

                    </Link>
                </li>
                <li className='my-2'>
                    <Link id='rec' to={'/recommended'} className="nav-link text-secondary">

                        <span><FaBook /> Recommended</span>

                    </Link>
                </li>
            </ul>

        </div>
    )
}
export default Nav