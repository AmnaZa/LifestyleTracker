import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';
import { articlesData } from './articles-data';
 


const Articles = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ArticlesList articles={articlesData} />} />
        
        <Route path="/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

export default Articles;
