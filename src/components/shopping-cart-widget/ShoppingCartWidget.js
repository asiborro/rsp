import React from 'react';

const ShoppingCartWidget = ({ items, removeItem }) => (
  <div className="col-md-12">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Article</th>
          <th>Quantity</th>
          <th className="text-center">Price</th>
          <th className="text-center">Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
          items.map(item => (
            <tr key={item.id}>
              <td className="col-sm-8 col-md-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="media-heading">{item.name}</h4>
                  </div>
                </div>
              </td>
              <td className="col-sm-1 col-md-1 text-right"><strong>{item.amount}</strong></td>
              <td className="col-sm-1 col-md-1 text-right"><strong>{(item.price).toFixed(2)}€</strong></td>
              <td className="col-sm-1 col-md-1 text-right"><strong>{(item.amount * item.price).toFixed(2)}€</strong></td>
              <td className="col-sm-1 col-md-1">
                <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))
        }
        <tr>
          <td />
          <td />
          <td />
          <td>
            <h3>Total</h3>
          </td>
          <td className="text-right">
            <h3>0€</h3>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ShoppingCartWidget;
