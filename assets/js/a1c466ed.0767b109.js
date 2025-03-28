"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[5135],{6311:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=r(4848),s=r(8453);const o={slug:"2025-03-26-dev-mcp-server.md",title:"\u52a8\u624b\u5f00\u53d1\u4e00\u4e2a MCP Server",authors:["sleepy"],tags:["AI"]},c="\u52a8\u624b\u5f00\u53d1\u4e00\u4e2a MCP Server",l={permalink:"/blog/2025-03-26-dev-mcp-server.md",source:"@site/blog/2025-03-26-dev-mcp-server.md",title:"\u52a8\u624b\u5f00\u53d1\u4e00\u4e2a MCP Server",description:"https://blog.bytebytego.com/p/ep154-what-is-mcp",date:"2025-03-26T00:00:00.000Z",formattedDate:"2025\u5e743\u670826\u65e5",tags:[{label:"AI",permalink:"/blog/tags/ai"}],readingTime:4.635,hasTruncateMarker:!1,authors:[{name:"SleepyZone",title:"Front End Engineer",url:"https://github.com/sleepy-zone",imageURL:"https://avatars.githubusercontent.com/u/131369648?v=4",key:"sleepy"}],frontMatter:{slug:"2025-03-26-dev-mcp-server.md",title:"\u52a8\u624b\u5f00\u53d1\u4e00\u4e2a MCP Server",authors:["sleepy"],tags:["AI"]},unlisted:!1,prevItem:{title:"AI \u548c\u771f\u5b9e\u4e16\u754c\u7684\u6865\u6881 - MCP",permalink:"/blog/2025-03-26-dev-mcp-server.md"},nextItem:{title:"woocs\uff0c\u57fa\u4e8e doocs/md \u7684\u5fae\u4fe1 Markdown \u7f16\u8f91\u5668\u684c\u9762\u5e94\u7528",permalink:"/blog/2025-03-21-woocs"}},i={authorsImageUrls:[void 0]},a=[{value:"MCP \u7b80\u4ecb",id:"mcp-\u7b80\u4ecb",level:2},{value:"\u52a8\u624b\u5f00\u53d1",id:"\u52a8\u624b\u5f00\u53d1",level:2},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:3},{value:"\u53d1\u5e03",id:"\u53d1\u5e03",level:3},{value:"\u540e\u9762",id:"\u540e\u9762",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F840e868d-2c83-4b1b-a881-df1da6c6e332_1309x1536.gif",alt:"https://blog.bytebytego.com/p/ep154-what-is-mcp"})}),"\n",(0,t.jsx)(n.h2,{id:"mcp-\u7b80\u4ecb",children:"MCP \u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"MCP\uff0cModel Context Protocol\uff0c\u6a21\u578b\u4e0a\u4e0b\u6587\u534f\u8bae\uff0c\u662f\u7531 Anthropic \uff08Claude \u7cfb\u5217\u6a21\u578b\u516c\u53f8\uff09\u63d0\u51fa\u7684\u4e00\u79cd AI \u548c\u5916\u90e8\u6570\u636e\uff08\u672c\u5730\u6587\u4ef6\u3001\u8fdc\u7a0b API\u3001\u6570\u636e\u5e93\u4ee5\u53ca\u5176\u4ed6\u6240\u6709\u4f60\u80fd\u60f3\u5230\u7684\uff09\u4ea4\u4e92\u7684\u534f\u8bae\uff0c\u4ee5\u6b64\u6765\u589e\u5f3a AI \u7684\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"MCP \u9075\u5faa\u5ba2\u6237\u7aef-\u670d\u52a1\u5668\u6a21\u578b\uff0c\u5305\u542b 3 \u4e2a\u5173\u952e\u7ec4\u4ef6\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Host\uff0cAI App\uff0c\u6bd4\u5982\u6211\u4eec\u4f7f\u7528\u7684 Claude App\u3001ChatWise \u7b49\u3002"}),"\n",(0,t.jsx)(n.li,{children:"MCP Client\uff0c\u4e00\u822c\u4f1a\u7531 AI App \u96c6\u6210\uff0c\u8d1f\u8d23\u548c MCP Server \u901a\u4fe1\u3002"}),"\n",(0,t.jsx)(n.li,{children:"MCP Server\uff0c\u8fde\u63a5\u5916\u90e8\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u8fd4\u56de\u7ed9 MCP Client\u3002\u8fd9\u6837 AI App \u5c31\u53ef\u4ee5\u83b7\u53d6\u5916\u90e8\u6570\u636e\u4e86\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e4b\u524d\u4e86\u89e3\u8fc7 Function Call \u6216\u8005 Tool\uff08\u540e\u9762\u4e24\u8005\u7edf\u4e00\u79f0\u4e3a Tool\uff09\uff0c\u5e94\u8be5\u5bf9 MCP \u8fd9\u4e2a\u6982\u5ff5\u4f1a\u611f\u5230\u5f88\u719f\u6089\uff0c\u540c\u6837\u90fd\u662f\u6269\u5c55 AI \u7684\u80fd\u529b\uff0c\u4f46 Tool \u9700\u8981\u5728\u6bcf\u4e2a AI \u5e94\u7528\u5185\u5355\u72ec\u96c6\u6210\u65e0\u6cd5\u590d\u7528\uff0c\u800c MCP \u53ef\u4ee5\u770b\u505a\u662f\u4e00\u4e2a\u66f4\u901a\u7528\u7684 Tool\uff0c\u4e0d\u8bba\u4f60\u4f7f\u7528\u54ea\u4e2a AI App\uff0c\u53ea\u8981 AI App \u5185\u7f6e MCP Client\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 MCP \u5e02\u573a\u7684 Server\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u52a8\u624b\u5f00\u53d1",children:"\u52a8\u624b\u5f00\u53d1"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0cAI App \u4f1a\u96c6\u6210 MCP Client\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4f7f\u7528 AI App \u7684\u6211\u4eec\u6765\u8bf4\uff0c\u6211\u4eec\u552f\u4e00\u9700\u8981\u505a\u7684\u662f\u5b9a\u5236 MCP Server\uff0c\u4f7f\u6211\u4eec\u7684\u5de5\u5177\u66f4\u52a0\u5f3a\u5927\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u5f00\u53d1\u4e00\u4e2a\u83b7\u53d6 Pixabay\uff08",(0,t.jsx)(n.a,{href:"https://pixabay.com/%EF%BC%89%E5%9B%BE%E7%89%87%E7%9A%84",children:"https://pixabay.com/\uff09\u56fe\u7247\u7684"})," MCP server\u3002\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528 JavaScript\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5f00\u53d1",children:"\u5f00\u53d1"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u521b\u5efa\u9879\u76ee\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Create a new directory for our project\nmkdir pixabay-mcp-server\ncd pixabay-mcp-server\n\n# Initialize a new npm project\nnpm init -y\n\n# Install dependencies\nnpm install @modelcontextprotocol/sdk zod\n\n# Create our files\ntouch index.js\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u66f4\u65b0\u4e00\u4e0b package.json\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e00\u4e0b bin \u548c\u6587\u4ef6\u6743\u9650\uff0c\u5176\u5b9e node \u5199 MCP Server \u548c\u5199\u547d\u4ee4\u884c\u5de5\u5177\u5dee\u4e0d\u591a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "module",\n  "bin": {\n    "pixabay": "index.js"\n  },\n  "scripts": {\n    "build": " chmod 755 index.js"\n  },\n  "files": [\n    "index.js"\n  ],\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u5f00\u59cb\u7f16\u5199\u903b\u8f91\u4ee3\u7801\u3002 ",(0,t.jsx)(n.code,{children:"@modelcontextprotocol/sdk"})," \u8fd9\u4e2a\u5305\u6765\u8f85\u52a9\u6211\u4eec\u7f16\u5199 MCP Server\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\u5b9a\u4e49 server\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';\nimport { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';\nimport { z } from 'zod';\n\nconst baseUrl = 'https://pixabay.com/api/';\n\nconst server = new McpServer({\n  name: 'pixabay-mcp-server',\n  version: '1.0.0'\n});\n\n// \u63d2\u5165 tool \u4ee3\u7801\n\nasync function startServer() {\n  const transport = new StdioServerTransport();\n  await server.connect(transport);\n}\n\nstartServer();\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u5b9a\u4e49 server \u5185\u7684 tool\uff08server \u7531\u4e00\u4e2a\u4e2a\u7684 tool \u7ec4\u6210\uff09\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"server.tool(\n  'image-search',\n  {\n    query: z.string(),\n    type: z.string()\n  },\n  async ({ query, type = 'all' }) => {\n    try {\n      const requestUrl = `${baseUrl}?key=${process.env.PIXABAY_KEY}&q=${query}&image_type=${type}`;\n      const response = await fetch(requestUrl);\n      const json = await response.json();\n\n      return {\n        content: [{\n          type: 'text',\n          text: JSON.stringify({\n            images: json.hits || [],\n            total_results: json.total,\n            query,\n          }, null, 2)\n        }]\n      }\n    } catch(e) {\n      return {\n        content: [{\n          type: 'text',\n          text: `Error: ${e.message}`\n        }],\n        isError: true\n      };\n    }\n  }\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8c03\u8bd5",children:"\u8c03\u8bd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6d4b\u8bd5\u5de5\u5177\uff0c",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/inspector%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%89%A7%E8%A1%8C%E4%B8%8B%E9%9D%A2%E7%9A%84%E5%91%BD%E4%BB%A4%E6%B5%8B%E8%AF%95%EF%BC%9A",children:"https://github.com/modelcontextprotocol/inspector\uff0c\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6d4b\u8bd5\uff1a"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modelcontextprotocol/inspector node index.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"http://localhost:5173",children:"http://localhost:5173"})," \u8c03\u8bd5\u3002\u5982\u4e0b\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5217\u4e3e\u51fa\u6211\u4eec\u5b9a\u4e49\u7684 tool\uff0c\u5e76\u4e14\u53ef\u4ee5\u89e3\u6790\u51fa tool \u9700\u8981\u7684\u53c2\u6570\uff0c\u6211\u4eec\u8f93\u5165\u53c2\u6570\u540e\uff0c\u70b9\u51fb run tool \u83b7\u53d6\u5230\u6570\u636e\uff0c\u5c31\u8bf4\u660e\u6210\u529f\u4e86\uff01"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://fastly.jsdelivr.net/gh/bucketio/img14@main/2025/03/26/1742958541480-37dc5ca2-8787-4f00-8bb3-b7854342c2af.png",alt:""})}),"\n",(0,t.jsx)(n.h3,{id:"\u53d1\u5e03",children:"\u53d1\u5e03"}),"\n",(0,t.jsxs)(n.p,{children:["\u8c03\u8bd5\u6210\u529f\u540e\uff0c\u5c06\u4e0a\u8ff0\u4ee3\u7801\u53d1\u5e03\u5230 npm\uff0c\u540e\u9762\u5c31\u53ef\u4ee5\u5728\u4f60\u559c\u6b22\u7684 AI App \u4f7f\u7528\u4f60\u7684 MCP sever \u4e86\uff0c\u6bd4\u5982\u4f60\u7684\u5305\u7684\u540d\u5b57\u5c31\u53eb ",(0,t.jsx)(n.code,{children:"pixabay-mcp-server"}),"\uff0c\u8fd9\u91cc\u4ee5 Cursor \u6216\u8005 Cline \u4e3a\u4f8b\u914d\u7f6e\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mcpServers": {\n    "pixabay-mcp-server": {\n      "command": "npx",\n      "args": [\n        "-y",\n        "pixabay-mcp-server"\n      ],\n      "env": {\n        "PIXABAY": "xxxxx"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u5411 AI \u63d0\u51fa\u95ee\u9898 ",(0,t.jsx)(n.code,{children:"search cat photos"}),"\uff0cAI \u4f1a\u8bc6\u522b\u5230\u9700\u8981\u8c03\u7528\u6211\u4eec\u7684\u5de5\u5177\uff0c\u5e76\u4e14\u51c6\u786e\u8bc6\u522b\u5230\u9700\u8981\u63d0\u4f9b\u7684\u53c2\u6570\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://fastly.jsdelivr.net/gh/bucketio/img18@main/2025/03/26/1742959168926-840fc544-282b-449f-9c1b-3c0fc963b2cb.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"\u540e\u9762",children:"\u540e\u9762"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 Node.js \u5199\u4e00\u4e2a MCP Server \u8fd8\u662f\u5f88\u7b80\u5355\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b98\u65b9\u6587\u6863\u4e86\u89e3\u66f4\u591a\uff1a",(0,t.jsx)(n.a,{href:"https://modelcontextprotocol.io/quickstart/server%E3%80%82",children:"https://modelcontextprotocol.io/quickstart/server\u3002"})]}),"\n",(0,t.jsx)(n.p,{children:"MCP Server \u5927\u5927\u6269\u5c55\u4e86\u6211\u4eec\u4f7f\u7528 AI \u7684\u8fb9\u754c\uff0c\u4e0b\u4e00\u7bc7\u6587\u7ae0\u7b80\u5355\u804a\u804a\u6211\u5bf9 MCP \u7684\u4e00\u70b9\u770b\u6cd5\u3002"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)("div",{align:"center",children:[(0,t.jsx)("p",{children:"\u6b22\u8fce\u5173\u6ce8\u6211\u7684\u516c\u4f17\u53f7\uff1a\u524d\u7aef\u751f\u5b58\u6307\u5357\uff0c\u4e00\u8d77\u804a\u804a\u524d\u7aef\u3001AI \u548c\u751f\u6d3b\u3002"}),(0,t.jsx)("img",{src:"https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg",style:{width:"180px"}})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(6540);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);