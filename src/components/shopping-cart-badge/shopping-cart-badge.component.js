import React from 'react';
import { connect } from 'react-redux';
import { allItemsSelector } from '../../reducers/cart';

const ShoppingCartBadge = props => (
  <div className="col-md-6">
    <button type="button" className="btn btn-dark float-right">
      Shopping Cart <span className="badge badge-light">{props.items.reduce((acc, item) => acc + item.amount, 0)}</span>
    </button>
  </div>
);

const mapStateToProps = state => ({ items: allItemsSelector(state) });

export default connect(mapStateToProps)(ShoppingCartBadge);
