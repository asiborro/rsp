import React from 'react';

const ShoppingCartList = () => (
  <div className="col-md-6">
    <ul className="list-group">
      <li className="list-group-item">
        Some article name
        <button type="button" className="btn btn-primary float-right">Add</button>
      </li>
    </ul>
  </div>
);

export default ShoppingCartList;
