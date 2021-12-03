import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const elements = (
  <div className="first-element">
    <h1>
      Test code 
    </h1>
    <h1>
      Test code  2
    </h1>
  </div>
);

ReactDOM.render(elements, document.getElementById('application'));