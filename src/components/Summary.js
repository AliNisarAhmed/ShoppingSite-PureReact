import React from 'react';

import "./Summary.css";

const Summary = ({ cartLength, cartTotal, onTabChange }) => (
  <div className="summary">
    <a onClick={() => onTabChange(1)}>
      <i className="fa fa-shopping-cart"></i>
      <p>{cartLength} Items </p>
      <p>(${cartTotal})</p>
    </a>
  </div>
);

export default Summary;