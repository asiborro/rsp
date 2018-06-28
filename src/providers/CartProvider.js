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
      articles: {
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
    return Object.keys(this.state.articles).map(id => this.state.articles[id]);
  }

  addArticle(item) {
    this.setState({
      articles: {
        ...this.state.articles,
        [item.id]: {
          ...this.state.articles[item.id],
          amount: this.state.articles[item.id] ? this.state.articles[item.id].amount + 1 : 0
        }
      }
    });
  }

  removeArticle(articleId) {
    const newState = {
      ...this.state,
      articles: {
        ...this.state.articles
      }
    };
    delete newState.articles[articleId];

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
