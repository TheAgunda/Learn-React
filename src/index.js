
import React, { Component, Profiler } from "react";
import ReactDOM from "react-dom";



//Profiler in React

class HtmlColor extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Color</th>
            <th scope="col">Hexa Color</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><input type="color" value="#df6c4f"></input></td>
            <td>#df6c4f</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><input type="color" value="#49c5b6"></input></td>
            <td>#49c5b6</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><input type="color" value="#3c948b"></input></td>
            <td>#3c948b</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td><input type="color" value="#1a99aa"></input></td>
            <td>#1a99aa</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><input type="color" value="#ecd06f"></input></td>
            <td>#ecd06f</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td><input type="color" value="#2779a7"></input></td>
            <td>#2779a7</td>
            <td>awwwards.com</td>
          </tr>

          <tr>
            <th scope="row">7</th>
            <td><input type="color" value="#d14836"></input></td>
            <td>#d14836</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td><input type="color" value="#e6eaea"></input></td>
            <td>#e6eaea</td>
            <td> awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td><input type="color" value="#8154ef"></input></td>
            <td>#8154ef</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td><input type="color" value="#ff4e4e"></input></td>
            <td>#ff4e4e</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td><input type="color" value="#9fd2d6"></input></td>
            <td>#9fd2d6</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td><input type="color" value="#f05f70"></input></td>
            <td>#f05f70</td>
            <td>awwwards.com</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td><input type="color" value="#00fca3"></input></td>
            <td>#00fca3</td>
            <td>awwwards.com</td>
          </tr>
        </tbody>
      </table>

    </div>)
  }
}

class NewAccountReports extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      FromDate: '',

      ToDate: ''

    };

  }



  handleChange = e => {

    let name = e.target.name;

    let value = e.target.value;

    this.setState({

      [name]: value

    });

  }

  render() {

    return (

      <div>

        <h2>Welcome to New Accounts Reports Component...</h2>

        <p>

          <label>From Date : <input type="text" name="FromDate"

            onChange={this.handleChange} value={this.state.FromDate}></input></label>

        </p>

        <p>

          <label>To Date : <input type="text" name="ToDate"

            onChange={this.handleChange} value={this.state.ToDate}></input></label>

        </p>

        <input type="submit" value="Generate"></input>

      </div>

    )

  }

}



class LoansRepaymentReports extends React.Component {

  constructor(props) {

    super(props);

  }



  render() {

    return (

      <div>

        <h2>Welcome to Loans Repayment Reports Component...</h2>

      </div>

    );

  }

}



class ReportsDashboard extends React.Component {

  constructor(props) {

    super(props);

  }




  callbackFunction = (id, phase, actualDuration, baseDuration, startTime,

    commitTime, interaction) => {

    console.log('Id is : ' + id + ', Phase is : ' + phase);

    console.log('Actual Duration is : ' + actualDuration + ' and Base Duration is :' +

      baseDuration);

  }
  render() {

    return (

      <React.Fragment>

        <h2>Welcome to Reports Dashboard...</h2>

        <Profiler id="newAccounts" onRender={this.callbackFunction}>

          <NewAccountReports></NewAccountReports>

        </Profiler>
        <Profiler id="loanReplaymentReports" onRender={this.callbackFunction}>
          <LoansRepaymentReports></LoansRepaymentReports>
        </Profiler>
      </React.Fragment>

    );

  }

}

const element = <ReportsDashboard></ReportsDashboard>
ReactDOM.render(element, document.getElementById('application'))