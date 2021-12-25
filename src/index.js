
import React from "react";
import reactDom from "react-dom";



//Higher Order Components in React
// class EmployeeRecords extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     }
//   }
//   componentDidMount() {
//     fetch('http://localhost:8000/api/employees').then(response => response.json()).then(result => {
//       this.setState({ employees: result.employees })
//     })
//   }
//   render() {
//     return (<div className="container mt-3">
//       <h4>Employees</h4>
//       <table class="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Location</th>
//             <th scope="col">Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.employees.map(employee => (
//             <tr key={employee.id}>
//               <th scope="row">{employee.id}</th>
//               <th scope="row">{employee.name}</th>
//               <td >{employee.location}</td>
//               <td>{employee.salary}</td>

//             </tr>
//           ))}

//         </tbody>
//       </table>

//     </div>)
//   }
// }


// class DepartmentRecords extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       departments: [],
//     }
//   }
//   componentDidMount() {
//     fetch('http://localhost:8000/api/departments').then(response => response.json()).then(result => {
//       this.setState({ departments: result.departments })
//     })
//   }
//   render() {
//     return (<div className="container mt-3">
//       <h4>Departments</h4>
//       <table class="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Revenue</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.departments.map(department => (
//             <tr key={department.id}>
//               <th scope="row">{department.id}</th>
//               <th scope="row">{department.name}</th>
//               <td >{department.revenue}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>)
//   }
// }



// small version of above components
function reportsHOC(InputComponent, inputData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        columns: inputData.columns,
        header: inputData.header,
      }
    }
    componentDidMount() {
      fetch(inputData.url).then(res => res.json()).then(result => {
        this.setState({ data: result.data })
      })
    }
    render() {
      return (<div>
        <Data data={this.state}>
        </Data>
      </div>)
    }
  }
}
class Data extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      this.props.data.columns.map(c => {
        console.log(c)
      })
    }
    return (
      <div>
        <h1>{this.props.data.header}</h1>
        <table >
          <thead>
            <tr>
              {this.props.data.columns.map((c) => {
                (<th>{c}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {/* {this.props.data.data.map((r) => {
              <tr key={r.id}>
                {this.props.data.columns.map(c => {
                  <td>{r[c]}</td>
                })}
              </tr>
            })} */}
          </tbody>
        </table>
      </div >

    )
  }
}
class Reports extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
const EmployeeRecords = reportsHOC(Reports, {
  url: 'http://localhost:8000/api/employees',
  columns: ["Id", "Name", "Salary", "Location"],
  header: "Employee Data"
});

const DepartmentRecords = reportsHOC(Reports, { url: 'http://localhost:8000/api/departments', columns: ["Id", "Name", "Revenue"], header: "Departments Data" })

class AdminDashboard extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <h4>Dasboard</h4>
      <React.Fragment>
        <EmployeeRecords></EmployeeRecords>
        <DepartmentRecords></DepartmentRecords>
      </React.Fragment>
    </div>)
  }
}


const app = <AdminDashboard></AdminDashboard>
reactDom.render(app, document.getElementById('application'))