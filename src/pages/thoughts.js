import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThoughtsList from './thought/Lists';

const data = [
  {
    id: 1,
    username: "SleepyZone",
    avatar: "https://avatars.githubusercontent.com/u/131369648?v=4",
    content: "开一个想法模块，记录一些突然冒出来的想法。（UI 由 AI 设计~）",
    image: "https://cdn.pixabay.com/photo/2024/06/25/19/32/love-8853438_1280.png",
    category: "thought",
    time: "2025-04-21 22:28",
  },
  {
    id: 2,
    username: "SleepyZone",
    avatar: "https://avatars.githubusercontent.com/u/131369648?v=4",
    content: "看完了 Cline 源码，Agent 最终都落到了 prompt 组装和工具的调用上，所以如何发挥模型的最大价值、足够丰富的创意、丝滑的体验是 Agent 的重中之重。",
    category: "thought",
    time: "2025-06-07 22:28",
  },
  // {
  //   id: 2,
  //   username: "李小花",
  //   avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "10分钟前",
  //   content: "「生活不是等待风暴过去，而是学会在雨中跳舞。」这句话一直激励着我，即使面对困难也要保持积极的态度。",
  //   category: "quote",
  //   likes: 78,
  //   comments: 12,
  //   shares: 8
  // },
  // {
  //   id: 3,
  //   username: "张小北",
  //   avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "2小时前",
  //   content: "突发奇想，如果我们能开发一款应用，让人们可以共享未使用的食物资源，不仅可以减少浪费，还能帮助有需要的人。这个想法可行吗？",
  //   category: "idea",
  //   likes: 126,
  //   comments: 28,
  //   shares: 15
  // },
  // {
  //   id: 4,
  //   username: "刘小雨",
  //   avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "昨天",
  //   content: "梦想是什么？是心中那个不断驱使你前进的声音。我的梦想是环游世界，记录下不同文化的美丽瞬间。总有一天，我会实现它。",
  //   image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //   category: "dream",
  //   likes: 201,
  //   comments: 32,
  //   shares: 24
  // },
  // {
  //   id: 5,
  //   username: "陈小天",
  //   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "前天",
  //   content: "今天读到一个有趣的想法：如果把人生看作一本书，那么每一页都值得细细品味。不要因为期待结局而忽略了当下的精彩。这让我重新思考了时间的价值。",
  //   category: "thought",
  //   likes: 87,
  //   comments: 14,
  //   shares: 7
  // },
  // {
  //   id: 6,
  //   username: "赵小云",
  //   avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "3天前",
  //   content: "「成功不是最终的，失败也不是致命的，重要的是继续前进的勇气。」— 温斯顿·丘吉尔",
  //   category: "quote",
  //   likes: 142,
  //   comments: 19,
  //   shares: 31
  // },
  // {
  //   id: 7,
  //   username: "孙小月",
  //   avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "上周",
  //   content: "想到一个创新的教育方式：通过游戏化学习平台，让孩子们在玩乐中掌握知识。每完成一个任务就能获得虚拟奖励，激发学习兴趣。这样的学习方式会更有效吗？",
  //   image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //   category: "idea",
  //   likes: 98,
  //   comments: 22,
  //   shares: 11
  // },
  // {
  //   id: 8,
  //   username: "吴小风",
  //   avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   time: "两周前",
  //   content: "我梦想有一天能创建一个可持续发展的社区，人们在那里共同生活、工作，尊重自然，互相关爱。这个社区将成为未来生活方式的典范。",
  //   category: "dream",
  //   likes: 176,
  //   comments: 35,
  //   shares: 28
  // }
];

const App = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="sleepy zone blog, projects ..."
    >
      <div className="app" style={{ background: "#f7f9fc" }}>
        <main className="main-content">
          <ThoughtsList thoughts={data} />
        </main>
      </div>
    </Layout>
  );
};

export default App;
