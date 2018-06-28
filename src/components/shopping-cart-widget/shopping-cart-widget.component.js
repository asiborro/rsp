import React from 'react';
import { connect } from 'react-redux';
import { allItemsSelector } from '../../reducers/cart';
import { removeItem } from '../../actions/cart';

const ShoppingCartWidget = props => (
  <div className="col-md-12">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th className="text-center">Price</th>
          <th className="text-center">Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
          props.items.map(item => (
            <tr key={item.articleId}>
              <td className="col-sm-8 col-md-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="media-heading">{item.name} #{item.articleId}</h4>
                  </div>
                </div>
              </td>
              <td className="col-sm-1 col-md-1">
                <input type="number" className="form-control" value={item.amount} onChange={() => { }} />
              </td>
              <td className="col-sm-1 col-md-1 text-center"><strong>{(item.price).toFixed(2)}</strong></td>
              <td className="col-sm-1 col-md-1 text-center"><strong>{(item.amount * item.price).toFixed(2)}€</strong></td>
              <td className="col-sm-1 col-md-1">
                <button type="button" className="btn btn-danger" onClick={() => props.removeItem(item.articleId)}>
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
            <h3>
              {props.items.reduce((acc, item) => acc + (item.amount * item.price), 0).toFixed(2)}€
            </h3>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);


const mapStateToProps = state => ({ items: allItemsSelector(state) });
const mapDispatchToProps = { removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartWidget);
