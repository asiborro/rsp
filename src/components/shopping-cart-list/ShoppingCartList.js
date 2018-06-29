import React from 'react';

const ShoppingCartList = ({ articles, cartService }) => (
  <div className="col-md-6">
    <ul className="list-group">
      {
        articles.map(article => (
          <li key={article.id} className="list-group-item">
            {article.name}
            <button
              onClick={() => cartService.addItem(article)}
              className="btn btn-primary float-right"
              type="button"
            >
              Add
            </button>
          </li>
        ))
      }
    </ul>
  </div>
);

export default ShoppingCartList;
