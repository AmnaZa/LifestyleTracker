import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { articlesData } from './articles-data';
import './articles.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === parseInt(id));

  // Move the useState hooks to the top of the component
  const [comments, setComments] = useState(article.comments);
  const [newComment, setNewComment] = useState('');

  if (!article) {
    return <div className="article-detail">Article not found</div>;
  }

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const currentDate = new Date().toLocaleDateString();
      const newCommentData = {
        name: 'Anonymous',
        date: currentDate,
        text: newComment,
      };

      setComments([...comments, newCommentData]);
      setNewComment('');
    }
  };

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p className="article-date">Published on {article.date}</p>
      <p className="article-content">{article.content}</p>

      <h2>Comments</h2>
      <ul className="article-comments">
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            <p className="comment-date">{comment.date}</p>
            <p className="comment-text">{comment.text}</p>
          </li>
        ))}
      </ul>

      <form className="comment-form">
        <textarea
          rows="4"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="button" onClick={handleAddComment}>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default ArticleDetail;
