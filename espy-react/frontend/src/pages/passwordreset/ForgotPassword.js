import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
    const [email, setEmail] = useState()
    const [status, setStatus] = useState(false)
    const sendEmail = () => {
        axios.post('/api/v1/password/forgot', { email }).then(function (result) {

            if (!result.data.success) {
                toast.error(result.data.message, { position: toast.POSITION_TOP_RIGHT })
            } else {
                console.log(result.data)
                setStatus(true)
            }
        })
    }
    return (
        <>
            <div className='d-flex align-items-center' style={{ height: "70vh" }}>
                <div className='col-4 mx-auto my-5'>
                    <h5>Recover your Account</h5>
                    <div className='form-group my-2'>
                        <small className='my-1'>The sysem will send you a reset token to the email associated with your Espy account. Enter your email below.</small>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" className='form-control my-3' placeholder='Email' required />
                        <small className='text-light my-1 badge bg-success'>{status ? "Email Sent" : ""}</small>
                    </div>
                    <button onClick={sendEmail} className='btn btn-sm btn-primary my-2 d-block ms-auto'>{status ? "Resend" : "Send Reset Token"}</button>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword