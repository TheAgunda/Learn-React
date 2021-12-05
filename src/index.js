import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Passing the data between child and parent component...
//Interaction between components
class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      updateSalary: null,
    }
  }
  getUpdatedSalary = (salary) => {
    this.setState({ updateSalary: salary });
  }
  render() {
    return <div>
      <h1>Employee information</h1>
      <p>Name: <b>{this.props.Name}</b></p>
      <p>Email: <b>{this.props.Email}</b></p>
      <p>Location: <b>{this.props.Location}</b></p>
      <p>Salary: <b>{this.props.Salary}</b></p>
      <p>Updated Salary: <b>{this.state.updateSalary}</b></p>
      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}>
      </Salary>
    </div>

  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.BasicSalary,
      hra: this.props.HRA,
      sa: this.props.SpecialAllowance,
    }
  }
  updateSalary = () => {
    let salary = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value) + parseInt(this.refs.sa.value)
    this.props.onSalaryChanged(salary);
  }
  render() {
    return <div>
      <h1>Salary information</h1>
      <p>
        Basic Salary : <br />
        <input type="text" ref="basic" defaultValue={this.state.basic} />
      </p>
      <p>
        HRA : <br />
        <input type="text" ref="hra" defaultValue={this.state.hra} />
      </p>
      <p>
        Special Allowance : <br />
        <input type="text" ref="sa" defaultValue={this.state.sa} />
      </p>
      <button onClick={this.updateSalary}>Update</button>
    </div>
  }
}

const element = <Employee Name="Kiran Badola" Email="badolakiran96@gmail.com" Location="India" Salary="200000" BasicSalary="160000" HRA="20000" SpecialAllowance="20000" ></Employee>
ReactDOM.render(element, document.getElementById('application'))