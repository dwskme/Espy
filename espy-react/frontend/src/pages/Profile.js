import React, { useContext, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/layout/NavBar';
import SideBar from '../components/layout/SideBar';
import { toast } from 'react-toastify';
import { UserContext } from '../utils/userContext';


const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useContext(UserContext);
  const [gender, setGender] = useState(user?.gender);
  const [age, setAge] = useState('');

  const [oldPassword, setOldPass] = useState();
  const [newPassword, setNewPass] = useState();
  const [conPassword, setConPass] = useState();


  const updateProfile = () => {
    const profile = { name, email, gender, age }
    axios.put('/api/v1/me/update', profile).then(function (result) {
      if (result.data.success) {
        toast.success("Profile Upadated", { position: toast.POSITION_TOP_RIGHT })
      }

    })
  }

  const updatePassword = () => {
    if (newPassword === conPassword) {
      axios.put("/api/v1/password/update", { oldPassword, newPassword, conPassword }).then(function (result) {
        if (result.data.success) {
          toast.success("Password Changed", { position: toast.POSITION_TOP_RIGHT })
        }
        else if (!result.data.success) {
          toast.error(result.data.message, { position: toast.POSITION_TOP_RIGHT })
        }
      })
    }  else if(conPassword.length()<8){
      toast.error("Password must be 8 Characters", { position: toast.POSITION_TOP_RIGHT })
    }else{
      console.log(conPassword);
      toast.error("Password did not match", { position: toast.POSITION_TOP_RIGHT })
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <div className='d-flex'>
        <div className='nav-wrapper'>
          <SideBar tab='movies'></SideBar>
        </div>
        <section style={{ backgroundColor: "#eee", height: "100vh", width: "100%" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col">

              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                    <h5 className="my-3">{user?.name}</h5>
                    <p className="text-muted mb-4">Role: {user?.role?.toUpperCase()}</p>

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
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Age</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user?.age}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Gender</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user?.gender}</p>
                      </div>
                    </div>

                    <hr />

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
                                  <label className="form-label" htmlFor="form3Example3">Full Name</label>

                                  <input onChange={(e) => setName(e.target.value)} type="text" id="form3Example3" className="form-control form-control-sm"
                                    placeholder={user?.name} />
                                </div>

                                <div className='row'>
                                  <div className='form-outline mb-4 col-md-6'>
                                    <label className="form-label" htmlFor="form3Example3">Gender</label>
                                    <select onChange={(e) => { setGender(e.target.value) }} className="form-select form-select-sm" aria-label="Default select example">
                                      <option selected={user?.gender === "Male" ? "true" : "false"} value="Male">Male</option>
                                      <option selected={user?.gender === "Female" ? "true" : "false"} value="Female">Female</option>
                                    </select>
                                  </div>

                                  <div className="form-outline mb-4 col-md-6">
                                    <label className="form-label" htmlFor="form3Example3">Age</label>

                                    <input onChange={(e) => setAge(e.target.value)} type="number" id="form3Example3" min='1' className="form-control form-control-sm"
                                      placeholder={user?.age} />
                                  </div>
                                </div>


                                <div className="form-outline mb-4">
                                  <label className="form-label" htmlFor="form3Example3">Email address</label>

                                  <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-sm"
                                    placeholder={user?.email} />
                                </div>

                              </form>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button onClick={updateProfile} type="button" className="btn btn-sm btn-primary">Save changes</button>
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
                                  <label className="form-label" htmlFor="form3Example3">Old Password</label>

                                  <input onChange={(e) => setOldPass(e.target.value)} type="text" id="form3Example3" autoComplete='off' className="form-control form-control-sm"
                                    placeholder="Enter your old password" />
                                </div>


                                <div className="form-outline mb-4">
                                  <label className="form-label" htmlFor="form3Example3">New Password</label>

                                  <input onChange={(e) => setNewPass(e.target.value)} type="email" id="form3Example3" autoComplete='off' className="form-control form-control-sm"
                                    placeholder="Enter new password" />
                                </div>

                                <div className="form-outline mb-4">
                                  <label className="form-label" htmlFor="form3Example3">Confirm New Password</label>

                                  <input onChange={(e) => setConPass(e.target.value)} type="email" id="form3Example3" autoComplete='off' className="form-control form-control-sm"
                                    placeholder="Retype password" />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button onClick={updatePassword} type="button" className="btn btn-sm btn-primary">Save changes</button>
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
        </section >
      </div >
    </>
  )
}

export default Profile