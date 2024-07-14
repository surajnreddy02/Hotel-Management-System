import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/department/departments');
                console.log(response)
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <div id="departmentList" className='mt-10'>
            <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Departments List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-[14px] font-rubik text-black'>
                            <th></th>
                            <th>Department Name</th>
                            <th>Department Id</th>
                            <th>Total Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((dept, index) => (
                            <tr key={dept._id} className='text-gray-800'>
                                <th>{index + 1}</th>
                                <td><Link to={`/admin/departments/${dept.deptId}`}>{dept.name}</Link></td>
                                <td>{dept.deptId}</td>
                                <td>{dept.totalEmployees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DepartmentList;
