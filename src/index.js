import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.

//Context is primarily used when some data needs to be accessible by many components at different nesting levels.


const employeeContext = React.createContext();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 100,
      Name: "Kiran Badola",
      Location: "India",
      Salary: "1000K"
    }
  }
  change_employee_data = () => {
    this.setState({ Id: 103 })
  }
  render() {
    return <div>

      <p>This is App component</p>
      Employee ID:  {this.state.Id}
      <employeeContext.Provider value={this.state}>
        <Employee></Employee>
      </employeeContext.Provider>
      <button onClick={this.change_employee_data}>Change employee data</button>
    </div>
  }

}

class Employee extends React.Component {
  static context = employeeContext;
  render() {
    return <div>
      <p>This is Employee component</p>
      Employee ID {this.context.Id}
      <Salary></Salary>
    </div>
  }
}
class Salary extends React.Component {
  static context = employeeContext;
  render() {
    return <div>
      <p>This is Salary component</p>
      Employee ID {this.context.Name}
    </div>
  }
}
const elements = <App></App>

ReactDOM.render(elements, document.getElementById('application'))