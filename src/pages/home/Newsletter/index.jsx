import React from 'react';
import './index.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">订阅我的通讯</h2>
            <p className="newsletter-description">
              定期获取我的设计和开发见解、项目更新以及独家内容。
              <br />关注我的公众号：前端生存指南
            </p>
          </div>
          
          <div className="newsletter-form-container">
            <img src="https://camo.githubusercontent.com/e29c39af8c4d7763dc27b237bfd067ccba4c27c135ce1abe1cb8180d7897527d/68747470733a2f2f636c6f75642d6d696e6170702d34373830332e636c6f75642e6966616e7275736572636f6e74656e742e636f6d2f317476414d3638437672783362664c522e6a7067" style={{ width: 160 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
