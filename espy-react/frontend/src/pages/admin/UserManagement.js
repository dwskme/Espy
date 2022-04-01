import React, { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import $ from 'jquery';
import NavBar from '../../components/layout/NavBar';

import {BsTrash, BsSearch} from 'react-icons/bs';
import UserRow from './UserRow';
import { UserContext } from '../../utils/userContext';


export default function UserManagement() {

    const [user, setUser] = useContext(UserContext);

    console.log(user?.role)

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        axios.get('/api/v1/admin/users').then(function (result) {
            console.log(result.data.users);
            setUsers(result.data.users);
        })
    },[])

    const searchUser = (query)=>{
        axios.get(`http://localhost:4000/api/v1/admin/search/${query}`).then(function(result){
            console.log(result);
        })
    }

    if(user?.role === 'admin'){
        console.log(user?.role)
        return (
            <>
                <NavBar></NavBar>
                <div className=''>
                    <div>
                        <div className='col-8 mx-auto'>
                        <h4 className='mt-5 mb-3'>Users</h4>
                        <div className=''>
                            <div className='border d-flex w-25 rounded px-3 py-1 my-2'>
                                <input onChange={(e)=>searchUser(e.target.value)} style={{border: "none", outline: "none"}} className='w-100' type="text" />
                                <div className='ms-auto'>
                                    <BsSearch/>
                                </div>
                            </div>
                        </div>
                        <div className='rounded shadow border'>
                        <table className='table table-hover' style={{}}>
                            <thead>
                                <tr>
                                    <td className='fw-bold'>Name</td>
                                    <td className='fw-bold'>E-Mail</td>
                                    <td className='fw-bold'>Age</td>
                                    <td className='fw-bold'>Gender</td>
                                    <td className='fw-bold'>Role</td>
                                    <td className='fw-bold'>Actions</td>
    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    users.map((user, index)=>{
                                        return <UserRow key={index} index = {"man"+index} user={user}></UserRow>
                                    })
                                
                                }
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
    
                </div>
    
            </>
        );
    }else if(user?.role === "user"){
        return window.location.href = "/"
    }
    return 1
}
