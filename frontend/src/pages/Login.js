import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import placeholder1 from "../img/placeholder1.png";
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/v1/login', { email, password }).then(function (result) {
            if (result.data.success) {
                if (result.data.user?.role == "admin") {
                    localStorage.setItem('token', result.data.token);
                    toast.success("Logged In Successfully", { position: toast.POSITION_TOP_RIGHT })
                    window.location.href = '/admin';
                } else if (result.data.user?.role == "user") {
                    localStorage.setItem('token', result.data.token);
                    toast.success("Logged In Successfully", { position: toast.POSITION_TOP_RIGHT })
                    window.location.href = '/';
                }
                else {
                    toast.error(result.data.message, { position: toast.POSITION.TOP_RIGHT })
                }
            } else {
                toast.error(result.data.message, { position: toast.POSITION.TOP_RIGHT })
            }
        });
    }

    return (
        <>
            <section className="vh-100 d-flex">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={placeholder1} className="img-fluid"
                                alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <h3 className='my-5'>Login</h3>

                            <form>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Email address</label>

                                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>

                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="true" id="check" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div> */}
                                    <Link to={"/forgot-password"} className="text-primary">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg"
                                    >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={'/register'}
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Login;