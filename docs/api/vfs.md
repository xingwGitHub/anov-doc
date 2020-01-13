# 语音提示服务

该服务提供文字转语音的能力。

## 使用说明
模块化方式
```javascript
// 按需引入
import { voiceFeedbackServer } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```
全局对象方式
```javascript
app.voiceFeedbackServer
```


## API

**属性**

属性|说明|类型|默认值
:-:|-|:-:|-
`isReady`(只读)|语音提示服务是否就绪|`boolean`|`false`
`isStart`|语音提示服务是否开始|`boolean`|`false`

**方法**


***
**getOption()**
获取语音提示服务的配置信息

返回值：`object`

属性|说明
:-:|-
`lang`|语言
`volume`|音量
`rate`|语速
`pitch`|音高

***
**init(option: object)**

初始化语音提示服务，你需要传入一个配置对象来初始化该服务的状态。

`option` 的配置项如下。
参数|说明|类型|默认值
:-:|-|:-:|-
`isStart`|语音提示服务是否开始|`boolean`|`undifined`
返回值：`undefined`

***
**setOption(option: object)**
设置语音提示服务的配置信息

属性|说明|类型|默认值
:-:|-|:-:|-
`lang`|语言|`string`|`zh-CN`
`volume`|音量|`number`|1
`rate`|语速|`number`|0.8
`pitch`|音高|`number`|1
返回值：`undefined`

***
**speak(text: string, option: object, force: boolean)**

使用该方法将文字转换为语音。
参数|说明|类型|默认值
:-:|-|:-:|-
`text`|需要转换为语音的文字|`string`|`undifined`
`option`|语音合成配置选项|`object`配置项参见`setOption`方法的配置项|`{}`
`forec`|是否清空当前队列|`boolean`|`falsely`
返回值：`undefined`

***
**start()**
打开语音合成

返回值：`undefined`

***
**stop()**
停止合成语音

返回值：`undefined`

***
**toggleOpen(statu: boolean)**

控制该服务的开启(`true`)和关闭(`false`)   
返回值：`undefined`

## 事件

**start**

当该服务开始播报内容时触发。

***
**end**

当该服务播报内容结束时触发。

***
**error**

当该服务播报内容发生错误的时候触发。