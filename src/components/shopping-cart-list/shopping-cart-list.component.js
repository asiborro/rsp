import React from 'react';
import { connect } from 'react-redux';

const ShoppingCartList = ({ articles }) => (
  <div className="col-md-6">
    <ul className="list-group">
      {
        articles.map(article => (
          <li key={article.id} className="list-group-item">
            {article.name}
            <button type="button" className="btn btn-primary float-right">Add</button>
          </li>
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  articles: state.article
});

export default connect(mapStateToProps)(ShoppingCartList);
