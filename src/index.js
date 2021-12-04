import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React arrow function
//Always use capital letter for naming react component because react don't recognize component which start with small letter.

//function component
var DisplayEmployee = (employee) => {

  return <div>
    <p>Name: <b>{employee.name}</b></p>
    <p>Email: <b>{employee.email}</b></p>
    <p>Location: <b>{employee.location}</b></p>
    <p>Salary: <b>{employee.salary}</b></p>
    <DepartmentInfo department_name={employee.department_name} hod={employee.hod} >

    </DepartmentInfo>
  </div>
}

//function component
var DepartmentInfo = (department_info) => {
  return <div>
    <p>Name: <b>{department_info.department_name}</b></p>
    <p>HOD: <b>{department_info.hod}</b></p>
  </div>
}


const element = <DisplayEmployee name="Kiran Badola" email="badolakiran96@gmail.com" location="India" salary="200K" department_name="Computer Sc. and Engg." hod="Mr. TheAgunda" ></DisplayEmployee>

ReactDOM.render(element, document.getElementById('application'))