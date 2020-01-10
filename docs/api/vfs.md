# 语音提示服务


该模块提供文字转语音的能力。

## 使用说明
引入模块
```javascript
// 按需引入
import { voiceFeedback } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```

## API

**属性**

属性|说明|类型|默认值
:-:|-|:-:|-
`isReady`(只读)|语音提示服务是否就绪|`boolean`|`false`
`isStart`|语音提示服务是否开始|`boolean`|`false`

**方法**

**init(option: object)**
***
初始化语音提示服务，你需要传入一个配置对象来初始化该服务的状态。

`option` 的配置项如下。
属性|说明|类型|默认值
:-:|-|:-:|-
`isStart`|语音提示服务是否开始|`boolean`|`undifined`

**toggleOpen(statu: boolean)**
***
控制该服务的开启(`true`)和关闭(`false`)，


## 事件

**_onStart**
***
当该服务开始播报内容时触发。

**_onEnd**
***
当该服务播报内容结束时触发。

**_onError**
***
当该服务播报内容发生错误的时候触发。