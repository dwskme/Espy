import React, { useEffect } from 'react';
import '../../styles/navbar.css';
import {  FaHome, FaSave } from "react-icons/fa";
import {  AiFillLike,  } from "react-icons/ai";
import $ from 'jquery';

const Nav = (props) => {

    console.log(props.tab)
    // $(`#rated`).addClass('active');
    useEffect(()=>{
        $(`#${props.tab}`).addClass('active');

    },[])


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar" style={{ width: "280px" }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a id='dashboard' href={'/admin'} className="nav-link link-dark">
                        <span><FaHome /> Dashboard</span>
                    </a>
                </li>
                <li>
                    <a id='user' href={"/user-management"} className="nav-link link-dark">
                        <span><AiFillLike /> User Management</span>

                    </a>
                </li>
                <li>
                    <a id="perf" href={"#"} className="nav-link link-dark">
                        <span><FaSave /> Performance</span>
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