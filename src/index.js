import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      employee: {
        name: '',
        salary: '',
        location: '',
      },
      message: '',
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/employees').then(response => response.json())
      .then(result => {
        this.setState({ employees: result.employees })
      });
  }
  inputChangeEventHandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      employee: {
        ...this.state.employee,
        [name]: value,
      }
    })
  }
  createEmployee = () => {
    let emp = this.state.employee;
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
        <div className='row mb-4'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <h5>Create New Employee</h5>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" placeholder="name" value={this.state.employee.name} onChange={this.inputChangeEventHandeler} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" name="location" placeholder="location" value={this.state.employee.location} onChange={this.inputChangeEventHandeler} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input type="number" className="form-control" name="salary" placeholder="salary" value={this.state.employee.salary} onChange={this.inputChangeEventHandeler} />
                </div>
                <button onClick={this.createEmployee} className='btn btn-info'>
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <p>Employees DataBase</p>
            {this.state.message}
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
      </div>
    </div >
  }
}
const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("application"));