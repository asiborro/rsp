import React from 'react';
import ShoppingCartList from './shopping-cart-list/shopping-cart-list.component';
import ShoppingCartBadge from './shopping-cart-badge/shopping-cart-badge.component';
import ShoppingCartWidget from './shopping-cart-widget/shopping-cart-widget.component';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <hr />
      </div>
    </div>
    <div className="row">
      <ShoppingCartList />
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
