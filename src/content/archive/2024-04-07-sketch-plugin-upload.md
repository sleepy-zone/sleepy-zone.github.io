---
title: "Sketch 插件实现图层导出图片并上传"
slug: "sketch-plugin-upload"
date: "2024-04-07"
tags: ["webdev"]
legacy: true
---

图层导出 buffer：

```js
import SketchDom from 'sketch/dom';
import UI from 'sketch/ui';

const document = SketchDom.getSelectedDocument();
const { layers, length, isEmpty } = document.selectedLayers;

const layer = layers[0];

const options = { formats: 'png', output: false }
const buffer = SketchDom.export(layer, options);
```

buffer 上传：

```js
const formData = new FormData();

formData.append('file', {
  data: buffer,
  fileName: `${Date.now()}.png`,
  mimeType: 'image/png'
}, `${Date.now()}_glaze_layer_img.png`);

return fetch(url, { method: 'POST', body: formData })
```
