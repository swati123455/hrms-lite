import { useState } from "react";
import api from "../api";

function EmployeeForm({ fetchEmployees }) {

  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/employees", form);

    alert("Employee Added");

    setForm({
      employeeId: "",
      fullName: "",
      email: "",
      department: ""
    });

    fetchEmployees();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        name="employeeId"
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={handleChange}
      />

      <input
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;