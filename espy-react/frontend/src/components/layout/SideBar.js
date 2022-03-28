import React from 'react';
import '../../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaSignOutAlt, FaSearch, FaBook, FaHome, FaSave, FaTv, FaFilm } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineBell, AiFillLike, AiOutlineCloseCircle } from "react-icons/ai";
import $ from 'jquery';

const Nav = (props) => {

    $(`#${props.tab}`).addClass('active');
    // $(`#rated`).addClass('active');


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar" style={{ width: "280px" }}>
            {/* <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Espy</span>
            </a> */}
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a id='home' href={'/'} className="nav-link link-dark">
                        <span><FaHome /> Home</span>
                    </a>
                </li>
                <li>
                    <a id='rated' href={"/rated-movies"} className="nav-link link-dark">
                        <span><AiFillLike /> My Ratings</span>

                    </a>
                </li>
                <li>
                    <a id="later" href={"/watch-later"} className="nav-link link-dark">
                        <span><FaSave /> Watch Later</span>
                    </a>
                </li>
                <li>
                    <a id='movies' href={'/movies'} className="nav-link link-dark">
                        <span><FaFilm /> Movies</span>
                    </a>
                </li>
                <li>
                    <a id="shows" href={'/shows'} className="nav-link link-dark">

                        <span><FaTv /> Shows</span>

                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">

                        <span><FaBook /> Books</span>

                    </a>
                </li>
            </ul>
            {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div> */}
        </div>
    )
}
export default Nav