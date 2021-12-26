
import React from "react";
import ReactDOM from "react-dom";



//Portals in React
class Employee extends React.Component {
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
  editEmployee = () => {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    return (
      <div className="container">
        <h2>Employees Data...</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.location}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={this.editEmployee} className="btn btn-sm btn-danger">Edit</button>
                  <Modal open={this.state.showModal} close={this.editEmployee}>
                    <EmployeeModal employee={emp} name={emp.name}></EmployeeModal>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.open ? ReactDOM.createPortal(
        <div className="container">
          <div className="card mt-3">
            <div className="card-body">
              <button onClick={this.props.close} type="button" className="btn-close" aria-label="Close"></button>
              {this.props.children}
            </div></div></div>, document.body) : null
    );
  }
}

class EmployeeModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h5 class="card-title">{this.props.name} Details...</h5>
        <p>
          <label>Employee ID : <input type="text" className="form-control form-control-sm" value={this.props.employee.id}></input></label>
        </p>
        <p>
          <label>Employee Name : <input type="text" className="form-control form-control-sm" value={this.props.employee.name}></input></label>
        </p>
        <p>
          <label>Employee Location : <input type="text" className="form-control form-control-sm" value={this.props.employee.location}></input></label>
        </p>
        <p>
          <label>Employee Salary : <input type="text" className="form-control form-control-sm" value={this.props.employee.salary}></input></label>
        </p>
        <input type="submit" value="Save" className="btn btn-sm btn-primary"></input>
      </div>
    )
  }
}


const app = <Employee></Employee>
ReactDOM.render(app, document.getElementById('application'))