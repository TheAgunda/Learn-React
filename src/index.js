import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//State in react..

class CountCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      counter:10
    };
  }
  onMessageChange(text) {
    console.log( )
    this.setState({
      message: "Number of character is text is " + text.length + "."
    })
  }
  render() {
    return <div>

      <h1>
        Count CountCharacter
      </h1>
      <p>
        Enter character
      </p>
      <input type="text" onChange={e => this.onMessageChange(e.target.value)} />
      <label>{this.state.message}</label>
      <label>{this.state.counter}</label>
    </div>
  }
}


class Employee extends React.Component {

  state = { counter: 0 };
  add_employee = () => {
    this.setState({ counter: this.state.counter + 1 })
    // this.counter = this.counter + 1;
    // alert("adding a new employee");
    // alert("Button is clicked " + this.counter + ' times.')

  }

  render() {
    return <div>
      <h1>Welcome to Employee Component</h1>
      <p>Button is clicked {this.state.counter} times.</p>
      <button onClick={this.add_employee}>Add Employee</button>
    </div>
  }
}


const element = <CountCharacter></CountCharacter>

ReactDOM.render(element, document.getElementById('application'))