import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDepartments = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/api/v1/department/departments");
                const { departments, employeeCount } = response.data.data;

                const combinedData = departments.map(dept => {
                    const countInfo = employeeCount.find(count => count.departmentName === dept.departmentName);
                    return {
                        ...dept,
                        totalEmp: countInfo ? countInfo.totalEmp : 0 // Default to 0 if not found
                    };
                });

                setDepartments(combinedData);
            } catch (error) {
                setError(error);
                console.log("The error is:", error);
            } finally {
                setLoading(false);
            }
        };

        getDepartments();
    }, []);

    return (
        <div id="departmentList" className='mt-10'>
            <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Departments List</h2>
            <div className="overflow-x-auto">
                {loading ? (
                    <p>Loading .....</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
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
                                    <td><Link to={`/admin/departments/${dept._id}`}>{dept.departmentName}</Link></td>
                                    <td>{dept._id}</td>
                                    <td>{dept.totalEmp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default DepartmentList;
