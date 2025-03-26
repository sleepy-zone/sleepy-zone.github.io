---
slug: 2025-03-26-dev-mcp-server.md
title: 动手开发一个 MCP Server
authors: [sleepy]
tags: [AI]
---

# 动手开发一个 MCP Server

![https://blog.bytebytego.com/p/ep154-what-is-mcp](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F840e868d-2c83-4b1b-a881-df1da6c6e332_1309x1536.gif)

## MCP 简介

MCP，Model Context Protocol，模型上下文协议，是由 Anthropic （Claude 系列模型公司）提出的一种 AI 和外部数据（本地文件、远程 API、数据库以及其他所有你能想到的）交互的协议，以此来增强 AI 的能力。

MCP 遵循客户端-服务器模型，包含 3 个关键组件：

1. Host，AI App，比如我们使用的 Claude App、ChatWise 等。
2. MCP Client，一般会由 AI App 集成，负责和 MCP Server 通信。
3. MCP Server，连接外部数据，并将数据返回给 MCP Client。这样 AI App 就可以获取外部数据了。

如果你之前了解过 Function Call 或者 Tool（后面两者统一称为 Tool），应该对 MCP 这个概念会感到很熟悉，同样都是扩展 AI 的能力，但 Tool 需要在每个 AI 应用内单独集成无法复用，而 MCP 可以看做是一个更通用的 Tool，不论你使用哪个 AI App，只要 AI App 内置 MCP Client，就可以使用 MCP 市场的 Server。

## 动手开发

一般来说，AI App 会集成 MCP Client，所以对于使用 AI App 的我们来说，我们唯一需要做的是定制 MCP Server，使我们的工具更加强大。

接下来我们要开发一个获取 Pixabay（https://pixabay.com/）图片的 MCP server。简单起见，我们直接使用 JavaScript。

### 开发

首先，创建项目：

```bash
# Create a new directory for our project
mkdir pixabay-mcp-server
cd pixabay-mcp-server

# Initialize a new npm project
npm init -y

# Install dependencies
npm install @modelcontextprotocol/sdk zod

# Create our files
touch index.js
```

更新一下 package.json，这里设置一下 bin 和文件权限，其实 node 写 MCP Server 和写命令行工具差不多。

```json
{
  "type": "module",
  "bin": {
    "pixabay": "index.js"
  },
  "scripts": {
    "build": " chmod 755 index.js"
  },
  "files": [
    "index.js"
  ],
}
```

下面开始编写逻辑代码。 `@modelcontextprotocol/sdk` 这个包来辅助我们编写 MCP Server。

首先定义 server：

```js
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const baseUrl = 'https://pixabay.com/api/';

const server = new McpServer({
  name: 'pixabay-mcp-server',
  version: '1.0.0'
});

// 插入 tool 代码

async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

startServer();
```

下面定义 server 内的 tool（server 由一个个的 tool 组成）。

```js
server.tool(
  'image-search',
  {
    query: z.string(),
    type: z.string()
  },
  async ({ query, type = 'all' }) => {
    try {
      const requestUrl = `${baseUrl}?key=${process.env.PIXABAY_KEY}&q=${query}&image_type=${type}`;
      const response = await fetch(requestUrl);
      const json = await response.json();

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            images: json.hits || [],
            total_results: json.total,
            query,
          }, null, 2)
        }]
      }
    } catch(e) {
      return {
        content: [{
          type: 'text',
          text: `Error: ${e.message}`
        }],
        isError: true
      };
    }
  }
)
```

### 调试

官方提供了一个测试工具，https://github.com/modelcontextprotocol/inspector，可以执行下面的命令测试：

```bash
npx @modelcontextprotocol/inspector node index.js
```

访问 http://localhost:5173 调试。如下图，我们可以看到连接成功后，列举出我们定义的 tool，并且可以解析出 tool 需要的参数，我们输入参数后，点击 run tool 获取到数据，就说明成功了！

![](https://fastly.jsdelivr.net/gh/bucketio/img14@main/2025/03/26/1742958541480-37dc5ca2-8787-4f00-8bb3-b7854342c2af.png)

### 发布

调试成功后，将上述代码发布到 npm，后面就可以在你喜欢的 AI App 使用你的 MCP sever 了，比如你的包的名字就叫 `pixabay-mcp-server`，这里以 Cursor 或者 Cline 为例配置：

```json
{
  "mcpServers": {
    "pixabay-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "pixabay-mcp-server"
      ],
      "env": {
        "PIXABAY": "xxxxx"
      }
    }
  }
}
```

当我们向 AI 提出问题 `search cat photos`，AI 会识别到需要调用我们的工具，并且准确识别到需要提供的参数：

![](https://fastly.jsdelivr.net/gh/bucketio/img18@main/2025/03/26/1742959168926-840fc544-282b-449f-9c1b-3c0fc963b2cb.png)

## 后面

使用 Node.js 写一个 MCP Server 还是很简单的，可以通过官方文档了解更多：https://modelcontextprotocol.io/quickstart/server。

MCP Server 大大扩展了我们使用 AI 的边界，下一篇文章简单聊聊我对 MCP 的一点看法。

---

<div align="center">
  <p>欢迎关注我的公众号：前端生存指南，一起聊聊前端、AI 和生活。</p>
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg" style={{ width: '180px' }} />
</div>