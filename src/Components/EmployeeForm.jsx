import { useState } from "react";

function EmployeeForm({
  addEmployee
}) {

  const [name, setName] =
    useState("");

  const [age, setAge] =
    useState("");

    const [salary, setSalary]=
    useState("");

    const[department, setDepartment]=
    useState("");

    const[designation, setDesignation]=
    useState("");   
       
  const handleSubmit = (e) => {

    e.preventDefault();

    if(
        !name||
        !age||
        !salary||
        !department||
        !designation
      ) {
        alert("Please fill all the fields");
        return;
      }
    addEmployee(name,age,salary,department,designation);

    setName("");
    setAge("");
    setSalary("");
    setDepartment("");
    setDesignation("");
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Employee Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
         type="number"
         placeholder="Enter Employee Age"
         value={age}
         onChange={(e)=>
            setAge(e.target.value)
         }
         />

       <input 
          type="number"
          placeholder="Enter Employee Salary"
          value={salary}
          onChange={(e)=>
          setSalary(e.target.value)
            }
            />
        <input 
          type="text"
          placeholder="Enter Employee Department"
          value={department}
          onChange={(e)=>
            setDepartment(e.target.value)
          }
          />

          <input
             type="text"
             placeholder="Enter Employee Designation"
             value={designation}
             onChange={(e)=>
                setDesignation(e.target.value)
             }
             />
             
            

      <button type="submit">
        Add Employee
      </button>

    </form>

  );
}

export default EmployeeForm;