import React from 'react';
import Header from '../Header/Header';
function Navbar() {
    return (
        <div>
            <Header/>
            <div className="navbar bg-base-300 ">
                <div className="navbar-start mr-3">
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
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-4xl">
                            <li><a href="/">Dashboard</a></li>
                            <li>
                                <a href="/services">Services</a>
                                <ul className="p-2">
                                    <li><a href="/services/submenu1">Submenu 1</a></li>
                                    <li><a href="/services/submenu2">Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href="/rooms">Rooms</a></li>
                            <li><a href="/services">Gallery</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/">Dashboard</a></li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li><a href="/services/submenu1">Submenu 1</a></li>
                                    <li><a href="/services/submenu2">Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="/rooms">Rooms</a></li>
                        <li><a href="/services">Gallery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/button" className="btn">logout</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
