import React from 'react';
import './index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Minimal<span className="accent">Blog</span></h3>
            <p>分享创意与思考的空间</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>导航</h4>
              <ul>
                <li><a href="#/">首页</a></li>
                <li><a href="#/blog">博客</a></li>
                <li><a href="#/works">作品</a></li>
                <li><a href="#/about">关于</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>联系我</h4>
              <ul>
                <li><a href="mailto:hello@minimalblog.com">hello@minimalblog.com</a></li>
                <li><a href="tel:+8613800138000">+86 138-0013-8000</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>关注我</h4>
              <div className="social-icons">
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} MinimalBlog. 保留所有权利。</p>
          <div className="footer-bottom-links">
            <a href="#/privacy">隐私政策</a>
            <a href="#/terms">使用条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
