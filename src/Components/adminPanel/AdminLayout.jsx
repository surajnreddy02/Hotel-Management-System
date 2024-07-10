import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminFooter, AdminHeader } from "./adminIndex"

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
            <AdminFooter/>
        </>
    )
}

export default AdminLayout
