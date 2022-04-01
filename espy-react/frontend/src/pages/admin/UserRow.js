import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {BsTrash} from 'react-icons/bs';
import {FiEdit} from 'react-icons/fi';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router';


const UserRow = (props) => {

    const navigate = useNavigate();
    const [name, setName] = useState(props.user?.name);
    const [email, setEmail] = useState(props.user?.email);
    const [gender, setGender] = useState(props.user?.gender);
    const [age, setAge] = useState(props.user?.age);
    const [role, setRole] = useState(props.user?.role);

    const updateUser = (userId)=>{
        axios.put(`/api/v1/admin/user/${userId}`, {name, email, age, gender, role}).then(function (result) {
            if(result.data.success){
                toast.success("User Updated", {position: toast.POSITION_TOP_RIGHT});
                navigate('/admin');
            }
        })
    }

    const deleteUser = (userId)=>{
        console.log(props.user.name);
        if(props.user.role !== 'admin'){
            axios.delete(`/api/v1/admin/user/${userId}`).then(function (result) {
                if(result.data.success){
                    toast.success("User Deleted", {position: toast.POSITION_TOP_RIGHT});
                    navigate('/admin');
                }
            })
        }else{
            toast.error("Admin can't be removed", {position: toast.POSITION_TOP_RIGHT});
        }
    }


return (
    <tr className='user'>
    <td>{props.user?.name}</td>
    <td>{props.user?.email}</td>
    <td>{props.user?.age}</td>
    <td>{props.user?.gender}</td>
    <td><span className='badge bg-info rounded-pill'>{props.user?.role}</span></td>
    <td className='d-flex'>
        <div className='mx-1'>
            <button type="button" className="btn btn-sm" data-bs-toggle="modal" data-bs-target={`#${props.index}`}>
            <FiEdit/>
            </button>
        </div>

        <div className="modal fade" id={`${props.index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="form3Example3" className="form-control form-control-sm"
                />
                </div>

                <div className='row'>
                <div className='form-outline mb-4 col-md-6'>
                    <label className="form-label" htmlFor="form3Example3">Gender</label>
                    <select value = {gender} onChange={(e) => { setGender(e.target.value) }} className="form-select form-select-sm" aria-label="Default select example">
                    <option  value="Male">Male</option>
                    <option  value="Female">Female</option>
                    </select>
                </div>

                <div className="form-outline mb-4 col-md-6">
                    <label className="form-label" htmlFor="form3Example3">Age</label>

                    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" id="form3Example3" min='1' className="form-control form-control-sm"
                    />
                </div>
                </div>


                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Email address</label>

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-sm"
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Role</label>
                    <select value={role} onChange={(e) => { setRole(e.target.value) }} className="form-select form-select-sm" aria-label="Default select example">
                        <option  value="admin">Admin</option>
                        <option  value="user">User</option>
                    </select>
                </div>
            </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={updateUser.bind(this,props.user?._id)} type="button" className="btn btn-sm btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>

        <div className='mx-1'>
            <button type="button" className="btn btn-sm" data-bs-toggle="modal" data-bs-target={`#${props.index}d`}>
            <BsTrash />
            </button>
            <div className="modal fade" id={`${props.index}d`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Deleting User</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Are  your sure want to remove {props.user?.name}?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                    <button onClick={deleteUser.bind(this,props.user?._id)} type="button" className="btn btn-sm btn-danger">Confirm</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    </td>

</tr>
)
}

export default UserRow