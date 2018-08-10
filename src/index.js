// Shopping Site (Pure React Book), with all the exercises solved, 

// Added are a Nav item which shows Number of items in the cart and cart total,
// as well as the empty cart message and total value on the cart page.

import React from "react";
import ReactDOM from "react-dom";
import Nav from './components/Nav';
import { itemsData } from './static-data';
import ItemsPage from './components/ItemsPage';
import CartPage from './components/CartPage';

import "./styles.css";

// App
  // - item Page
  // - Cart Page
  // - Item
  // - Nav

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: [],  // cart is the list of item (with complete info) added by the user
    // We are keeping the cart with complete info of each object, not even filtering duplicates, so that
    //  each cart item can be passed to both CartPage as well as the Nav 
  }

  handleTabChange = (index) => {
    this.setState(() => ({ activeTab: index }));
  }

  handleAddToCart = (item) => {
    this.setState((prevState) => {
      return {
        // here we add full item to the cart, instead of just item id
        // This helps us move the cart state to both Nav and CartPage components
        cart: [...prevState.cart, item]  
      };
    });
  };

  handleRemoveOne = (itemToBeRemoved) => {
    // this.setState((prevState) => {
    //   return {
    //     cart: prevState.cart.filter(id => id !== itemToBeRemoved.id)
    //   }
    // });

    // The above code, which i was trying to use, is not correct as it removed everything that matches with the index
    // Code below is correct for removing only 1 item of a particular index and id.
    let index = this.state.cart.indexOf(itemToBeRemoved);
    this.setState((prevState) => {
      return {
        cart: [
          ...prevState.cart.slice(0, index),
          ...prevState.cart.slice(index + 1)
        ]
      };
    });
  }


  // A method used to calculate cart total from the this.state.cart to 2 decimal places
  calculateCartTotal = (cart) => parseFloat(cart.reduce((acc, x) => acc + x.price, 0).toFixed(2)); 
    
  renderContent() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <ItemsPage 
            items={itemsData}
            onAddToCart={this.handleAddToCart} 
          />
        );
      case 1: 
        return (
          <CartPage
            items={this.state.cart}
            cartTotal={this.calculateCartTotal(this.state.cart)}
            onAddOne={this.handleAddToCart}
            onRemoveOne={this.handleRemoveOne}
            itemsData={itemsData}
          />
        );
      default:
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="app">
        <Nav 
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          cartLength={this.state.cart.length}
          cartTotal={this.calculateCartTotal(this.state.cart)}
        />
        <main className="app__content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
