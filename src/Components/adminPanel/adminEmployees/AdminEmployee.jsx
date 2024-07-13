import React from 'react';

const AdminEmployee = () => {
  // This is a sample data. In a real application, you would fetch this data from your backend.
  const employees = [
    { id: 1, name: 'Cy Ganderton', email: 'cy.ganderton@example.com', age: 28, designation: 'Quality Control Specialist', gender: 'Male', departmentName: 'Housekeeping', salary: 50000 },
    { id: 2, name: 'Hart Hagerty', email: 'hart.hagerty@example.com', age: 34, designation: 'Desktop Support Technician', gender: 'Female', departmentName: 'Front Desk', salary: 45000 },
    { id: 3, name: 'Brice Swyre', email: 'brice.swyre@example.com', age: 30, designation: 'Tax Accountant', gender: 'Male', departmentName: 'Administration', salary: 60000 }
  ];

  return (
    <section id="employeeDetails" className='mt-10 mb-10'>
      <div className=''>
        <h1 className='text-center text-3xl font-italic underline text-gray-900 mb-7'>Employee Details</h1>
        <div className="overflow-x-auto w-4/5 mx-auto">
          <table className="table">
            {/* head */}
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
                <tr key={employee.id} className='text-gray-900'>
                  <th>{index + 1}</th>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.age}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.departmentName}</td>
                  <td>{employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminEmployee;
