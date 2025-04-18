import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const { title = '', excerpt = '', date = '', category = '', image = '', readTime = '' } = post || {};
  
  // 格式化日期
  const formattedDate = new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <article className="post-card">
      <div className="post-image">
        <img src={image} alt={title} />
        <span className="post-category">{category}</span>
      </div>
      
      <div className="post-content">
        <div className="post-meta">
          <span className="post-date">{formattedDate}</span>
          <span className="post-read-time">{readTime}阅读</span>
        </div>
        
        <h3 className="post-title">
          <a href={`#/blog/${title}`}>{title}</a>
        </h3>
        
        <p className="post-excerpt">{excerpt}</p>
        
        <a href={`#/blog/${title}`} className="read-more">
          阅读全文 <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </article>
  );
};

export default PostCard;
