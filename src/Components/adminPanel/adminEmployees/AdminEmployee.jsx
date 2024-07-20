import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AdminEmployee = () => {
  const { deptId } = useParams(); // Use useParams here
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEmployees = async () => {
      setLoading(true);
      try {
        console.log(`Fetching employees for department ID: ${deptId}`);
        const response = await axios.get(`http://localhost:5000/api/v1/employee/get-all-employees/${deptId}`, {
          withCredentials: true
        });

        console.log(response.data.data);
        setEmployees(response.data.data); // Set the response data to the employees state
      } catch (error) {
        setError(error);
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, [deptId]);

  const handleDelete = async (employeeId) => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/employee/remove-employee", {
        employeeId
      }, {
        withCredentials: true
      })
      setEmployees((prevEmployee) => prevEmployee.filter((employee) => employee._id !== employeeId))
    } catch (error) {
      setError(error)
    }
  }


  return (
    <section id="employeeDetails" className='mt-10 mb-10'>
      <div>
        <h1 className='text-center text-3xl font-italic underline text-gray-900 mb-7'>Employee Details</h1>
        <div className="overflow-x-auto w-4/5 mx-auto">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <table className="table">
              <thead>
                <tr className='text-black'>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Department</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee._id} className='text-gray-900'>
                    <th>{index + 1}</th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.departmentName}</td>
                    <td>{employee.salary}</td>
                    <td><button
                      onClick={() => handleDelete(employee._id)}
                      className='bg-black p-2 text-white rounded-lg font-rubik hover:scale-95'>delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminEmployee;
