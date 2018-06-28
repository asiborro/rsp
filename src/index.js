import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ArticleProvider from './providers/ArticleProvider';
import CartProvider from './providers/CartProvider';

ReactDOM.render(
  <ArticleProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ArticleProvider>,
  document.getElementById('root')
);
