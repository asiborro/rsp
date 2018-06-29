import React from 'react';
import ShoppingCartList from './shopping-cart-list/ShoppingCartList';
import ShoppingCartBadge from './shopping-cart-badge/ShoppingCartBadge';
import ShoppingCartWidget from './shopping-cart-widget/ShoppingCartWidget';
import { ArticleContext } from '../providers/ArticleProvider';
import { CartContext } from '../providers/CartProvider';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <hr />
      </div>
    </div>
    <div className="row">

      <ArticleContext.Consumer>
        {articles => (
          <CartContext.Consumer>
            {cartService => (
              <ShoppingCartList articles={articles} cartService={cartService} />
            )}
          </CartContext.Consumer>
        )}
      </ArticleContext.Consumer>

      <CartContext.Consumer>
        {cartService => (<ShoppingCartBadge cartService={cartService} />)}
      </CartContext.Consumer>

    </div>
    <div className="row">
      <div className="col-md-12">
        <hr />
      </div>
    </div>
    <div className="row">
      <CartContext.Consumer>
        {cartService => (
          <ShoppingCartWidget cartService={cartService} />
        )}
      </CartContext.Consumer>
    </div>
  </div>
);

export default App;
