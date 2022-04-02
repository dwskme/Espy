import React from 'react';
import '../../styles/navbar.css';
import '../../styles/style.css';
import { FaBook, FaHome, FaSave, FaTv, FaFilm } from "react-icons/fa";
import { AiFillLike, } from "react-icons/ai";
import $ from 'jquery';

const Nav = (props) => {

    $(`#${props.tab}`).addClass('custom-active');
    // $(`#rated`).addClass('active');


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sid" style={{ width: "280px" }}>
            {/* <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Espy</span>
            </a> */}
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="my-2 p-0">
                    <a id='home' href={'/'} className="nav-link">
                        <span><FaHome /> Home</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a id='rated' href={"/rated-movies"} className="nav-link">
                        <span><AiFillLike /> My Ratings</span>

                    </a>
                </li>
                <li className='my-2'>
                    <a id="later" href={"/watch-later"} className="nav-link">
                        <span><FaSave /> Watch Later</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a id='movies' href={'/movies'} className="nav-link">
                        <span><FaFilm /> Movies</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a id="shows" href={'/shows'} className="nav-link">

                        <span><FaTv /> Shows</span>

                    </a>
                </li>
                <li className='my-2'>
                    <a href="#" className="nav-link">

                        <span><FaBook /> Books</span>

                    </a>
                </li>
            </ul>
            
        </div>
    )
}
export default Nav