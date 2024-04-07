---
slug: ui-diff-in-out
title: 国内外组件库的一些差异
authors: [sleepy]
tags: [dev]
---

最近在两个项目里分别用了 antd 和 shadcn 两个 react ui 库，又对比了一下国内外的一些组件库，发现两边有一些不一样。

## CSS 样式

不得不说老外总是能从一些我们已经不怎么关注的地方卷出一些东西来，Tailwind CSS 出现以后，国外组件库样式方案基本都是这一套了。

我自己尝试了一下，配合 vscode 插件无脑写样式确实挺爽的，虽然 classname 会超长。当然也有方式组合这些原子样式，但那味道就不对了。

因为这些样式最终都是构建到最终产物内，那就肯定是按需使用了😂。类似的 shadcn 组件也是这样用到哪个 install 哪个，还管什么摇树😆，而且组件和样式都暴露给你，随意修改。

再说说 antd，从 classname 过渡到 css in js ，但对使用者来讲并没有什么本质的变化，不过想覆盖样式的时候确实方便了许多。从 antd 里学到了 has where 这些 css 知识。

不过有一点是一致的，css variable 已经是共识了。

## 表单

都说国内已经搞大而全的超级 app，组件库也一样。通常表单都会附带一个表单实例，这个实例可以管理各个表单组件的 value onChange，负责收集表单组件的数据以及给表单组件赋值。同时会贴心的提供数组类型的表单，联动也会支持。我用的反正挺爽的。

国外的这些组件库，好像都不做这些事情。如果要管理表单，自己去 install 个 useForm。联动和复杂格式也都没有提供，组件库就真的只是 ui。

虽然他们内部不提供很多功能，但通常又会有大量的模板，或许国外模板付费意愿比较强吧。😂

## API 

用 shadcn 的时候，copy 代码的时候有个明显的感觉，就是量大。他们是真的奉行了组件要组合。比如 Drawer：

```typescript
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function App () {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
```

可以看到，什么关闭按钮、标题都会抽成一个组件。

国内一般都是提供一个数据的 props ，奉行了一切皆数据。即使像 radio 这种组合的组件，也会提供一个 options 的数据接口。

```typescript
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open} closeIcon={} footer={}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
```

以上只是针对我看到的几个点做了对比，没有哪个好哪个坏，毕竟我都用的挺爽的。


最后！国内有些组件库，甚至是大厂的组件库，一个大厂还搞两个类似的没有创意的组件库，真的让人感觉丢人！
