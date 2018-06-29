import React from 'react';

const ShoppingCartBadge = ({ cartService }) => (
  <div className="col-md-6">
    <button type="button" className="btn btn-dark float-right">
      Shopping Cart <span className="badge badge-light">{cartService.getCartAmount()}</span>
    </button>
  </div>
);

export default ShoppingCartBadge;
