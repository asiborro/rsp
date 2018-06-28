import React from 'react';
import { CartContext } from '../../providers/CartProvider';

const ShoppingCartBadge = () => (
  <div className="col-md-6">
    Shopping Cart
      <button type="button" className="btn btn-dark float-right">
      <CartContext.Consumer>
        {
          context => <span className="badge badge-light">{context.getCartItems().reduce((acc, item) => acc + item.amount, 0)}</span>
        }
      </CartContext.Consumer>
    </button>
  </div>
);

export default ShoppingCartBadge;
