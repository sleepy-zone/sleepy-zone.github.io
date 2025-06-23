---
slug: 2025-06-23-cline-source-code-3-engine.md
title: Cline 源码浅析 - 递归执行引擎
authors: [sleepy]
tags: [AI, Cline]
---

![](https://fastly.jsdelivr.net/gh/bucketio/img13@main/2025/06/13/1749821751724-de0cc087-4ad2-40a5-bd9e-d9918cae3ea9.png)

前面我们聊了 Cline [从输入到输出的流程](https://mp.weixin.qq.com/s/9bJAeQ3U0_U85sDCcJSXxw)、[MCP 的调用](https://mp.weixin.qq.com/s/_sU1KTFtV2eoURq0yKaabw)以及[Prompt 设计](https://mp.weixin.qq.com/s/pdznzYiS6oUT1epOuBLX3g)，这篇文章，我们再回过头看一下 Cline 内很重要的一部分 - **递归执行引擎**。

如果你用过 Cline，你会发现一次模型的交互并不会完成任务（聊天界面会多次展示 `API Request...`），而是需要多次和模型多轮交互，每次交互都会带上之前的结果（用户反馈、工具调用结果），直到模型确认任务完成，才会结束。这就是**递归执行引擎**

### Prompt 设计

我们还是先来看下 Cline 的 Prompt 设计，如何保证模型有条不紊的执行的每次循环。

这部分内容在 System Prompt 内，`src/core/prompts/system.ts`。

首先 Cline 对模型强调了工具的使用规则：

```
您可以访问一组工具，这些工具会在用户批准后执行。您每次消息中只能使用一个工具，并将在用户的回复中收到该工具使用的执行结果。您会逐步使用工具来完成给定任务，每次工具的使用都会基于前一个工具使用的结果进行决策。
```

> You have access to a set of tools that are executed upon the user's approval. You can use one tool per message, and will receive the result of that tool use in the user's response. You use tools step-by-step to accomplish a given task, with each tool use informed by the result of the previous tool use.

1. 工具需要用户批准进行
2. 每次消息只能使用一个工具
3. 根据用户反馈，逐步使用工具完成任务

对于复杂任务，这就保证了模型不必一次性完成任务，而是可以在多轮会话中使用多种工具共同协作完成任务。

那模型在任务完成后如何告知我们呢？这就是 `attempt_completion` 工具的作用了，Prompt 如下：

```markdown
## 尝试完成  
描述：每次使用工具后，用户会回复该工具的执行结果，即是否成功以及失败的原因。一旦您收到了工具使用的执行结果，并可以确认任务已经完成，请使用此工具向用户展示您的工作成果。您可以选择性地提供一个 CLI 命令来展示您的工作成果。如果用户对结果不满意并给出反馈，您可以根据反馈进行改进并再次尝试。  

重要提示：在确认用户之前的工具使用都已成功之前，**不能**使用此工具。否则会导致代码损坏和系统故障。在使用此工具之前，您必须在 `\<thinking\>\<\/thinking\>` 标签中自问：是否已从用户那里确认所有先前的工具使用都是成功的？如果不是，则**不要**使用此工具。  

参数：  
- **result**（必填）：任务的结果。请以最终形式表述这个结果，不需要用户进一步输入。不要以问题或提供进一步帮助的提议结尾。  
- **command**（可选）：一条 CLI 命令，用于向用户实时演示结果。例如，使用 `open index.html` 来显示创建的 HTML 网站，或者使用 `open localhost:3000` 来显示本地运行的开发服务器。但**不要**使用像 `echo` 或 `cat` 这类只打印文本的命令。该命令应适用于当前操作系统，并确保格式正确，不包含任何有害指令。  

Usage:
\<attempt_completion\>
\<result\>
Your final result description here
\<\/result\>
\<command\>Command to demonstrate result (optional)\<\/command\>
\<\/attempt_completion\>
```

模型确认任务完成后，调用 `attempt_completion` 这个工具，根据我们之前聊过的，Cline 会从模型的消息中解析工具的使用，在解析到模型消息中包含 `attempt_completion` 这个工具的使用时，我们可以确认任务完成了。

### Task 

后续就是 Cline 对模型消息的处理和递归的逻辑了，这部分代码在 `src/core/task/index.ts` 文件下。

`recursivelyMakeClineRequests`，看名字就知道是在做递归调用，主要是做一些 User Prompts 的拼装、聊天消息的组装，处理模型请求的流式消息等，只要模型没明确调用 `attempt_completion` ，就一直会调用自身。

关于 `attempt_completion` 工具的真实调用还是在 `presentAssistantMessage` 方法内，这里就不展开了。

下面是一个输出示例，使用 Cline 将截图转为 React 代码，任务完成后，模型输出如下：
```markdown
\<thinking\>
Now I'll complete the task by summarizing what I've done and presenting the final result.
\<\/thinking\>

\<attempt_completion\>
\<result\>
I've successfully converted the provided module screenshot into a React component structure following all the specified requirements. Here's what I've created:

....
....

The implementation closely follows the visual design from the provided screenshot, with proper styling, layout, and component structure.
\<\/result\>
\<\/attempt_completion\>
```

### 总结

再次感叹，模型的如何通过 Prompt 和 Tool 让模型发挥出更大价值才是 Agent 最重要的事情。

至此，Cline 源码浅析系列关于模型相关的到此为止了，后面有计划继续探索下 Cline 工程相关的内容，比如检查点、VSCode 插件这些内容。

---

<div align="center">
  <p>欢迎关注我的公众号：前端生存指南，一起聊聊前端、AI 和生活。</p>
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg" style={{ width: '180px' }} />
</div>