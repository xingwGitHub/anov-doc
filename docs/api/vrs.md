# 语音识别服务

该模块提供语音识别的能力。

## 使用说明

模块化方式

```javascript
// 按需引入
import { voiceRecognize } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```

全局对象方式

```javascript
app.voiceRecognize
```

## API

**属性**

|   属性    | 说明                 |   类型    | 默认值  |
| :-------: | -------------------- | :-------: | ------- |
| `isStart` | 语音识别服务是否开始 | `boolean` | `false` |

---
**方法**

**addCommands(cmds: array)**

添加语音识别指令，更多信息请访问[指令]()。

返回值：`undefined`

---

**getCommands()**

获取语音识别指令。

返回值：`array`

---

**init(option: object)**

初始化语音识别服务，你需要传入一个配置对象来初始化该服务的状态。

`option` 的配置项如下。
参数|说明|类型|默认值
:-:|-|:-:|-
`isStart`|是否在初始化的时候启动语音识别服务|`boolean`|`falsely`

返回值：`undefined`

---

**pause()**

暂停收听。服务将停止响应命令（直到调用resume或start方法），而不关闭浏览器的语音识别引擎或麦克风。

返回值：`undefined`

---

**resume()**

在结果匹配时继续侦听和还原命令回调执行。如果语音识别被中止（`stop`），则启动它。

返回值：`undefined`

---

**start()**

开始倾听。最好先添加一些指令，然后再调用它，但不是强制的。

返回值：`undefined`

---

**stop()**

停止监听，关掉麦克风。

如果要在不停止语音识别引擎或关闭麦克风的情况下暂时暂停对命令的响应，请改用`pause()`。

返回值：`undefined`

---

**toggle()**

`start()`/`stop()`这两个方法的切换。

返回值：`undefined`

## 事件

**onStart**

当浏览器的语音识别引擎开始监听时立即启动。

---

**onSoundStart**

检测到任何声音（可能是语音）后立即启动。

---

**onResult**

当语音识别结果成功的时候触发。

---

**onResultMatch**

当服务能够匹配用户所说的内容和注册的命令匹配时触发。

---

**onError**

当浏览器阻止使用语音识别的权限请求时激发，将以错误事件作为第一个参数调用回调函数；
当用户阻止使用语音识别的权限请求时激发，将以错误事件作为第一个参数调用回调函数；
当语音识别因网络错误而失败时激发。
