---
slug: 2025-04-23-google-promtps.md
title: 谷歌提示词工程 - 模型原理和提示词技术
authors: [sleepy]
tags: [AI]
---

# 谷歌提示词工程 - 模型原理和提示词技术

![](https://fastly.jsdelivr.net/gh/bucketio/img6@main/2025/04/23/1745392049583-b2db7b1e-2f2b-4565-8252-14f946e00719.png)

谷歌前段时间发布了提示词工程白皮书，已经有很多博主推荐了，最近终于有时间阅读一下。以下是笔记记录。

原文：[https://drive.google.com/file/d/1AbaBYbEa_EbPelsT40-vj64L-2IwUJHy/view?pli=1](https://drive.google.com/file/d/1AbaBYbEa_EbPelsT40-vj64L-2IwUJHy/view?pli=1)

### 模型工作原理

大语言模型的本质是**预测**。模型接受输入文本，根据训练数据循环预测后续的文本。提示词就是在引导模型正确的预测。

另外需要了解模型的输出配置，如果你调用过大模型的 API 应该对这些参数比较熟悉。

**Output length**：输出长度限制对于大模型的性能，响应时间尤为重要。

**Sampling controls**：控制预测结果

Temperature，越高则输出结果越发散，越低则结果更具有确定性。top-K 和 top-P 和 Temperature 类似，值越高，则输出结果越具有创造性和多样性。越高。

文档中给出了几个场景的配置样例：
1. Temperature 值 0.2、top-P 值 0.95 和 top-K 值 30 的组合能产生相对连贯且适度创新的结果。
2. 若追求更高创造性，可 Temperature 值 0.9、top-P 值 0.99 和 top-K 值40 的配置。
3. 如需更保守的输出，建议采用 Temperature 值 0.1、top-P 值0.9 和 top-K值 20 的参数。
4. 对于存在唯一正确答案的任务（如数学题求解） ，应将 Temperature 值设为 0。

### 提示词技术

#### 零样本（zero shot）

零样本仅提供任务描述和供大语言模型处理的文本。不过可以通过增加单个示例（**单样本**）或者多个示例（**少样本**）让模型输出更符合要求的内容。

#### 系统提示（System Prompting）

系统提示设定语言模型的整体语境和目的，明确模型应执行的宏观任务，如语言翻译、评论分类等。

#### 角色提示（Role prompting）

给模型分配特根据定角色，使模型能角色定位生成更相关、信息量更大的输出。

#### 情境提示（Contextual prompting）

给模型提供上下文提示，比如：

> 背景：您正在为一家关于80年代复古街机游戏的博客撰稿。请建议3个文章主题，并附上简要说明每篇文章应包含的内容。

#### 回退式提示（Step-back prompting）

回退式提示法是一种通过让大语言模型先思考与当前具体任务相关的宏观问题，再将宏观问题的答案作为后续具体任务提示的输入，从而提升模型表现的技术。

#### 思维链（Chain of Thought，CoT）

思维链一种通过生成中间推理步骤来提升大语言模型推理能力的技术。思维链特别适合代码生成时，分解需求逐步输出代码的过程。

#### 思维树（Tree of Thoughts，ToT）

思维树允许大语言模型同时探索多条不同的推理路径，而非仅遵循单一线性思维链。适合探索复杂任务。

#### 推理与行动（ReAct，reason & act）

大模型基于自然语言推理和外部工具（搜索、代码解释器等）来解决复杂任务。只是实现智能体（Agent）第一步。这部分需要有编写代码的能力，或者借助其他智能体构建工具。

#### 其他

可以借助大模型优化提示词。

文档还专门提到了代码相关的提示，编写脚本、解释代码、调试、Review等等。

---

<div align="center">
  <p>欢迎关注我的公众号：前端生存指南，一起聊聊前端、AI 和生活。</p>
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg" style={{ width: '180px' }} />
</div>