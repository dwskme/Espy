import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/layout/NavBar';
import Nav from '../components/layout/SideBar';
import SideBar from '../components/layout/SideBar';
import { parseJwt } from '../utils/utils';


const Profile = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');

    const token = parseJwt(localStorage.getItem('token'));

    console.log(token);
    const userId = token.id;
    console.log(userId)
    useEffect(()=>{
        axios.get('/api/v1/me', {id: userId}).then(function(result){
            console.log(result.data.user);
            setUser(result.data.user);
        })
    }, [])

  return (
    <>
    <NavBar></NavBar>
        <div className='d-flex'>
        <div className='nav-wrapper'>
                    <SideBar tab='movies'></SideBar>
                </div>
        <section style={{backgroundColor: "#eee", height: "100vh", width: "100%"}}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: "150px"}} />
            <h5 className="my-3">John Smith</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            
          </div>
        </div>
       
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.name}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.email}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div>

            <hr></hr>
            <div className='d-flex'>
            <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Update User Details
            </button>

            <button type="button" className="btn btn-sm btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#passwordForm">
            Change Password
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Update Profile</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Full Name</label>

                                    <input onChange={(e)=>setName(e.target.value)} type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter your name" />
                                </div>


                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Email address</label>

                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>
                            </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-sm btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </div>



            {/* Update Password */}
            <div>
            

            <div className="modal fade" id="passwordForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Change password</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Old Password</label>

                                    <input onChange={(e)=>setName(e.target.value)} type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter your old password" />
                                </div>


                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">New Password</label>

                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter new password" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Confirm New Password</label>

                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Retype password" />
                                </div>
                            </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-sm btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </div>
            {/* Update Password */}
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
        </div>
    </>
  )
}

export default Profile