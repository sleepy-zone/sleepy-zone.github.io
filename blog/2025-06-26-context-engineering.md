---
slug: 2025-06-26-context-engineering.md
title: 上下文工程 - Context Engineering
authors: [sleepy]
tags: [AI, Cline]
---

![](https://fastly.jsdelivr.net/gh/bucketio/img7@main/2025/06/26/1750918187130-f4411677-95fb-481a-9d4c-7b816cb5728a.png)

随着 Agent 技术的广泛应用，LLM（大语言模型）面临的任务和问题也越来越复杂。单一的提示词已经难以满足复杂场景的需求，需要提供更加精准且合适的上下文作为支撑。上下文信息过少会导致模型无法正确理解任务，而过多或混乱的信息（尤其在上下文窗口不断扩大的情况下）则会增加模型产生幻觉的风险。因此，在设计 Agent 时，如何高效地组织和优化上下文已成为当前的核心挑战。

所以**上下文工程**的概念被提了出来。

![Shopify CEO：Context Engineering](https://fastly.jsdelivr.net/gh/bucketio/img9@main/2025/06/26/1750918062430-32cdf6ae-30ac-4a11-be5f-541a0ea3b9e6.png)

Shopify CEO 的观点：相比"提示工程"（prompt engineering），我更喜欢用"上下文工程"（context engineering）这个术语。它更精准地描述了这项核心技能的本质：为任务提供所有必要背景信息，使大语言模型（LLM）能够合理地解决该任务的艺术。

前特斯拉 AI 总监 Andrej Karpathy 有相似的观点：上下文工程是一门科学，也是门艺术。

![图源宝玉翻译](https://fastly.jsdelivr.net/gh/bucketio/img13@main/2025/06/26/1750920223228-e7cdfd9e-08a1-45d1-aae2-35f9368fbb3c.png)

### 如何理解上下文工程

如果你看过我的[Cline 源码浅析系列](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxMDA0MTE5Mw==&action=getalbum&album_id=4021745110793502724#wechat_redirect)肯定更容易理解上下文工程的概念：

1. Cline System Prompt 定义了丰富的工具以及确定了工具的格式。
2. Prompt 是根据用户环境信息动态组装的。
3. 历史消息传递至上下文（短期记忆）。
4. 模块化的 Prompt 设计：Command、Workflow、Mention、Memery Bank。
5. 上下文窗口的管理（下一篇源码分析系列）

正因为有了完善的上下文设计，才能让优秀的模型接收正确的信息做出正确的任务处理结果。

> 就像人类一样，沟通至关重要！

### 和提示词工程有何不同

这里我们直接引用 [LangChain 博客](https://blog.langchain.com/the-rise-of-context-engineering/)的观点。

为什么要从“提示”转向“上下文”？最初，开发者通过巧妙的提示措辞来获得更好的答案。然而，随着应用程序的复杂性增加，为 AI 提供完整而结构化的上下文显然比任何巧妙的措辞都更为重要。

我认为**提示工程属于上下文工程的一部分**。即便拥有所有的上下文，如何在提示中进行组装仍然至关重要。区别在于你需要处理一组动态数据并对其进行正确格式化，而不是仅仅为单一数据集设计提示。

我还要强调，上下文的一个关键部分通常是关于大语言模型如何表现的核心指令。这通常是提示工程的重要组成部分。你是否认为为智能体提供清晰详细的行为指令属于上下文工程还是提示工程？我认为两者都有涉及。

### 总结

正如 Andrej Karpathy 提到的那样：

> “上下文工程”是围绕 LLM 应用，还在逐渐兴起一层厚重、复杂的**软件基础设施**，它的任务是协调、优化各种 LLM 调用和相关操作，组合出真正有效、有价值的 LLM 应用。

---

<div align="center">
  <p>欢迎关注我的公众号：前端生存指南，一起聊聊前端、AI 和生活。</p>
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg" style={{ width: '180px' }} />
</div>