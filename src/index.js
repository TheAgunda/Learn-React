import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//parent element 
//properties 
//childElement

const element = React.createElement('div', { className: "first-element" },
  React.createElement('h1', null, "hello world !"),
  React.createElement("h3", { className: 'true' }, "hi, TheAgunda...")
);

ReactDOM.render(element, document.getElementById('application'));