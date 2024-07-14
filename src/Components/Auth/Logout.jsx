import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/AuthSlice';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import Axios

const Logout = () => {
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/users/logout");
            console.log(response.data);
            dispatch(logout());
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <div className="navbar-end">
            {/* Use Link directly around the button */}
            <Link to="/logout" className="btn" onClick={logoutHandler}>
                Logout
            </Link>
        </div>
    );
};

export default Logout;
