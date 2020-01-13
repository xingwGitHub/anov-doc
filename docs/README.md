---
home: true
heroImage: /logo.svg
actionText: 开始使用
actionLink: /guide/
features:
- title: 快速高效
  details: 可视化平台提供了丰富的开箱即用的功能，你可以快速构建可视化大屏项目。
- title: 
  details: 
- title: 
  details: 

footer: MIT Licensed | Copyright © 2019-present ANOV
---

## 使用
1. 获取可视化框架代码：
```bash
$ git clone https://github.com/zhu18/anov
$ cd anov
```

2. 安装依赖
```bash
npm install
```

3. 启动项目
```bash
$ npm run serve
```

:::warning NOTE
在本文档出现的服务都挂载在`window.app`对象上，例如： 
你可以通过以下的方式来访问`voiceFeedbackServer`服务   
`app.voiceFeedbackServer`  
:::