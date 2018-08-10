import React from 'react';
import Summary from './Summary';

import './Nav.css';

const Nav = ({ activeTab, onTabChange, cartLength, cartTotal }) => (
  <nav className="app__nav">
    <ul>
      <li 
        className={`app__nav-item ${activeTab=== 0 && 'selected'}`}
      >
        <a onClick={() => onTabChange(0)}>Items</a>
      </li>
      <li 
        className={`app__nav-item ${activeTab === 1 && 'selected'}`}
      >
        <a onClick={() => onTabChange(1)}>Cart</a>
      </li>
    </ul>
    <Summary 
      cartLength={cartLength}
      cartTotal={cartTotal}
      onTabChange={onTabChange}
    />
  </nav>
);

export default Nav;