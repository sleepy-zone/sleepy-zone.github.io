import React from 'react';
import './index.css';
import PostCard from './PostCard';
import useGlobalData from '@docusaurus/useGlobalData';

// 模拟博客文章数据
const blogPosts = [
  {
    id: 3,
    title: "现在开始使用 Cline Rules ",
    excerpt: "最近在业务（面向用户的 C 端业务）中较多的使用了 Cline，总体感觉非常丝滑",
    date: "2025-05-30",
    category: "AI",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img19@main/2025/05/30/1748588412574-e064741c-0bf1-4c61-be3c-fd9ac86453e4.png",
    readTime: "5 分钟",
    url: '/blog/2025-05-30-cline-rule.md'
  },
  {
    id: 1,
    title: "Mastra  - TypeScript AI Agent 框架",
    excerpt: "Mastra，是一个难得的 TS 的 AI Agent 框架，可以让你快手上手开发一个 Agent，目前已经有 13.2K 的 Star",
    date: "2025-05-21",
    category: "Agent",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img10@main/2025/05/19/1747639233989-a54bfdd8-3570-4750-8b7c-c8f0b88ff435.png",
    readTime: "3 分钟",
    url: '/blog/2025-04-30-ts-agent-mastra.md'
  },
  {
    id: 2,
    title: "DeepWiki - 阅读开源代码的神器",
    excerpt: "Devin （就是那个每月 500 刀的 AI 程序员）团队推出了 DeepWiki，从此阅读源码更方便了。",
    date: "2025-04-30",
    category: "AI",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img17@main/2025/04/29/1745915063123-0603daf0-f9b8-42af-9597-59570e3a7eae.png",
    readTime: "2 分钟",
    url: '/blog/2025-04-30-deepwiki.md'
  }
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
