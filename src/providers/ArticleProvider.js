import React from 'react';

const ArticleContext = React.createContext();

export { ArticleContext };
export default class ArticleProvider extends React.Component {
  static fetchArticles() {
    return fetch(
      'http://localhost:8089/articles',
      {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }
    )
      .then(res => res.json())
      .then(res => res)
      .catch(error => ({ error }));
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    ArticleProvider
      .fetchArticles()
      .then(res => this.setState({ articles: res.items }));
  }

  render() {
    return (
      <ArticleContext.Provider value={this.state.articles}>
        {this.props.children}
      </ArticleContext.Provider>
    );
  }
}
