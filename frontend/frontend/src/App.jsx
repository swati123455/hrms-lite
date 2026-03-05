import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceTable from "./components/AttendanceTable";
import "./index.css";

function App() {

  return (
    <div className="container">

      <h1>HRMS Dashboard</h1>

      <div className="grid">

        <div className="card">
          <EmployeeForm/>
        </div>

        <div className="card">
          <AttendanceForm/>
        </div>

      </div>

      <div className="card">
        <EmployeeTable/>
      </div>

      <div className="card">
        <AttendanceTable/>
      </div>

    </div>
  );
}

export default App;