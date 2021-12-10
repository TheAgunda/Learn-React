import React from 'react';
import ReactDOM from 'react-dom';

function Employee(props) {
  return <div style={{ border: "1px solid red" }}>
    <p>
      Employee ID {props.meta.id}
    </p>
    <p>
      Employee Name {props.meta.name}
    </p>
    <p>
      Employee Salary {props.meta.salary}
    </p>
    <p>
      Employee Location {props.meta.location}
    </p>
  </div>
}

function DisplayEmployee(params) {
  const empList = params.employeeList;
  console.log(empList);
  const listElement = empList.map((emp) =>
    <Employee key={emp.id} meta={emp}></Employee>
  );
  return (<div>
    {listElement}
  </div>);
}

const employee = [
  { id: 20, name: 'Kiran', location: 'India', salary: '2000k' },
  { id: 25, name: 'Sumit', location: 'India', salary: '2000k' },
  { id: 24, name: 'Rahul', location: 'India', salary: '2000k' },
]

const element = <DisplayEmployee employeeList={employee} ></DisplayEmployee>;
ReactDOM.render(element, document.getElementById("application"));