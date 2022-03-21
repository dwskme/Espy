import React, { Component } from 'react'
import { FaRegEnvelope, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {

    const navigate = useNavigate();
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, email, password);
        axios.post('http://localhost:4000/api/v1/register', { fullName, email, password }).then(function(result) {
            console.log(result);
        });
    }

    return (
        <>
            <section className="vh-100 d-flex">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                                alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <h3 className='my-5'>Register</h3>

                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Full Name</label>

                                    <input onChange={(e)=>e.target.value} type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter your name" />
                                </div>


                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Email address</label>

                                    <input onChange={(e)=>e.target.value} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Password</label>

                                    <input onChange={(e)=>e.target.value} type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>


                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg"
                                    >Register</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to={'/login'}
                                        className="link-danger">Login</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Register;