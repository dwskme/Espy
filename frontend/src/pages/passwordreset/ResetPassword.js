import React, { useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const resetToken = useParams().token;
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirm] = useState()
    const resetPassword = () => {
        if (password !== confirmPassword) {
            toast.error("Password did not match", { position: toast.POSITION.TOP_RIGHT })
        } else {
            axios.put(`/api/v1/password/reset/${resetToken}`, { password, confirmPassword }).then(function (result) {
                console.log("LoL")
            })
        }
    }
    return (
        <>
            <div className='d-flex align-items-center' style={{ height: "70vh" }}>
                <div className='col-4 mx-auto my-5 border rounded p-5'>
                    <h5>Reset Password</h5>
                    <div className='form-group my-3'>
                        <small className='my-1'>Enter New Password</small>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" className='form-control' placeholder='New Password' required />
                    </div>
                    <div className='form-group my-3'>
                        <small className='my-1'>Retype New Password</small>
                        <input onChange={(e) => { setConfirm(e.target.value) }} type="password" className='form-control' placeholder='Confirm Password' required />
                    </div>
                    <button onClick={resetPassword} className='btn btn-sm btn-primary my-2 d-block ms-auto'>Done</button>
                </div>
            </div>
        </>
    )
}

export default ResetPassword