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
│   ├── `fonts`
│   │   ├── HYLingXinTiJ.ttf
│   │   ├── HYQiHeiY2-35J.ttf
│   │   ├── HYZhuZiChaoRanTiW.ttf
│   │   ├── acens.ttf
│   │   └── digital.ttf
│   ├── `img`
│   │   ├── body-bg.png
│   │   └── loading.gif
│   ├── `js`
│   │   ├── CustomEase.min.js
│   │   ├── DrawSVGPlugin.min.js
│   │   ├── ScrambleTextPlugin.min.js
│   │   ├── SplitText.min.js
│   │   ├── morphsvgplugin.min.js
│   │   ├── preload.js
│   │   ├── preloadList.js
│   │   └── preloadjs.min.js
│   ├── `model`
│   │   └── facefinder
│   └── `sound`
│       ├── `cheerful`
│       │   ├── bgm.mp3
│       │   ├── click.mp3
│       │   ├── highLight.mp3
│       │   ├── number.mp3
│       │   ├── outScene.mp3
│       │   └── words.mp3
│       ├── `default`
│       │   ├── bgm.mp3
│       │   ├── click.mp3
│       │   ├── highLight.mp3
│       │   ├── matched.mp3
│       │   ├── messageError.mp3
│       │   ├── messageInfo.mp3
│       │   ├── messageSuccess.mp3
│       │   ├── messageSuccess1.mp3
│       │   ├── messageSuccess2.mp3
│       │   ├── messageWarning.mp3
│       │   ├── noticeError.mp3
│       │   ├── noticeSuccess.mp3
│       │   ├── noticeWarning.mp3
│       │   ├── number.mp3
│       │   ├── outScene.mp3
│       │   └── words.mp3
│       └── `technology`
│           ├── bgm.mp3
│           ├── click.mp3
│           ├── highLight.mp3
│           ├── number.mp3
│           ├── outScene.mp3
│           └── words.mp3
├── `src`
│   ├── App.vue
│   ├── `api`
│   │   ├── dataServe.js
│   │   ├── `file`
│   │   │   ├── a.json
│   │   │   ├── b.json
│   │   │   └── index.js
│   │   ├── `graphql`
│   │   │   └── index.js
│   │   ├── index.js
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
│   │   ├── `css`
│   │   │   ├── _ant-rest.scss
│   │   │   ├── _lib-base.scss
│   │   │   ├── _lib-mixin.scss
│   │   │   ├── _lib-reset.scss
│   │   │   ├── _lib-variable.scss
│   │   │   ├── index.scss
│   │   │   ├── panel-mixin.scss
│   │   │   └── panel-var.scss
│   │   ├── `font`
│   │   │   ├── `font-platform`
│   │   │   │   ├── iconfont.css
│   │   │   │   ├── iconfont.eot
│   │   │   │   ├── iconfont.svg
│   │   │   │   ├── iconfont.ttf
│   │   │   │   ├── iconfont.woff
│   │   │   │   └── iconfont.woff2
│   │   │   ├── iconfont.css
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   ├── iconfont.woff2
│   │   │   └── smart-data.css
│   │   ├── `i18n`
│   │   │   ├── en-US.json
│   │   │   └── zh-CN.json
│   │   ├── `imgs`
│   │   │   ├── `base`
│   │   │   │   ├── clip-corner-bg.svg
│   │   │   │   └── triangle-corner-bg.svg
│   │   │   ├── `panel`
│   │   │   │   ├── bg-fill.png
│   │   │   │   ├── btn-bg.png
│   │   │   │   ├── btn-def.png
│   │   │   │   ├── btn-pre.png
│   │   │   │   ├── close.svg
│   │   │   │   ├── config-active.svg
│   │   │   │   ├── config.svg
│   │   │   │   ├── corner.svg
│   │   │   │   ├── dev-active.svg
│   │   │   │   ├── dev.svg
│   │   │   │   ├── logo.png
│   │   │   │   ├── monitoring-bg.png
│   │   │   │   ├── network-error.svg
│   │   │   │   ├── network-ok.svg
│   │   │   │   └── reset.svg
│   │   │   ├── preview.jpg
│   │   │   └── `topTitle`
│   │   │       ├── button-active.png
│   │   │       ├── button-inactive.png
│   │   │       ├── chart-title-bg.png
│   │   │       ├── first-title-bg.png
│   │   │       ├── logo.png
│   │   │       ├── second-title-bg.png
│   │   │       ├── title-bg.png
│   │   │       ├── top-left-bg.png
│   │   │       └── top-left-words.png
│   │   └── `js`
│   │       ├── `app`
│   │       │   ├── `baseComponents`
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
│   │       │   │   │   ├── `consolePanel`
│   │       │   │   │   │   ├── framePanel.vue
│   │       │   │   │   │   ├── index.vue
│   │       │   │   │   │   ├── logPanel.vue
│   │       │   │   │   │   ├── logSetting.vue
│   │       │   │   │   │   ├── timeLine.vue
│   │       │   │   │   │   ├── util.js
│   │       │   │   │   │   ├── vuexPanel.vue
│   │       │   │   │   │   └── vuexSetting.vue
│   │       │   │   │   ├── `data-source`
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `i18n`
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── `mappingTable`
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
│   │       │   │   │   ├── `theme`
│   │       │   │   │   │   ├── built-in-theme.vue
│   │       │   │   │   │   ├── theme-add.vue
│   │       │   │   │   │   └── index.vue
│   │       │   │   │   ├── status-bar.vue
│   │       │   │   │   ├── footer-nav.vue
│   │       │   │   │   ├── detail-box.vue
│   │       │   │   │   ├── base-more.vue
│   │       │   │   │   ├── cml-collapse.vue
│   │       │   │   │   ├── cml-module.vue
│   │       │   │   │   ├── cml-module-item.vue
│   │       │   │   │   └── top-nav.vue
│   │       │   │   ├── index.js
│   │       │   │   ├── panel.vue
│   │       │   │   ├── panelServer.js
│   │       │   │   ├── `source`
│   │       │   │   │   └── `img`
│   │       │   │   │       ├── border.svg
│   │       │   │   │       ├── icon-3dMap.svg
│   │       │   │   │       ├── icon-ai.svg
│   │       │   │   │       ├── icon-animate.svg
│   │       │   │   │       ├── icon-cancel.svg
│   │       │   │   │       ├── icon-carouse.svg
│   │       │   │   │       ├── icon-city.svg
│   │       │   │   │       ├── icon-data.svg
│   │       │   │   │       ├── icon-dev.svg
│   │       │   │   │       ├── icon-exit.svg
│   │       │   │   │       ├── icon-i18n.svg
│   │       │   │   │       ├── icon-layout.svg
│   │       │   │   │       ├── icon-more.svg
│   │       │   │   │       ├── icon-reset.svg
│   │       │   │   │       ├── icon-theme.svg
│   │       │   │   │       ├── icon-triangle.svg
│   │       │   │   │       ├── logo-uv.png
│   │       │   │   │       ├── network-error.svg
│   │       │   │   │       ├── network-ok.svg
│   │       │   │   │       └── reset.svg
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
│   │       │   │       ├── acturlHeight.js
│   │       │   │       ├── bus.js
│   │       │   │       ├── cmlGlobal.js
│   │       │   │       ├── collapse-transition.js
│   │       │   │       ├── directive.js
│   │       │   │       ├── hotkeys.js
│   │       │   │       ├── mitt.js
│   │       │   │       ├── network.js
│   │       │   │       ├── stats.js
│   │       │   │       └── themeControl.js
│   │       │   ├── `config`
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
│   │       │   ├── index.js
│   │       │   ├── `message`
│   │       │   │   ├── chip-load.vue
│   │       │   │   ├── index.js
│   │       │   │   ├── modal-simple.vue
│   │       │   │   ├── modal.vue
│   │       │   │   ├── system-check.vue
│   │       │   │   └── valid-period.vue
│   │       │   ├── `plugins`
│   │       │   │   └── index.js
│   │       │   └── `utils`
│   │       │       ├── SizeAdapt.js
│   │       │       ├── chip.js
│   │       │       ├── color.js
│   │       │       ├── isType.js
│   │       │       ├── log.js
│   │       │       ├── tools.js
│   │       │       ├── urlArg.js
│   │       │       └── weather.js
│   │       └── `common`
│   │           ├── chinaGeo.json
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