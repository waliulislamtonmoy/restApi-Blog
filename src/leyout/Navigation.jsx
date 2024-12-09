import React, {useEffect, useState} from 'react';
import {postCategory} from "../ApiRequest/ApiRequest.jsx";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    const [category,setCategory]=useState([])
    console.log(category)
    useEffect(()=>{
        (async ()=>{
           let res= await postCategory()
            setCategory(res)
        })()
    },[])
    return (
        <div>
            <div className="navbar shadow bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className=""><NavLink to={"/"}>Home</NavLink></li>
                            {category.map((item, index) => {
                                return (
                                    < >
                                        <li className="p-1"><NavLink
                                            to={"/byCategory/" + item['id']}>{item['name']}</NavLink></li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl">BlogProject</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="p-1"><NavLink to={"/"}>Home</NavLink></li>
                        {category.map((item, index) => {
                            return (
                                <>
                                    <li><NavLink to={"/byCategory/" + item['id']}>{item['name']}</NavLink></li>
                                </>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navigation;