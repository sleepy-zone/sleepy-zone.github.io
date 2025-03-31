import React from 'react';
import './styles.css';

const Projects = () => {
  const projects = [
    {
      title: "woocs",
      description: "基于 doocs/md 的微信 Markdown 编辑器桌面应用.",
      image: "https://fastly.jsdelivr.net/gh/bucketio/img1@main/2025/03/21/1742532066065-adbefcb7-01b4-421e-b466-0ec01e0e7e86.png",
      tags: ['markdown', 'electron', 'vite'],
      link: 'https://github.com/sleepy-zone/woocs'
    },
    {
      title: "fabritor",
      description: "👻 A creative editor based on fabricjs. 😘基于 fabritor 快速构建属于自己的图片设计器。",
      image: "https://github.com/sleepy-zone/fabritor-web/raw/main/public/fabritor_editor.png",
      tags: ['fabric.js', 'React', 'ice.js', 'ant design'],
      link: 'http://github.com/sleepy-zone/fabritor-web'
    },
    {
      title: "Photor App",
      description: "一款更好用颜值更高截图美化应用，提供网页版、浏览器插件、uTools 插件。",
      image: "https://cloud-minapp-47437.cloud.ifanrusercontent.com/1rm6WeVU6MtTxbp4.png",
      tags: ["fabric.js", "fabritor", "app"]
    }
  ];

  return (
    <div className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
