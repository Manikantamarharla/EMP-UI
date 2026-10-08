
import { useState } from "react";
import "./App.css";

import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const addEmployee = (
    name,
    age,
    salary,
    department,
    designation
  ) => {

    if (
      !name ||
      !age ||
      !salary ||
      !department ||
      !designation
    ) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      name,
      age,
      salary,
      department,
      designation
    };

    setEmployees([
      ...employees,
      newEmployee
    ]);
  };

  const removeEmployee = (index) => {

    const updatedEmployees =
      employees.filter(
        (_, i) => i !== index
      );

    setEmployees(updatedEmployees);
  };

  const updateEmployee = (index) => {

    const updatedEmployees =
      [...employees];

    updatedEmployees[index] = {
      ...updatedEmployees[index],
      salary:
        Number(
          updatedEmployees[index].salary
        ) + 5000
      
    };

    setEmployees(updatedEmployees);
  };

  const filteredEmployees =
    employees.filter((emp) =>
      emp.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="app-container">

      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
      />

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Employee..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <h2 className="count">
        Total Employees:
        {" "}
        {employees.length}
      </h2>

      <EmployeeList
        employees={filteredEmployees}
        removeEmployee={removeEmployee}
        updateEmployee={updateEmployee}
      />

    </div>
  );
}

export default App;
