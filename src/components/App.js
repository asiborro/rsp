import React from 'react';
import ShoppingCartList from './shopping-cart-list/ShoppingCartList';
import ShoppingCartBadge from './shopping-cart-badge/ShoppingCartBadge';
import ShoppingCartWidget from './shopping-cart-widget/ShoppingCartWidget';
import { ArticleContext } from '../providers/ArticleProvider';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <hr />
      </div>
    </div>
    <div className="row">
      <ArticleContext.Consumer>
        {
          (articles) => <ShoppingCartList articles={articles} />
        }
      </ArticleContext.Consumer>
      <ShoppingCartBadge />
    </div>
    <div className="row">
      <div className="col-md-12">
        <hr />
      </div>
    </div>
    <div className="row">
      <ShoppingCartWidget />
    </div>
  </div>
);

export default App;
