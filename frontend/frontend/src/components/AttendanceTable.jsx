import { useState } from "react";
import api from "../api";

function AttendanceTable() {

  const [employeeId, setEmployeeId] = useState("");
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    const res = await api.get(`/attendance/${employeeId}`);
    setRecords(res.data);
  };

  return (
    <div>
      <h2>View Attendance</h2>

      <input
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />

      <button onClick={fetchAttendance}>
        Load Attendance
      </button>

      <table border="1">

        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {records.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.date}</td>
              <td>{rec.status}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default AttendanceTable;