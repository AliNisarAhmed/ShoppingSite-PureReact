import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = ({ item, children }) => (
  <div className="item">
    <div className="item__left">
      <div className="item__image" />
      <div className="item__left-text">
        <div className="item__title">
          {item.name}
        </div>
        <div className="item__description">
          {item.description}
        </div>
      </div>
    </div>
    <div className="item__right">
      <div className="item__price">
        ${item.price}
      </div>
      {children}
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Item;

