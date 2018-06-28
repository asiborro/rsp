import React from 'react';

const CartContext = React.createContext();

export { CartContext };

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props);

    /* eslint-disable */
    this.addArticle = this.addArticle.bind(this),
    this.removeArticle = this.removeArticle.bind(this),
    this.getCartItems = this.getCartItems.bind(this),
    /* eslint-enable */

    this.state = {
      items: {
        1: {
          id: 1,
          name: 'Article 1',
          description: 'Description 1',
          amount: 1,
          price: 2.99
        },
        2: {
          id: 2,
          name: 'Article 2',
          description: 'Description 2',
          amount: 1,
          price: 9.99
        },
        3: {
          id: 3,
          name: 'Article 2',
          description: 'Description 2',
          amount: 1,
          price: 18.99
        },
      }
    };
  }

  getCartItems() {
    return Object.keys(this.state.items).map(id => this.state.items[id]);
  }

  addArticle(item) {
    this.setState({
      items: {
        ...this.state.items,
        [item.id]: {
          ...this.state.items[item.id],
          amount: this.state.items[item.id] ? this.state.items[item.id].amount + 1 : 0
        }
      }
    });
  }

  removeArticle(articleId) {
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
      addArticle: this.addArticle,
      removeArticle: this.removeArticle,
      getCartItems: this.getCartItems,
    };

    return (
      <CartContext.Provider value={value}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
