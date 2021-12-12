import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      message: '',
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/employees').then(response => response.json())
      .then(result => {
        this.setState({ employees: result.employees })
      });
  }
  createEmployee = () => {
    let emp = {
      name: this.refs.name.value,
      location: this.refs.location.value,
      salary: this.refs.salary.value,
    };
    fetch('http://127.0.0.1:8000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'mode': 'cors',
      },
      body: JSON.stringify(emp),
    }).then(response => response.json())
      .then(result => {
        if (result) {
          this.setState({ message: result.message })
          fetch('http://127.0.0.1:8000/api/employees').then(response => response.json())
            .then(result => {
              this.setState({ employees: result.employees })
            });
        }
      });
  }
  render() {
    return <div>
      <div className='container p-4'>
        <div className='container'>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" ref="name" placeholder="name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" ref="location" placeholder="location" />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input type="number" className="form-control" ref="salary" placeholder="salary" />
          </div>
          <button onClick={this.createEmployee} className='btn btn-info'>
            Create
          </button>

        </div>
        {this.state.message}
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