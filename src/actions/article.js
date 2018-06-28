export const LOAD_ARTICLES = '@@article/LOAD_ARTICLES';
export const loadArticles = data => ({
  type: LOAD_ARTICLES,
  data
});

export const ADD_ARTICLE = '@@article/ADD_ARTICLE';
export const addArticle = article => ({
  type: ADD_ARTICLE,
  article
});

export const REMOVE_ARTICLE = '@@article/REMOVE_ARTICLE';
export const removeArticle = id => ({
  type: REMOVE_ARTICLE,
  article: { id }
});
