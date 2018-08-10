import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const CartPage = ({ items, onRemoveOne, onAddOne, cartTotal, itemsData }) => {
  
  // items prop is the cart items array which keeps all objects in the cart as separate, 
  // cartItems below adds a count property to each cartItem from items so that we can avoid duplication in cart

  let cartIDs = items.map(item => item.id);
  
  let cartCounts = cartIDs.reduce((acc, id) => {
    acc[id] = acc[id] || 0;
    acc[id]++;
    return acc;
  }, {});
  
  let cartItems = Object.keys(cartCounts).map(itemId => {
    // Find the complete item details by its id in the itemData
    let item = itemsData.find(soughtItem => soughtItem.id === parseInt(itemId, 10));

    // Create a new item with an additional count property

    return {
      ...item,
      count: cartCounts[itemId]
    };
  });


  if (cartTotal === 0) {
    return (
      <div className="cartPage__emptyCart">
        <h4>Your Cart is empty!</h4>
        <h4>Why dont you add some expensive items to it?</h4>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <ul className="cartPage__items">
          {cartItems.map(item => {
            return (
              <li className="cartPage__item" key={item.id}>
                <Item item={item}>
                  <div className="cartItem__controls">
                    <button
                      className="cartItem__removeOne"
                      // We cannot send item to onRemoveOne directly as it is not the same as the objects in the cart (it has additional count property)
                      // Hence we use find to find the matching object inside the cart, and send it to onRemoveOne
                      onClick={() => onRemoveOne(items.find(cartItem => cartItem.id === item.id))}  
                    >
                      &ndash;
                </button>
                    <span className="cartItem__count">{item.count}</span>
                    <button
                      className="cartItem__addOne"
                      onClick={() => onAddOne(item)}
                    >
                      +
                </button>
                  </div>
                </Item>
              </li>
            );
          })}
        </ul>
        {cartTotal > 0 &&
          <div className="cartPage__total">
            <span>Total: ${cartTotal}</span>
          </div>
        }
      </React.Fragment>  
    );
  }
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;