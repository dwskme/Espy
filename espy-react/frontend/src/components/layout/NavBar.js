import React, { useContext, useState } from 'react';
import axios from 'axios';
import { SEARCH_MULTI_URL } from '../../config';
import SearchCard from './SearchCard';
import $ from 'jquery';
import '../../styles/style.css';
import { toast } from 'react-toastify';
import { UserContext } from '../../utils/userContext';
import { FaBars, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [user, setUser] = useContext(UserContext);

    const [search, setSearch] = useState();

    const searchMovies = (query) => {

        axios.get(SEARCH_MULTI_URL + query).then(function (result) {
            setSearch(result.data.results.slice(0, 5));
            $('.search-seg-box').addClass('py-2 px-2 border');
            console.log(result.data)
        });
    }

    const logout = () => {
        axios.get('/api/v1/logout').then(function (result) {
            console.log(result.data.success);
            if (result.data.success === true) {
                localStorage.clear();
                toast.success("Logged In Successfully", { position: toast.POSITION_TOP_RIGHT });
                window.location.href = "/"
            }
        });
    }



    return (
        <nav style={{ borderBottom: "3px solid #ff2a12" }} className="navbar navbar-expand-lg navbar-light">
            <Link to={"/"} className='navbar-brand fw-bold px-4 text-muted' style={{ fontSize: "2em" }}>Espy</Link>
            <button className='btn d-md-none d-sm-block me-auto' onClick={() => $('.nav-wrapper').toggle(function () { $('.nav-wrapper').addClass('sid-active') }, function () { $('.nav-wrapper').removeClass('sid-active') })}>
                <FaBars></FaBars>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 d-flex ms-auto mx-3">
                    <div className='d-flex border rounded'>
                        <input onChange={(e) => searchMovies(e.target.value)} style={{ border: "none" }} className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
                        <FaSearch className='my-auto me-3 text-muted'></FaSearch>
                    </div>
                </form>

                <div className="dropdown me-5">
                    <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user?.name}</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li>
                        {
                            user?.role == 'admin' ?
                                <li><Link className="dropdown-item" to={"/admin"}>Admin</Link></li>
                                :
                                <></>
                        }
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={logout} className="dropdown-item" href="#">Sign out</button></li>
                    </ul>
                </div>
                <div className='me-4'></div>

                <div className='search-seg-box shadow rounded bg-light'>
                    {
                        search?.map((val, index) => {
                            return (
                                <SearchCard type={val.media_type} id={val.id} name={val.name} title={val.title} img={val.poster_path}>
                                </SearchCard>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar