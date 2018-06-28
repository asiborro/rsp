import React from 'react';

const ShoppingCartBadge = props => (
  <div className="col-md-6">
    <button type="button" className="btn btn-dark float-right">
      Shopping Cart <span className="badge badge-light">{props.items.reduce((acc, item) => acc + item.amount, 0)}</span>
    </button>
  </div>
);

export default ShoppingCartBadge;
