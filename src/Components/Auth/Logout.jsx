import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/AuthSlice'
import { Link } from 'react-router-dom'
const Logout = () => {
    const dispath = useDispatch()
    const logoutHandler = () => {

    }

    return (
        <div className="navbar-end">
            <button>
                <Link to="/button" className="btn">Logout</Link>
            </button>
        </div>
    )
}

export default Logout
