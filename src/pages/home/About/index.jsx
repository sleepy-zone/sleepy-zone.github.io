import React from 'react';
import './styles.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Hi there! I'm a passionate frontend developer with a keen eye for design. 
        I love creating beautiful and functional web experiences that delight users.
      </p>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-tags">
          <span className="skill-tag">React</span>
          <span className="skill-tag">TS/JS</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">UI/UX</span>
          <span className="skill-tag">Vibe Coding</span>
        </div>
      </div>
    </div>
  );
};

export default About;
