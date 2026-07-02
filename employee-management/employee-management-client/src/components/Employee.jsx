import React, { use, useState } from 'react';

const Employee = ({employeesPromise}) => {
    const InitialEmployees=use(employeesPromise);
    // console.log(employees);
    const [employees,setEmployees]=useState(InitialEmployees)

     const handleAddEmployee=(e)=>{
           e.preventDefault();
           const name=e.target.name.value;
           const email=e.target.email.value;
        //    console.log(name,email)
        const newEmployee={name,email}
        fetch('http://localhost:5000/employees',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newEmployee)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const totalEmployee=[...InitialEmployees,data]
            setEmployees(totalEmployee)
        })
        }
    return (
       
        <div>
            <p>Employees are coming</p>
            <section>
                {
                    employees.map(employee=><p key={employee.id}>Name: {employee.name} Email: {employee.email}</p>)
                }
            </section>
            <form onSubmit={handleAddEmployee}>
                <input type="text" name="name" id="" placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <button>Add Employee</button>
            </form>
        </div>
    );
};

export default Employee;