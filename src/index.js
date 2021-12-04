import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React function component..
function DisplayEmployee(employee) {

  return <div>
    <p>Name: <b>{employee.name}</b></p>
    <p>Email: <b>{employee.email}</b></p>
    <p>Location: <b>{employee.location}</b></p>
    <p>Salary: <b>{employee.salary}</b></p>
  </div>
}

const element = <DisplayEmployee name="Kiran Badola" email="badolakiran96@gmail.com" location="India" salary="200K" ></DisplayEmployee>

ReactDOM.render(element,document.getElementById('application'))