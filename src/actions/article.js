export const LOAD_ARTICLES = '@@article/LOAD_ARTICLES';
export const loadArticles = articles => ({
  type: LOAD_ARTICLES,
  articles
});

export const INC_STOCK = '@@article/INC_STOCK';
export const incStock = id => ({
  type: INC_STOCK,
  id
});

export const DEC_STOCK = '@@article/DEC_STOCK';
export const decStock = id => ({
  type: DEC_STOCK,
  id
});
