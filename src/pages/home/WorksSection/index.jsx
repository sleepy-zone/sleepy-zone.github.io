import React, { useState } from 'react';
import './index.css';
import WorkCard from './WorkCard';

// 模拟作品数据
const works = [
  {
    id: 1,
    title: "woocs",
    description: "基于 doocs/md 的微信 Markdown 编辑器桌面应用。",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img1@main/2025/03/21/1742532066065-adbefcb7-01b4-421e-b466-0ec01e0e7e86.png",
    category: ['markdown', 'electron', 'vite'],
    link: "https://sleepy-zone.github.io/woocs-home/"
  },
  {
    id: 2,
    title: "fabritor",
    description: "👻 A creative editor based on fabricjs. 😘基于 fabritor 快速构建属于自己的图片设计器。",
    image: "https://github.com/sleepy-zone/fabritor-web/raw/main/public/fabritor_editor.png",
    category: ['fabric.js', 'React', 'ice.js', 'ant design'],
    link: "http://github.com/sleepy-zone/fabritor-web"
  },
  {
    id: 3,
    title: "Photor App",
    description: "一款更好用颜值更高截图美化应用，提供网页版、浏览器插件、uTools 插件。基于 fabritor 开发。",
    image: "https://cloud-minapp-47437.cloud.ifanrusercontent.com/1rm6WeVU6MtTxbp4.png",
    category: ["fabric.js", "fabritor", "tool app"],
    link: "https://photor.fun"
  }
];

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredWorks = activeCategory === "全部" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section className="section works-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="works-grid">
          {filteredWorks.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
