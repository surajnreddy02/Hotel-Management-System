import React from 'react';
import { Link } from "react-router-dom";

const AdminRooms = () => {
    const departments = [
        { _id: 1, name: 'Spa', deptId: 'dept1', totalEmployees: 1000 },
        { _id: 2, name: 'Reception', deptId: 'dept2', totalEmployees: 500 },
        { _id: 3, name: 'Housekeeping', deptId: 'dept3', totalEmployees: 300 },
        { _id: 4, name: 'Restaurant', deptId: 'dept4', totalEmployees: 200 },
        { _id: 5, name: 'Security', deptId: 'dept5', totalEmployees: 150 }
    ];

    return (
        <section id='adminRoomsSection' className='mt-7 mb-20 md:ml-10 ml-2' >
            <div id="mainDiv" className='flex items-center md:justify-around justify-center md:flex-row flex-col-reverse'>
                <div id="roomForm" className='mt-10 md:w-1/3 w-4/5'>
                    <form action="">
                        <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Add Employee Details</h2>
                        <div className='form-items flex flex-col gap-4'>
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <input
                                type="text"
                                name='designation'
                                placeholder='Designation'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <select name="departmentName" id="departmentName"
                                className='md:h-16 rounded-lg text-white bg-base-300 p-4'
                            >
                                {departments.map(dept => (
                                    <option key={dept._id} value={dept._id}>{dept.name}</option>
                                ))}
                            </select>
                            <input type="number"
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                                max={100000}
                                min={1000}
                                name='salary'
                                placeholder='Salary'
                            />
                            <input
                                type="file"
                                className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none '
                                placeholder='upload the image here'
                                name='profileImage'
                            />
                        </div>
                    </form>
                </div>
                <div id="roomsList" className='mt-10'>
                    <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Employee List</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
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
            </div>
        </section>
    )
}

export default AdminRooms;
