import React, { useState } from 'react';
import './index.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // 模拟表单提交
      setTimeout(() => {
        setIsSubmitted(true);
        setEmail('');
      }, 500);
    }
  };
  
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">订阅我的通讯</h2>
            <p className="newsletter-description">
              定期获取我的设计和开发见解、项目更新以及独家内容。
              不用担心，我也讨厌垃圾邮件，你可以随时取消订阅。
            </p>
          </div>
          
          <div className="newsletter-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>感谢订阅！请查收你的邮箱确认订阅。</p>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="输入你的邮箱地址"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-subscribe">
                    订阅 <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
