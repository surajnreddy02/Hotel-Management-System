import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/AuthSlice.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/users/logout", {
                withCredentials: true, // Ensure credentials (cookies) are sent with the request
            });
            console.log("User logged out:", response.data);
            dispatch(logout());
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <div className="navbar-end mt-10">
            <button className="btn" onClick={logoutHandler}>
                Logout
            </button>
        </div>
    );
};

export default Logout;
