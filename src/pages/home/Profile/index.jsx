import React from 'react';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src="https://avatars.githubusercontent.com/u/131369648?v=4" alt="profile" />
      </div>
      <h1>Hey! I'm SleepyZone</h1>
      <p className="title">30+ 前端开发 / 开源爱好者</p>
      <div className="social-links">
        <a href="https://github.com/sleepy-zone" target="_blank" className="social-link">GitHub</a>
        <a href="https://twitter.com/zone__online" target="_blank" className="social-link">Twitter</a>
        <a href="https://camo.githubusercontent.com/e29c39af8c4d7763dc27b237bfd067ccba4c27c135ce1abe1cb8180d7897527d/68747470733a2f2f636c6f75642d6d696e6170702d34373830332e636c6f75642e6966616e7275736572636f6e74656e742e636f6d2f317476414d3638437672783362664c522e6a7067" target="_blank" className="social-link">公众号</a>
        <a href="https://www.zhihu.com/people/sleepyzone" target="_blank" className="social-link">知乎</a>
      </div>
    </div>
  );
};

export default Profile;
