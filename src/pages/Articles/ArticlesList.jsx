import React from 'react';
import { Link } from 'react-router-dom';
import './articles.css'


const ArticlesList = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-list-item">
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
