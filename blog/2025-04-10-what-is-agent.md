---
slug: 2025-04-10-what-is-agent.md
title: 什么是 Agent
authors: [sleepy]
tags: [AI]
---

# 什么是 AI Agent 

![https://weaviate.io/blog/what-are-agentic-workflows](https://fastly.jsdelivr.net/gh/bucketio/img19@main/2025/04/08/1744079884466-358dff04-5fa3-4083-a002-984f7c38faab.png)

### 火爆的 Agent

AI Agent 应该是 AI 出现后讨论最多的一个词了，因为他代表着 AI 应用的最高层次了，从上次 Manus 的火爆就可见一斑。AI 给人的感觉无所不能又高深莫测，普通人又充满好奇但只能敬而远之，那是到底什么才是 AI Agent？

通常很多文章在讲解 AI Agent 时又会引入很多新的概念和名词，这就让 AI Agent 的概念更加难以理解。

### 我的理解

我们可以换个角度看，AI Agent 的最终形态就是可以和人一样处理任务，那如果直接把 Agent 看做人类，一切就变得非常容易理解。

想象一下，作为前端，我要完成一个后台管理页面的需求，我是怎么做的：
* 首先我有了一定的知识储备，了解基本的前端知识和一些框架，比如 React。
* 因为是公司内部项目，所以我还需要去了解内部的组件库。
* 分析需求，确定组件划分。
* 开始编码，遇到问题需要联网查阅资料。
* 测试阶段，排查问题，修复问题。

此时，如果需要 AI 完成这个事情，同样也是按照上述步骤：
* 目前大模型都是基于已有数据进行预训练，那么模型已经具备了前端知识和框架。
* 但模型无法知晓公司内部组件库，所以先让他进行学习。这就是 RAG。

> 检索增强生成（RAG）旨在通过检索和整合外部知识来增强大语言模型生成
文本的准确性和丰富性，其是一个集成了外部知识库、信息检索器、大语言模型等
多个功能模块的系统。RAG 利用信息检索、深度学习等多种技术为大语言模型在
生成过程中引入最新的、特定领域的知识，从而克服传统大语言模型的局限性，提
供更加精准和可靠的生成内容。（引用自：https://github.com/ZJU-LLMs/Foundations-of-LLMs）

* AI 根据需求（Prompt），基于学习的知识进行拆分组件、编写代码（规划步骤 WorkFlow）。
* 遇到问题，联网排查资料（使用 Tool）
* 测试阶段，遇到问题，进行修复。（基于上下文记忆 Memery）。

可以看出 AI Agent 做事情的方式就是在无限的接近于人类的做事方式：有知识储备，有规步骤规划，有工作流，有工具，最终输出结果。而整个流程中，AI Agent 作为一个完备的系统（没错，AI Agent 是一个系统），内部各部分有条不紊的工作。这一点和人类也一样，人类是一个完美的系统！

### 总结

**最后我们总结一下什么是 Agent：**
1. 首先是基于大模型的，这是基础。
2. 感知外部环境：和用户、外部知识、工具甚至是其他 Agent 交互。
3. 规划和决策：任务管理、任务分配、多步骤工作。
4. 记忆和改进：理解上下文。
5. 结合以上几点：**AI Agent 是一个可以理解上下文，通过感知外部环境变化，对任务进行分析、规划并最终进行决策的系统。**

目前已经有很多细分领域的 Agent 了，比如大火的 Cursor，生成代码建议、代码生成、询问人类意见，通过更多的案例学习，后续的编码 Agent 会变的更加智能。

![](https://fastly.jsdelivr.net/gh/bucketio/img10@main/2025/04/08/1744082199745-c25ab9f1-182f-4f10-9046-250043f1a8de.png)

---

本文只是个人对 AI Agent 的简单理解，对于详细的定义概念和分类，还是要参考资料和专业书籍，推荐文章 https://weaviate.io/blog/what-are-agentic-workflows。另外如果想要动手实践，可以看一下微软的 AI Agent 课程：https://microsoft.github.io/ai-agents-for-beginners/。

---

<div align="center">
  <p>欢迎关注我的公众号：前端生存指南，一起聊聊前端、AI 和生活。</p>
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg" style={{ width: '180px' }} />
</div>