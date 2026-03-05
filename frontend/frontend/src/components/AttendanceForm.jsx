import { useState } from "react";
import api from "../api";

function AttendanceForm() {

  const [form, setForm] = useState({
    employeeId: "",
    date: "",
    status: "Present"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/attendance", form);

    alert("Attendance Marked");

    setForm({
      employeeId: "",
      date: "",
      status: "Present"
    });
  };

  return (
    <div>
      <h2>Mark Attendance</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="employeeId"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button type="submit">Mark Attendance</button>

      </form>
    </div>
  );
}

export default AttendanceForm;