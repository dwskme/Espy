import React, {  useState } from 'react';
import axios from 'axios';
import { SEARCH_BASE_URL } from '../../config';
import SearchCard from './SearchCard';
import $ from 'jquery';
import '../../styles/style.css';



const NavBar = () => {

    const [search, setSearch] = useState();

    const searchMovies = (query) => {
        axios.get(SEARCH_BASE_URL + query).then(function (result) {
            console.log(result.data.results);
            setSearch(result.data.results.slice(0, 5));
            $('.search-seg-box').addClass('py-2 px-2 border');
        });
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" className='navbar-brand fw-bold px-4 text-muted' style={{ fontSize: "2em" }}>Espy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 d-flex ms-auto">
                    <input onChange={(e) => searchMovies(e.target.value)} className="form-control mr-sm-2 mx-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-1 me-5" type="submit">Search</button>
                </form>

                <div className='search-seg-box shadow rounded bg-light'>
                    {
                        search?.map((val, index) => {
                            return (
                                <SearchCard id={val.id} name={val.name} title={val.title} img={val.poster_path}></SearchCard>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar