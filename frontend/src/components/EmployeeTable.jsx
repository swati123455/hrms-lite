import { useEffect, useState } from "react";
import api from "../api";

function EmployeeTable() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.employeeId}</td>
              <td>{emp.fullName}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => deleteEmployee(emp._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default EmployeeTable;