import React from 'react';
import { useDispatch } from 'react-redux';
import { adminLogout } from '../../../store/AdminAuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const response = await axios.get("/api/admin/logout", {
                withCredentials: true, // Ensure credentials (cookies) are sent with the request
            });
            console.log("User logged out:", response.data);
            dispatch(adminLogout());
            navigate("/admin");
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

export default AdminLogout;
