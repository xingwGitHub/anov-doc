---
home: true
# heroImage: /hero.png
actionText: 开始使用
actionLink: /guide/
features:
- title: 实用方法
  details: 提供在实际开发中使用频率极高的代码片段和方法，节约大量上网Google时间，提高工作效率。
- title: 高频组件
  details: 提供第三方库的扩展方法。基于第三方开源库（Three.js、Echarts、D3js）等，提供的常用的操作方法或二次封装。
- title: 模块化
  details: 使用者可以通过实际情况按需引入需要的模块，减小打包后项目体积。更多关于模块化的信息请访问“指南”。

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
在本文档的所有使用文档中，使用示例都是以以下的形式出现：  
`[dtc.]util.arrayConcat(array1[,array2])`  
**[dtc.]** 表示 `dtc`命名空间是可选的，当你使用按需引入的方式的时候，没有顶层的`dtc`命名空间，当你完全引入的时候则需要通过`dtc`来访问具体的方法。
:::