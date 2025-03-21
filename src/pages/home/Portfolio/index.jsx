import React from 'react';
import './index.css';

const projects = [
  {
    id: 1,
    title: "基于 doocs/md 的微信 Markdown 编辑器桌面应用。",
    category: "woocs",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img1@main/2025/03/21/1742532066065-adbefcb7-01b4-421e-b466-0ec01e0e7e86.png",
    link: "https://github.com/sleepy-zone/woocs"
  },
  {
    id: 2,
    title: "👻 A creative editor based on fabricjs. 😘基于 fabritor 快速构建属于自己的图片设计器。",
    category: "fabritor",
    image: "https://github.com/sleepy-zone/fabritor-web/raw/main/public/fabritor_editor.png",
    link: "http://github.com/sleepy-zone/fabritor-web"
  },
  {
    id: 3,
    title: "一款更好用颜值更高截图美化应用，提供网页版、浏览器插件、uTools 插件。",
    category: "Photor",
    image: "https://cloud-minapp-47437.cloud.ifanrusercontent.com/1rm6WeVU6MtTxbp4.png",
    link: "https://www.photor.fun/"
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2 className="portfolio-title">Featured Works</h2>
        <div className="portfolio-grid">
          {projects.map(project => (
            <a href={project.link} key={project.id} className="project-card" target='_blank'>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-overlay">
                <span className="view-project">View Project</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
