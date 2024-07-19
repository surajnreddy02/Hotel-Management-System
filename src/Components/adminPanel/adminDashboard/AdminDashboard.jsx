import React from 'react'
import { Dashboard } from "../../../index"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AdminDashboard = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state => state.adminAuth.isAuthenticated))

    if (!authStatus) {
        navigate("/admin")
        return <section className='h-screen'>
            <h1 className='mt-10 text-center text-black text-3xl'>Please Login First</h1>
        </section>;
    }

    return (
        <div>
            <Dashboard />
        </div>
    )
}

export default AdminDashboard
