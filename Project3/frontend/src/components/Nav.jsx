import { isAction } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { RootState } from '../store';
// import { logout } from '../store/authSlice';
import {LogOut, Menu, X } from 'lucide-react';



const Nav = () => {

    //   const { isAuthenticated, user } = useSelector((state ) => state.auth);
    //   const dispatch = useDispatch();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);




const isActivePath = (path) => location.pathname === path;
    //   const handleLogout = () => {
    //     // dispatch(logout());
    //     // setIsMenuOpen(false);
    //   };

    //   const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    //   };

    const isAuthenticated = () => {
        // return location.pathname === path;
    };

    //   const setIsMenuOpen = () =>{
    //     console.log(setIsMenuOpen())

    //   }


    const handleLogout = () => {
        // dispatch();
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className=" bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <Link
                        to="/"
                        className="flex items-center space-x-2 text-2xl font-bold text-transparent bg-gradient-to-r
             from-blue-600 to-purple-600 
             bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all 
             duration-300"
                    >
                        <div
                            className="w-8 h-8 bg-gradient-to-r from-blue-500
             to-purple-500 rounded-lg flex 
             items-center justify-center text-white font-bold text-sm"
                        >
                            A
                        </div>
                        <span>AuthApp</span>
                    </Link>

                    {/* Home */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/Home"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className={({ isAction }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isAction
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                }`
                            }
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/About"
                            className={({ isAction }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isAction
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                }`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/Services"
                            className={({ isAction }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isAction
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                }`
                            }
                        >
                            Services
                        </NavLink>


                        <div className=" hidden md:flex items-center space-x-8 ">

                            <NavLink
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center  px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
                            >
                                Login
                            </NavLink>


                            <NavLink
                                to="/Signup"
                                //   onClick={()=> }
                                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md font-medium"
                            >
                                SignUp
                            </NavLink>

                        </div>

                        {/* <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActivePath('/services')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Services
            </Link> */}

                        {/* Desktop Navigation */}
                        {/* <NavLink to="/login"> Login </NavLink> */}
                        {/* <NavLink to="=/Home"> HOME </NavLink> */}


                        {/* *********************************************************************************** */}
                        {/* Mobile menu button */}

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
                        <div className="px-4 py-3 space-y-3">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActivePath('/')
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActivePath('/About')
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                About
                            </Link>

                            <Link
                                to="/services"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`
                                }
                            >
                                Services
                            </Link>

                            {/* <NavLink
                            
                                to="/Services"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActivePath('/Services')
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                Services
                            </NavLink> */}
{/* 
                            {isAuthenticated ? (
                                <div className="pt-4 border-t border-gray-200">
                                    <div className="flex items-center space-x-2 px-3 py-2 mb-3">
                                        <User size={16} className="text-gray-600" />
                                        <span className="text-sm text-gray-700">{"anmol"}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md"
                                    >
                                        <LogOut size={16} />
                                        <span className="text-sm font-medium">Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="pt-4 border-t border-gray-200 space-y-3">
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md font-medium"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )} */}
                        </div>
                    </div>
                )}
            </div>
        </nav >
    );
};

export default Nav;
