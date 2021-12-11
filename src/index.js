import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/employees').then(response => response.json())
      .then(result => {
        this.setState({ employees: result.employees })
        console.log(result.employees)
      }
      )
  }
  render() {
    return <div>
      <div className='container p-4'>
        <p>Employees DataBase</p>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.name}</td>
                <td>{emp.location}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  }
}
const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("application"));