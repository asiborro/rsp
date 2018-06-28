import React from 'react';
import { connect } from 'react-redux';
import { allArticlesSelector } from '../../reducers/article';
import { addItem } from '../../actions/cart';

const ShoppingCartList = (props) => {
  const articleList = props.articles.map(article => (
    <li key={article.id} className="list-group-item">
      {article.name}
      <button
        className="btn btn-primary float-right"
        onClick={() => props.addItem(article.id, 1)}
        type="button"
      >
        Add
      </button>
    </li>
  ));

  return (
    <div className="col-md-6">
      <ul className="list-group">
        {articleList}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ articles: allArticlesSelector(state) });
const mapDispatchToProps = { addItem };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartList);
