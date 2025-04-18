import React from 'react';
import './WorkCard.css';

const WorkCard = ({ work }) => {
  const { title = '', description = '', image = '', category = [], link = '' } = work || {};
  
  return (
    <article className="work-card">
      <div className="work-image">
        <img src={image} alt={title} />
        <div className="work-overlay">
          <div className="work-actions">
            <a href={link} target="_blank" className="view-work">查看详情</a>
          </div>
        </div>
      </div>
      
      <div className="work-content">
        {
          category.map(item => (
            <span className="work-category" key={item}>{item}</span>
          ))
        }
        
        <h3 className="work-title">
          <a href={link} target="_blank">{title}</a>
        </h3>
        <p className="work-description">{description}</p>
      </div>
    </article>
  );
};

export default WorkCard;
