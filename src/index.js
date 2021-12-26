
import React, { Component, Profiler } from "react";
import ReactDOM from "react-dom";



//Render Props in React
class DisplayData extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.list.map(d => (
          <li>{d}</li>
        ))}
      </ul>
    );
  }
}



class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Dev', 'Big Data', 'Mobility']
    };
  }

  render() {
    return (
      <div>
        <h2>Department List...</h2>
        {this.props.render(this.state.list)}
      </div>
    );
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Projects List...</h2>
        {this.props.render(this.props.list)}
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Department render={(data) => <DisplayData list={data}></DisplayData>}></Department>
        <Project render={(data) => <DisplayData list={['P-1', 'P-2', 'P-3']}></DisplayData>}></Project>
      </React.Fragment>
    )
  }
}

class DisplayEmployees extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {this.props.employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.location}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}


class EmployeeReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/employees")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.data
          });
        }
      );
  }
  render() {
    return (
      <div>
        <h2>Employees Data...</h2>
        {this.props.content(this.state.employees)}
      </div>
    );
  }
}
// const element = <Page></Page>
const element = <EmployeeReports content=

{(input)=><DisplayEmployees employees={input}></DisplayEmployees>}>                    

</EmployeeReports>
ReactDOM.render(element, document.getElementById('application'))