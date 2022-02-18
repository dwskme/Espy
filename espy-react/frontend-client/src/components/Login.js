import React, {Component} from 'react';
import {FaRegEnvelope} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";
class Login extends Component {
    render()
    {
        return(
            <>
            <main className=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
                    <div className="w-3/5 p-5">
                        <div className='text-left font-bold'>
                            <span className='text-slate-600'> Espy </span>
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-slate-500 mb-2 '> Log In</h2>
                            <div className='border-b-4 w-10 border-slate-500 inline-block mb-2 '></div> 
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                <FaRegEnvelope className="text-gray=400 m-2 mb-2"/>
                                <input type="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'></input>
                            </div>
                            <br></br>
                            <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                <MdLockOutline className="text-gray=400 m-2 mb-4"/>
                                <input type="Password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                            </div>
                            <div className='flex justify-between w-64 mb-5'>
                                <label className='flex items-center text-xs'>
                                    <input className='mr-1' type='checkbox' name='remember me' />
                                    Remember Me
                                </label>
                            </div>
                            <a href className= 'border-2 border-slate-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-slate-500 hover:text-white'> Forgot Password? </a>
                        </div>
                    </div>
                    <div className="w-2/5 bg-slate-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 "> 
                        <h2 className='text-3xl font-bold mb-2'> Hello, Viewers</h2>
                        <div className='border-b-4  w-10 border-white inline-block mb-2 '></div>
                        <p className='mb-10'> Register to get personalized recommendation</p>
                        <a href className= 'border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-slate-600'> Sign Up </a>
                    </div>
                </div>
            </main>
            </> 
        );
    }
}
export default Login;