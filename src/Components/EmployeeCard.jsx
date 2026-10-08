function EmployeeCard({
  employee,
  removeEmployee,
  updateEmployee
}) {

  return (
    <div className="employee-card">

      <h3>{employee.name}</h3>

      <p>
        <strong>Age:</strong> {employee.age}
      </p>

      <p>
        <strong>Salary:</strong> ₹{employee.salary}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Designation:</strong> {employee.designation}
      </p>

      <div className="button-group">

        <button
          className="update-btn"
          onClick={updateEmployee}
        >
          Update
        </button>

        <button
          className="delete-btn"
          onClick={removeEmployee}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;