import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Logout, Login } from "../../index";

function Navbar() {
    const authStatus = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div>
            <Header />
            <div className="navbar bg-base-300">
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
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-4xl">
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/rooms">Rooms</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* Conditionally render Login or Logout based on authStatus */}
                    {!authStatus ? (
                        <Link to="/login" className="btn">Login</Link>
                    ) : (
                        <Logout />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
