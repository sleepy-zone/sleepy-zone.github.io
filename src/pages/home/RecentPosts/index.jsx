import React from 'react';
import './index.css';
import PostCard from './PostCard';
import useGlobalData from '@docusaurus/useGlobalData';

// 模拟博客文章数据
const blogPosts = [
  {
    id: 3,
    title: "盘点前端还在更新的老项目",
    excerpt: "今天不聊 AI，聊点前端。冒着暴露年龄的风险聊点前端里还在更新的老项目。",
    date: "2025-04-21",
    category: "frontend",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img9@main/2025/04/21/1745217332670-feb3786f-71d6-4a97-a8b4-58f82f690f41.png",
    readTime: "4 分钟",
    url: '/blog/2025-04-21-old-fe-1.md'
  },
  {
    id: 1,
    title: "从 Github 不能访问想到的",
    excerpt: "上周末中国未登录用户无法访问 Github，瞬间在社交媒体引起轩然大波。",
    date: "2025-04-14",
    category: "随便聊聊",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img7@main/2025/04/14/1744620520993-54adfc65-507b-439a-924b-a5e91ee9353d.png",
    readTime: "3 分钟",
    url: '/blog/2025-04-14-github-no-vistit.md'
  },
  {
    id: 2,
    title: "什么是 AI Agent ",
    excerpt: "AI Agent 应该是 AI 出现后讨论最多的一个词了，因为他代表着 AI 应用的最高层次了，从上次 Manus 的火爆就可见一斑。AI 给人的感觉无所不能又高深莫测，普通人又充满好奇但只能敬而远之，那是到底什么才是 AI Agent？",
    date: "2025-04-10",
    category: "AI",
    image: "https://fastly.jsdelivr.net/gh/bucketio/img19@main/2025/04/08/1744079884466-358dff04-5fa3-4083-a002-984f7c38faab.png",
    readTime: "6 分钟",
    url: '/blog/2025-04-10-what-is-agent.md'
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
