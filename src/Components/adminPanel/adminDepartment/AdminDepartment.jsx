import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const AdminDepartment = () => {

    const navigate = useNavigate();
    // Dummy data for departments (replace with actual data or state)
    const departments = [
        { id: 'Dept001', name: 'Quality Control', employees: 10 },
        { id: 'Dept002', name: 'Housekeeping', employees: 15 }
        // Add more departments as needed
    ];

    return (
        <section id='department' className='h-screen'>
            <div className='container'>
                <div className="overflow-x-auto font-italic w-4/5 mx-auto mt-10  text-black">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-[17px]'></th>
                                <th className='text-[17px] text-cyan-950 underline'>Department Name</th>
                                <th className='text-[17px] text-cyan-950 underline'>Department ID</th>
                                <th className='text-[17px] text-cyan-950 underline'>Number of Employees</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Render rows dynamically from departments array */}
                            {departments.map((dept, index) => (
                                <tr key={dept.id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <Link to={`/admin/departments/${dept.id}`} >
                                            {dept.name}
                                        </Link>
                                    </td>
                                    <td>{dept.id}</td>
                                    <td>{dept.employees}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AdminDepartment;
