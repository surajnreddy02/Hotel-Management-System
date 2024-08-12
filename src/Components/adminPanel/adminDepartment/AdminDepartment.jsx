import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DepartmentList } from "../adminIndex";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [salary, setSalary] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/department/departments", {
                    withCredentials: true,
                });
                setDepartments(response.data.data.departments);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };
        fetchDepartments();
    }, []);

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const response = await axios.post("/api/employee/add-employee", {
                age,
                name,
                designation,
                email,
                gender,
                salary,
                departmentId
            }, {
                withCredentials: true
            });
            toast.success("Employee Created Successfully")
            console.log("Employee added:", response.data);
            setAge("");
            setName("");
            setDesignation("");
            setEmail("")
            setGender("");
            setSalary("");
            setDepartmentId("");
        } catch (error) {
            console.error("Error adding employee:", error);
            toast.error("failed to create the employee");
        } finally {
            setLoading(false)
        }
    };

    const navigate = useNavigate();
    const authStatus = useSelector((state => state.adminAuth.isAuthenticated))

    if (!authStatus) {
        navigate("/admin")
        return <section className='h-screen'>
            <h1 className='mt-10 text-center text-black text-3xl'>Please Login First</h1>
        </section>;
    }

    return (
        <section id='EmployeeFormSection' className='mt-7 mb-20 md:ml-10 ml-2'>
            <div id="mainDiv" className='flex items-center md:justify-around justify-center lg:flex-row  flex-col-reverse'>
                <div id="employeeForm" className='mt-10 md:w-1/3 w-4/5'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Add Employee Details</h2>
                        <div className='form-items flex flex-col gap-4'>
                            <input
                                type="text"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                            />
                            <input
                                type="email"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                            />
                            <input
                                type="text"
                                name='designation'
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                placeholder='Designation'
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                            />
                            <select
                                name="departmentId"
                                id="departmentId"
                                value={departmentId}
                                onChange={(e) => setDepartmentId(e.target.value)}
                                className='md:h-16 rounded-lg text-white bg-base-300 p-4'
                            >
                                <option value="">Select Department</option>
                                {departments.map(dept => (
                                    <option key={dept._id} value={dept._id}>{dept.departmentName}</option>
                                ))}
                            </select>
                            <input
                                type="number"
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                                max={100000}
                                min={1000}
                                name='salary'
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                placeholder='Salary'
                            />
                            <input
                                type="number"
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                                max={60}
                                min={23}
                                name='age'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder='Age'
                            />
                            <select
                                name="gender"
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <button type="submit" className='md:h-16 rounded-lg p-4 text-white bg-base-100 hover:scale-90 '>
                                {loading ? "creating Employee...." : " Add Employee"}
                            </button>
                        </div>
                    </form>
                </div>
                <div id='departmentList' className='overflow-x-hidden lg:w-[600px] w-screen'>
                    <DepartmentList />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default AdminDepartment;
