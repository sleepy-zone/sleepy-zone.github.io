import React from 'react';
import './index.css';

const ThoughtCard = ({ thought = {} }) => {

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'idea': return 'fa-lightbulb';
      case 'thought': return 'fa-brain';
      case 'quote': return 'fa-quote-right';
      case 'dream': return 'fa-star';
      default: return 'fa-comment';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'idea': return '创意';
      case 'thought': return '思考';
      case 'quote': return '引言';
      case 'dream': return '梦想';
      default: return '想法';
    }
  };

  return (
    <div className={`thought-card ${thought.category}`}>
      <div className="card-header">
        <div className="user-info">
          <div className="avatart" style={{ backgroundImage: `url(${thought.avatar})` }}></div>
          <div className="user-details">
            <h3 style={{ marginBottom: 0 }}>{thought.username}</h3>
            <span style={{ fontSize: 12, color: '#666' }}>{thought.time}</span>
          </div>
        </div>
        <div className="category-tag">
          <i className={`fas ${getCategoryIcon(thought.category)}`}></i>
          <span>{getCategoryName(thought.category)}</span>
        </div>
      </div>
      
      <div className="card-content">
        <p>{thought.content}</p>
        {thought.image && (
          <div className="content-image" style={{ backgroundImage: `url(${thought.image})` }}></div>
        )}
      </div>
    </div>
  );
};

export default ThoughtCard;
