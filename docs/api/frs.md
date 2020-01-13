# 人脸识别服务

该模块提供人脸识别的能力。

## 使用说明

模块化方式

```javascript
// 按需引入
import { faceRecognizeServer } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```

全局对象方式

```javascript
app.faceRecognizeServer
```

## API

**属性**

|   属性    | 说明                 |   类型    | 默认值  |
| :-------: | -------------------- | :-------: | ------- |
| `isStart` | 人脸识别服务是否开始 | `boolean` | `false` |
| `faceCount` | 识别的人脸数量 | `number` | 0 |

---
**方法**

**init(option: object)**

初始化人脸识别服务，你需要传入一个配置对象来初始化该服务的状态。

`option` 的配置项如下。
参数|说明|类型|默认值
:-:|-|:-:|-
`isStart`|是否在初始化的时候启动人脸识别服务|`boolean`|`falsely`

返回值：`undefined`

---

**start()**

开启人脸识别。

返回值：`undefined`

---

**stop()**

停止人脸识别。

返回值：`undefined`


## 事件

**start**

当人脸识别启动的时候触发。

---

**stop**

当人脸识别停止的时候触发。

---

**error**

当网络链接错误或者摄像头无法正常启动时触发。