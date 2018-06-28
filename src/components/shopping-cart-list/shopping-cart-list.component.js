import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/cart';

const ShoppingCartList = props => (
  <div className="col-md-6">
    <ul className="list-group">
      {
        props.articles.map(article => (
          <li key={article.id} className="list-group-item">
            {article.name} - {article.stock}
            <button type="button" className="btn btn-primary float-right" onClick={() => props.addItem(article.id)}>Add</button>
          </li>
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  articles: state.article
});

export default connect(mapStateToProps, { addItem })(ShoppingCartList);
