import React from 'react';
import { ArticleContext } from '../../providers/ArticleProvider';

const ShoppingCartList = () => (
  <div className="col-md-6">
    <ul className="list-group">
      <ArticleContext.Consumer>
        {
          ({ articles }) => articles.map(article => (
            <li key={article.id} className="list-group-item">
              {article.name}
              <button
                className="btn btn-primary float-right"
                type="button"
              >
                Add
              </button>
            </li>
          ))
        }
      </ArticleContext.Consumer>
    </ul>
  </div>
);

export default ShoppingCartList;
