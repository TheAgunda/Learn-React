
import React from "react";
import reactDom from "react-dom";



//Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
/*

static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  return { hasError: true };
}

componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  logErrorToMyService(error, errorInfo);
}
*/
class CustomErrorBoundary extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hasError: null,
    }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //logErrorToMyService(error, errorInfo);
    console.log(error);
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (<div className="alert alert-danger" role="alert">
        We are having problem to load your preferrences now.
      </div>);

    }
    return this.props.children;

  }
}


class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      quantity: '',
      address: ''
    }
  }
  orderInfoChange = (qty) => {
    this.setState({ quantity: qty })
  }
  addressChange = (add) => {
    this.setState({ address: add })
  }
  render() {

    return <div className="container">
      <h1 className="h6">Order Component</h1>
      <ProductInformationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChange}></ProductInformationComponent>
      <AddressComponent address={this.state.address} onAddressChange={this.addressChange}></AddressComponent>
      <SummaryComponent address={this.state.address} quantity={this.state.quantity} onQuantityChange={this.orderInfoChange}></SummaryComponent>
    </div>
  }
}

class ProductInformationComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onQuantityChange(e.target.value);

  }
  render() {
    return (<div className="card mt-3">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Select Food</label>
          <select className="form-select form-select-sm">
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="fast food">Fast Food</option>
            <option value="food">Food</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Quantity</label>
          <input type="text" className="form-control form-control-sm" value={this.props.quantity} onChange={this.handleChange} />
        </div>
      </div>
    </div>)
  }
}


class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onAddressChange(e.target.value)
  }
  render() {
    return (<div className="card mt-3">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea value={this.props.address} onChange={this.handleChange} className="form-control form-control-sm" rows="3"></textarea>
        </div>
        <CustomErrorBoundary>
          <UserPreferredAddress></UserPreferredAddress>
        </CustomErrorBoundary >
      </div>
    </div>)
  }
}


class UserPreferredAddress extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    throw new Error("Not able to load the address list");
    return (<div>
      <div className="mb-3">
        <label className="form-label">Existing Address</label>
        <p>
          ARI Office <br />
          Near ODF,
          India,
        </p>
      </div>
    </div>)
  }
}

class SummaryComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {

    this.props.onQuantityChange(e.target.value)
  }
  render() {

    return (<div className="card mt-3">
      <div className="card-body"><div>
        <label className="form-label">Product Name:</label> Food<br />
        <label className="form-label">Product Qty:</label>  <br />

        <input type="text" value={this.props.quantity} onChange={this.handleChange} className="form-control form-control-sm" />

        <label className="form-label">Address:</label>
        <p>
          <b>{this.props.address}</b><br />
        </p>
        <button className="btn btn-info"> Place Order</button>
      </div>
      </div>
    </div>)
  }
}

const app = <OrderComponent></OrderComponent>
reactDom.render(app, document.getElementById('application'))