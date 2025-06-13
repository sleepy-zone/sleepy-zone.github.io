import React from 'react';
import './index.css';
import PostCard from './PostCard';
import useGlobalData from '@docusaurus/useGlobalData';

// 模拟博客文章数据
const blogPosts = [
  {
    id: 3,
    title: "Cline 源码浅析 -  Prompt 设计",
    excerpt: "“Agent 就是如何拼出更好用的 Prompt”，虽然有点玩笑的意味，但也能说明一定的问题。本篇文章我们探讨下 Cline 里的 Prompt 设计。",
    date: "2025-06-13",
    category: "AI, Cline",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img17@main/2025/06/06/1749176746221-f97aba25-6da5-461a-be21-369de1c44fff.png",
    readTime: "5 分钟",
    url: '/blog/2025-06-13-cline-source-code-prompt.md'
  },
  {
    id: 1,
    title: "Cline 源码浅析 - MCP 调用",
    excerpt: "本篇文章从源码角度来看一下 Cline 的 MCP 管理",
    date: "2025-06-10",
    category: "AI, Cline",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img10@main/2025/05/19/1747639233989-a54bfdd8-3570-4750-8b7c-c8f0b88ff435.png",
    readTime: "6 分钟",
    url: '/blog/2025-06-10-cline-source-code-mcp.md'
  }, {
    id: 2,
    title: "Cline 源码浅析 - 从输入到输出",
    excerpt: "本篇文章从源码角度来看一下从我们输入指令到 Cline 输出的过程到底是怎样的，这样对我们后续使用 Cline 会有更好的帮助。",
    date: "2025-06-07",
    category: "AI, Cline",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img17@main/2025/06/06/1749176746221-f97aba25-6da5-461a-be21-369de1c44fff.png",
    readTime: "10 分钟",
    url: '/blog/2025-06-07-cline-source-code-1.md'
  },
];

const RecentPosts = () => {
  const globalData = useGlobalData();
  console.log(globalData)
  return (
    <section className="section recent-posts" id="posts-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recent Posts</h2>
          <a href="/blog" className="view-all">查看全部 <i className="fas fa-arrow-right"></i></a>
        </div>
        
        <div className="posts-grid">
          {blogPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
