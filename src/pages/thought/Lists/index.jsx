import React from 'react';
import ThoughtCard from '../Card';
import './index.css';

const ThoughtsList = ({ thoughts = [] }) => {
  return (
    <div className="thoughts-list">
      {thoughts.length > 0 ? (
        thoughts.map(thought => (
          <ThoughtCard key={thought.id} thought={thought} />
        ))
      ) : (
        <div className="empty-state">
          <i className="fas fa-wind"></i>
          <p>暂无相关想法</p>
        </div>
      )}
    </div>
  );
};

export default ThoughtsList;
