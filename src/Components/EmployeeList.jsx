import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  removeEmployee,
  updateEmployee
}) {

  return (
    <div>

      {employees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (

        employees.map(
          (employee, index) => (

            <EmployeeCard
              key={index}
              employee={employee}
              removeEmployee={() =>
                removeEmployee(index)
              }
              updateEmployee={()=>
                updateEmployee(index)
              }
            />

          )
        )

      )}

    </div>
  );
}

export default EmployeeList;