import React from 'react';
import './index.css';

const HeroSection = () => {

  const scroll2Posts = () => {
    const postsSection = document.getElementById('posts-section');
    if (postsSection) {
      window.scrollTo({
        top: postsSection.getBoundingClientRect().top - 60,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hey, I'm <span className="accent-text">SleepyZone</span>
              <br />前端开发 & 开源爱好者
            </h1>
            <p className="hero-description">
              欢迎访问我的个人站点！😁<br />
              在这里，我分享我的作品、想法和文章。
            </p>
            <div className="hero-actions">
              <a href="javascript:void(0);" className="btn btn-primary" onClick={scroll2Posts}>了解更多</a>
              <a href="https://twitter.com/zone__online" target="_blank" className="btn btn-outline">联系我</a>
            </div>
            <div className="social-links">
              <a href="https://twitter.com/zone__online" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://github.com/sleepy-zone" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://camo.githubusercontent.com/e29c39af8c4d7763dc27b237bfd067ccba4c27c135ce1abe1cb8180d7897527d/68747470733a2f2f636c6f75642d6d696e6170702d34373830332e636c6f75642e6966616e7275736572636f6e74656e742e636f6d2f317476414d3638437672783362664c522e6a7067" target="_blank"><i className="fab fa-weixin"></i></a>
              <a href="https://www.zhihu.com/people/sleepyzone" target="_blank"><i className="fab fa-zhihu"></i></a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="avatar-container">
              <img 
                src="https://avatars.githubusercontent.com/u/131369648?v=4" 
                alt="avatar" 
                className="avatar-img" 
              />
              <div className="avatar-shape"></div>
            </div>
            <div className="skills-bubble">
              <span>UI/UX</span>
              <span>React</span>
              <span>AI</span>
            </div>
          </div>
        </div>
        
        {/* <div className="scroll-indicator">
          <span>向下滚动</span>
          <i className="fas fa-chevron-down"></i>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
