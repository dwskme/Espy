/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from "react";
import {FaBars, FaUser, FaSignOutAlt, FaSearch}  from "react-icons/fa";
import {AiOutlineMessage, AiOutlineBell} from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

// TODO: 1. Make Icons Larger and Fit nicely in the NavBar


export default function IndexPage() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);
    return (
        <>
            <div className="w-full h-full bg-gray-200">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
                        <div className="h-16 w-full flex items-center px-8">
                            <div>
                                Espy
                            </div>
                        </div>
                        <ul aria-orientation="vertical" className=" py-6">
                            <li className="pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                    Logo1
                                    </div>
                                    <span className="ml-2">Dashboard</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                    Logo1
                                    </div>
                                    <span className="ml-2">Products</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                    Logo1
                                    </div>
                                    <span className="ml-2">Performance</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                    Logo1
                                    </div>
                                    <span className="ml-2">Deliverables</span>
                                </div>
                            </li>
                        </ul>
                    </div>



    
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        <div className="h-16 w-full flex items-center">
                                            Logo1
                                        </div>
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <AiOutlineCloseCircle/>
                                        </div>
                                    </div>
                                    <ul aria-orientation="vertical" className=" py-6">
                                        <li className="pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    logo1
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    logo1
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Products</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    logo1
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Performance</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                Logo1
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Deliverables</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-center mb-4 w-full px-6">
                                        <div className="relative w-full">
                                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                <FaSearch/>
                                            </div>
                                            <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between px-6 pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                                <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                            </div>
                                            <ul className="flex">
                                                <li className="cursor-pointer pt-5 pb-3">
                                                    <AiOutlineMessage/>
                                                </li>
                                                <li className="cursor-pointer  pt-5 pb-3 pl-3">
                                                    <AiOutlineBell/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}





                    
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                            <div className="hidden lg:flex w-full pr-6">
                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                    <div className="relative w-full">
                                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <FaSearch/>
                                        </div>
                                        <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-end">
                                        <div className="h-full w-20 flex items-center justify-center border-r border-l">
                                            <div className="relative cursor-pointer text-gray-600">
                                                <AiOutlineBell/>
                                                <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                            </div>
                                        </div>
                                        <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                                            <AiOutlineMessage />
                                        </div>
                                        <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                            <div className="flex items-center">
                                                                <FaUser />
                                                                <span className="text-sm ml-2">My Profile</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                            <div className="flex items-center">
                                                                <FaSignOutAlt/>
                                                                <span className="text-sm ml-2">Sign out</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative">
                                                    <img className="rounded-full h-10 w-10 object-cover" 
                                                    src="" alt="avatar" />
                                                    <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                </div>
                                            </div>
                                            <p className="text-gray-800 text-sm mx-3">Jane Doe</p>
                                            <div className="cursor-pointer text-gray-600">
                                                <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                {show ? (" ") : (<FaBars/>)}
                            </div>
                        </nav>
                        {/* Navigation ends */}



                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-full rounded border-dashed border-2 border-gray-300">{/* Place your content here */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
