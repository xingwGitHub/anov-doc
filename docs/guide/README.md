# 开始之前
在开始使用可视化平台之前需要做的准备工作
## 介绍
可视化平台的介绍
## 安装
1. 获取可视化平台代码：
```bash
$ git clone https://github.com/zhu18/anov.git
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
## 开发项目
当项目启动以后，你就进入了正式的开发流程了。但是，请先别动手写代码，花一点事件了熟悉我们的[目录结构](#目录结构)和编写规则是非常必要的。

## 目录结构


:::vue
.
├── `public`
│   ├── index.html
│   ├── anov.png
│   ├── favicon.ico
│   ├── `fonts` _(**字体文件**)_
│   ├── `img` _(**静态图片资源**)_
│   ├── `js` _(**静态JS文件**)_
│   ├── `model` _(**模型文件**)_
│   └── `sound` _(**音效文件**)_
├── `src`
│   ├── App.vue
│   ├── `api`
│   │   ├── index.js
│   │   ├── dataServe.js
│   │   ├── `file`
│   │   │   ├── a.json
│   │   │   ├── b.json
│   │   │   └── index.js
│   │   ├── `graphql`
│   │   │   └── index.js
│   │   ├── `mock`
│   │   │   ├── adapt.js
│   │   │   ├── index.js
│   │   │   └── staticData.js
│   │   ├── `restful`
│   │   │   ├── api.js
│   │   │   ├── config.js
│   │   │   └── index.js
│   │   └── `websocket`
│   │       ├── index.js
│   │       └── ws.js
│   ├── `assets`
│   │   ├── `css` _(**公共css文件**)
│   │   ├── `font` _(**字体图标文件**)_
│   │   ├── `i18n` _(**国际化配置文件**)_
│   │   │   ├── en-US.json
│   │   │   └── zh-CN.json
│   │   ├── `imgs` _(**图片文件**)_
│   │   └── `js`
│   │       ├── `app`
│   │       │   ├── `baseComponents` _(**基础组件**)_
│   │       │   │   ├── anovApp.vue
│   │       │   │   ├── anovPage.vue
│   │       │   │   ├── anovPart.vue
│   │       │   │   ├── index.js
│   │       │   │   └── vdr.js
│   │       │   ├── `cmlpanel` _(**控制面板**)_
│   │       │   │   ├── `components`
│   │       │   │   │   ├── `ai` _(**ai模块**)_
│   │       │   │   │   │   ├── index.vue
│   │       │   │   │   │   ├── `faceRecognize`
│   │       │   │   │   │   │   ├── morePanel.vue
│   │       │   │   │   │   │   └── index.vue
│   │       │   │   │   │   ├── `gestureRecognize`
│   │       │   │   │   │   │   ├── morePanel.vue
│   │       │   │   │   │   │   └── index.vue
│   │       │   │   │   │   ├── `lightSensor`
│   │       │   │   │   │   │   ├── index.vue
│   │       │   │   │   │   │   └── morePanel.vue
│   │       │   │   │   │   ├── `voiceFeedback`
│   │       │   │   │   │   │   ├── morePanel.vue
│   │       │   │   │   │   │   └── index.vue
│   │       │   │   │   │   └── `voiceRecognize`
│   │       │   │   │   │       ├── result.vue
│   │       │   │   │   │       ├── morePanel.vue
│   │       │   │   │   │       ├── result.js
│   │       │   │   │   │       └── index.vue
│   │       │   │   │   ├── `config`
│   │       │   │   │   │   └── voiceCommand.js
│   │       │   │   │   ├── `consolePanel` _(**控制面板**)_
│   │       │   │   │   │   ├── framePanel.vue
│   │       │   │   │   │   ├── index.vue
│   │       │   │   │   │   ├── logPanel.vue
│   │       │   │   │   │   ├── logSetting.vue
│   │       │   │   │   │   ├── timeLine.vue
│   │       │   │   │   │   ├── util.js
│   │       │   │   │   │   ├── vuexPanel.vue
│   │       │   │   │   │   └── vuexSetting.vue
│   │       │   │   │   ├── `data-source` _(**数据源**)_
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `i18n` _(**国际化**)_
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `mappingTable` _(**映射表**)_
│   │       │   │   │   │   ├── `actions`
│   │       │   │   │   │   │   ├── index.vue
│   │       │   │   │   │   │   └── morePanel.vue
│   │       │   │   │   │   ├── `commands`
│   │       │   │   │   │   │   ├── index.vue
│   │       │   │   │   │   │   └── morePanel.vue
│   │       │   │   │   │   ├── `hotkeys`
│   │       │   │   │   │   │   ├── index.vue
│   │       │   │   │   │   │   └── morePanel.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `monitor`
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `part`
│   │       │   │   │   │   ├── customLayout.vue
│   │       │   │   │   │   ├── dragOpt.vue
│   │       │   │   │   │   ├── partSetting.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `sound`
│   │       │   │   │   │   ├── soundsType.vue
│   │       │   │   │   │   ├── sound.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `statusBar`
│   │       │   │   │   │   ├── status-box.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `systemCheck`
│   │       │   │   │   │   ├── check.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `theme` _(**主题**)_
│   │       │   │   │   │   ├── built-in-theme.vue
│   │       │   │   │   │   ├── theme-add.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── status-bar.vue
│   │       │   │   │   ├── footer-nav.vue
│   │       │   │   │   ├── detail-box.vue
│   │       │   │   │   ├── base-more.vue
│   │       │   │   │   ├── top-nav.vue
│   │       │   │   │   ├── cml-module.vue
│   │       │   │   │   ├── cml-module-item.vue
│   │       │   │   │   └── cml-collapse.vue
│   │       │   │   ├── index.js _(**cmlpanel入口文件**)_
│   │       │   │   ├── panel.vue
│   │       │   │   ├── panelServer.js
│   │       │   │   ├── `source`
│   │       │   │   │   └── `img` _(**cmlpanel资源文件)_
│   │       │   │   ├── `store`
│   │       │   │   │   ├── getters.js
│   │       │   │   │   ├── index.js
│   │       │   │   │   ├── mutations.js
│   │       │   │   │   └── state.js
│   │       │   │   ├── `style`
│   │       │   │   │   ├── _ant-rest.scss
│   │       │   │   │   ├── common.scss
│   │       │   │   │   ├── panel-mixin.scss
│   │       │   │   │   └── panel-var.scss
│   │       │   │   └── `util`
│   │       │   │       ├── bus.js
│   │       │   │       ├── cmlGlobal.js
│   │       │   │       ├── collapse-transition.js
│   │       │   │       ├── hotkeys.js
│   │       │   │       ├── stats.js
│   │       │   │       └── themeControl.js
│   │       │   ├── `config` _(**所有服务的基础配置**)_
│   │       │   │   ├── `action`
│   │       │   │   │   ├── index.js
│   │       │   │   │   ├── projectAction.js
│   │       │   │   │   ├── `subs`
│   │       │   │   │   │   ├── ai.js
│   │       │   │   │   │   ├── animation.js
│   │       │   │   │   │   ├── data.js
│   │       │   │   │   │   ├── i18n.js
│   │       │   │   │   │   ├── page.js
│   │       │   │   │   │   ├── panel.js
│   │       │   │   │   │   ├── sound.js
│   │       │   │   │   │   ├── systemCheck.js
│   │       │   │   │   │   └── theme.js
│   │       │   │   │   └── systemAction.js
│   │       │   │   ├── `animate`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `command`
│   │       │   │   │   ├── index.js
│   │       │   │   │   ├── projectCommand.js
│   │       │   │   │   ├── `subs`
│   │       │   │   │   │   ├── ai.js
│   │       │   │   │   │   ├── animation.js
│   │       │   │   │   │   ├── data.js
│   │       │   │   │   │   ├── i18n.js
│   │       │   │   │   │   ├── layout.js
│   │       │   │   │   │   ├── page.js
│   │       │   │   │   │   ├── panel.js
│   │       │   │   │   │   ├── sound.js
│   │       │   │   │   │   ├── systemCheck.js
│   │       │   │   │   │   └── theme.js
│   │       │   │   │   ├── suggestCmd.js
│   │       │   │   │   └── systemCommand.js
│   │       │   │   ├── `env`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `faceRecognize`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `gestureRecognize`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `hotkey`
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── `subs`
│   │       │   │   │       ├── ai.js
│   │       │   │   │       ├── animation.js
│   │       │   │   │       ├── data.js
│   │       │   │   │       ├── i18n.js
│   │       │   │   │       ├── page.js
│   │       │   │   │       ├── panel.js
│   │       │   │   │       ├── sound.js
│   │       │   │   │       ├── systemCheck.js
│   │       │   │   │       └── theme.js
│   │       │   │   ├── `i18n`
│   │       │   │   │   └── index.js
│   │       │   │   ├── index.js
│   │       │   │   ├── `license`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `lightSensor`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `panel`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `sound`
│   │       │   │   │   ├── index.js
│   │       │   │   │   ├── soundOpt.js
│   │       │   │   │   ├── soundsSrc.js
│   │       │   │   │   └── theme
│   │       │   │   │       ├── cheerful.js
│   │       │   │   │       └── technology.js
│   │       │   │   ├── project.js
│   │       │   │   ├── system.js
│   │       │   │   ├── `systemCheck`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `theme`
│   │       │   │   │   └── index.js
│   │       │   │   ├── `voiceFeedback`
│   │       │   │   │   └── index.js
│   │       │   │   └── `voiceRecognize`
│   │       │   │       └── index.js
│   │       │   ├── `utils`
│   │       │   │   ├── SizeAdapt.js
│   │       │   │   ├── chip.js
│   │       │   │   ├── color.js
│   │       │   │   ├── isType.js
│   │       │   │   ├── log.js
│   │       │   │   ├── tools.js
│   │       │   │   ├── urlArg.js
│   │       │   │   └── weather.js
│   │       │   ├── `message`
│   │       │   │   ├── chip-load.vue
│   │       │   │   ├── index.js
│   │       │   │   ├── modal-simple.vue
│   │       │   │   ├── modal.vue
│   │       │   │   ├── system-check.vue
│   │       │   │   └── valid-period.vue
│   │       │   ├── `plugins`
│   │       │   │   └── index.js
│   │       │   └── index.js _(**入口文件**)_
│   │       └── `common`
│   │           ├── extend.js
│   │           ├── fickler.js
│   │           ├── formatTime.js
│   │           └── fullScreen.js
│   ├── `components`
│   │   ├── index.js
│   │   └── `layout`
│   │       ├── `center`
│   │       │   ├── centerBottom.vue
│   │       │   └── centerTop.vue
│   │       ├── `left`
│   │       │   ├── leftBottom.vue
│   │       │   ├── leftCenterBottom.vue
│   │       │   ├── leftCenterTop.vue
│   │       │   └── leftTop.vue
│   │       ├── `right`
│   │       │   ├── rightBottom.vue
│   │       │   ├── rightCenter.vue
│   │       │   └── rightTop.vue
│   │       └── `top`
│   │           ├── top.vue
│   │           ├── topCenter.vue
│   │           ├── topLeft.vue
│   │           └── topRight.vue
│   ├── main.js
│   ├── `pages`
│   │   ├── `business`
│   │   │   ├── `comps`
│   │   │   │   ├── businessChinaMap.vue
│   │   │   │   ├── businessChinaMapEchart.vue
│   │   │   │   ├── businessPieChart.vue
│   │   │   │   ├── `center`
│   │   │   │   │   ├── center.vue
│   │   │   │   │   ├── index.vue
│   │   │   │   │   ├── left.vue
│   │   │   │   │   └── right.vue
│   │   │   │   ├── centerBottom.vue
│   │   │   │   ├── centerTop.vue
│   │   │   │   ├── leftBottom.vue
│   │   │   │   ├── leftCenterTop.vue
│   │   │   │   ├── leftTop.vue
│   │   │   │   ├── `people`
│   │   │   │   │   └── index.vue
│   │   │   │   ├── `right`
│   │   │   │   │   ├── bottom.vue
│   │   │   │   │   ├── center.vue
│   │   │   │   │   └── top.vue
│   │   │   │   └── `topTen`
│   │   │   │       ├── index.vue
│   │   │   │       └── item-box.vue
│   │   │   ├── index.vue
│   │   │   ├── pageConfig.js
│   │   │   └── tl.js
│   │   └── `home`
│   │       ├── `comps`
│   │       │   ├── businessChinaMap.vue
│   │       │   ├── businessChinaMapEchart.vue
│   │       │   ├── businessPieChart.vue
│   │       │   ├── `center`
│   │       │   │   ├── center.vue
│   │       │   │   ├── index.vue
│   │       │   │   ├── left.vue
│   │       │   │   └── right.vue
│   │       │   ├── centerBottom.vue
│   │       │   ├── centerTop.vue
│   │       │   ├── leftBottom.vue
│   │       │   ├── leftCenterTop.vue
│   │       │   ├── leftTop.vue
│   │       │   ├── `people`
│   │       │   │   └── index.vue
│   │       │   ├── `right`
│   │       │   │   ├── bottom.vue
│   │       │   │   ├── center.vue
│   │       │   │   └── top.vue
│   │       │   └── `topTen`
│   │       │       ├── index.vue
│   │       │       └── item-box.vue
│   │       ├── index.vue
│   │       ├── pageConfig.js
│   │       └── tl.js
│   ├── `router`
│   │   └── index.js
│   └── `store`
│       ├── action.js
│       ├── `anov`
│       │   └── `part`
│       │       └── store.js
│       ├── getters.js
│       ├── index.js
│       ├── mutations.js
│       └── state.js
├── README.md
├── babel.config.js
├── gh-md-toc
├── package-lock.json
├── package.json
├── vue.config.js
└── yarn.lock
:::