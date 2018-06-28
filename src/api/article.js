const ARTICLES_ENDPOINT = 'http://localhost:8089/articles';

const apiFetchArticles = () =>
  fetch(
    ARTICLES_ENDPOINT,
    {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(error => ({ error }));

export default apiFetchArticles;
