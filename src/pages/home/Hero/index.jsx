import React from 'react';
import TypeWriter from '../TypeWriter';
import './index.css';

const Hero = () => {
  return (
    <section className="head-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Hey! I'm SleepyZone</span> 😴
        </h1>
        <p className="hero-subtitle">
          <TypeWriter 
            text="A 30+、LowLevel P😅 frontend developer from China🇨🇳" 
            speed={70}
            delay={3000}
          />
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">View My Work</a>
          <a href="https://bio.link/sleepyzone" className="btn btn-secondary" target="_blank">Get In Touch</a>
        </div>
      </div>
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
