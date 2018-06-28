import React from 'react';

const CartContext = React.createContext();

export { CartContext };

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props);

    /* eslint-disable */
    this.addItem = this.addItem.bind(this),
    this.removeItem = this.removeItem.bind(this),
    this.getCartItems = this.getCartItems.bind(this),
    /* eslint-enable */

    this.state = {
      items: {}
    };
  }

  getCartItems() {
    return Object.keys(this.state.items).map(id => this.state.items[id]);
  }

  addItem(item) {
    const newItems = { ...this.state.items };
    const amount = typeof newItems[item.id] !== 'undefined' ? newItems[item.id].amount + 1 : 1;
    newItems[item.id] = { ...item, amount };
    this.setState({
      items: newItems
    });
  }

  removeItem(articleId) {
    const newState = {
      ...this.state,
      items: {
        ...this.state.items
      }
    };
    delete newState.items[articleId];

    this.setState({ ...newState });
  }

  render() {
    const value = {
      ...this.state,
      addItem: this.addItem,
      removeItem: this.removeItem,
      getCartItems: this.getCartItems,
    };

    return (
      <CartContext.Provider value={value}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
