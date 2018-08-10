import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import './ItemsPage.css';

const ItemsPage = ({ items, onAddToCart }) => (
  <ul className="itemsPage__items">
    {
      items.map(item => {
        return (
          <li key={item.id} className="itemsPage__item">
            <Item item={item}>
              <button 
                className="item__addToCart"
                onClick={() => onAddToCart(item)}
              >
              Add to Cart
              </button>
            </Item>
          </li>
        );
      })
    }
  </ul>  
);

ItemsPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemsPage;