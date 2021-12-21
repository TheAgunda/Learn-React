
import React from "react";
import reactDom from "react-dom";


//Refs in React 
//Refs Forwarding
//Using ref in functional and class based component

const DemoComponent = React.forwardRef((props, ref) => {
  function testClick() {
    ref.current.focus();
  }
  return (
    <button onClick={testClick}>Click</button>
  )
});



class Elevetor extends React.Component {

  constructor(props) {
    super(props);
    this.elevetorRef = React.createRef();
  }
  render() {

    return (<div>
      <h4>Welcome to Elevetor Ordering screen.</h4>
      <p>
        <label>Elevetor  Name:</label>
        <input type="text" ref={this.elevetorRef} />
      </p>
      <p>
        <label>Elevetor  Speed:</label>
        <input type="text" />
      </p>
      <p>
        <label>Elevetor  Load:</label>
        <input type="text" />
      </p>
      <Summary innerRef={this.elevetorRef}></Summary>
      <DemoComponent ref={this.elevetorRef}></DemoComponent>
    </div>)
  }
}
class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  focusInput = () => {
    this.props.innerRef.current.focus();
  }
  render() {
    return (<div>
      <h4>Order Summary</h4>
      <p onClick={this.focusInput}>
        <label>Elevetor  Name:</label>
        <b>Product Name</b>
      </p>
      <p>
        <label>Elevetor  Speed:</label>
        <b> 10 m/s
        </b>
      </p>
      <p>
        <label>Elevetor  Load:</label>
        <b> 550 Kg
        </b>
      </p>
    </div>)
  }
}

function testComponent() {
  let testRef = null;
  function handleClick() {
    testRef.focus();
  }
  return (<div>
    <input type="text" ref={e => testRef = e} />
    <input type="button" value="Focus the test input " onClick={handleClick} />
  </div>)
}


const app = <Elevetor></Elevetor>
reactDom.render(app, document.getElementById('application'))