import React from "react";
import reactDom from "react-dom";



//Lifting State Up in React
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

    return <div>
      Order Component
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

    return <div>
      <p>
        Product Component
      </p>
      <select>
        <option value="food">Food</option>
        <option value="drink">Drink</option>
        <option value="fast food">Fast Food</option>
        <option value="food">Food</option>
      </select>
      <p>
        <label>Enter Quantity</label>
      </p>
      <input type="text" value={this.props.quantity} onChange={this.handleChange} />
    </div>
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

    return <div>
      <p>
        Address Component
      </p>
      <textarea value={this.props.address} onChange={this.handleChange}></textarea>

    </div>
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

    return <div>
      <p>
        Product Name : Food<br />
      </p>
      <p>
        Product Qty : 1<br />
      </p>
      <input type="text" value={this.props.quantity} onChange={this.handleChange} />
      <p>
        Address: {this.props.address}

      </p>
      <button> Place Order</button>
    </div>
  }
}

const app = <OrderComponent></OrderComponent>
reactDom.render(app, document.getElementById('application'))