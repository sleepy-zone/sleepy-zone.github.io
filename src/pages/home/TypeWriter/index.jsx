import React, { useState, useEffect } from 'react';
import './index.css';

const TypeWriter = ({ text, speed = 100, delay = 500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (isTyping && currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    } else if (currentIndex >= text.length) {
      timer = setTimeout(() => {
        setIsTyping(false);
        setCurrentIndex(0);
        setDisplayText('');
      }, delay);
    } else if (!isTyping) {
      setIsTyping(true);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text, speed, delay]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor"></span>
    </span>
  );
};

export default TypeWriter;
