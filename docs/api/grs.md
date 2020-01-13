# 手势识别服务

该模块提供手势识别的能力。

## 使用说明

模块化方式

```javascript
// 按需引入
import { gestureRecognize } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```

全局对象方式

```javascript
app.gestureRecognize
```

## API

**属性**

|   属性    | 说明                 |   类型    | 默认值  |
| :-------: | -------------------- | :-------: | ------- |
| `isStart` | 手势识别服务是否开始 | `boolean` | `false` |

---
**方法**

**init(option: object)**

初始化手势识别服务，你需要传入一个配置对象来初始化该服务的状态。

`option` 的配置项如下。
参数|说明|类型|默认值
:-:|-|:-:|-
`isStart`|是否在初始化的时候启动手势识别服务|`boolean`|`falsely`

返回值：`undefined`

---

**start()**

开启手势识别。

返回值：`undefined`

---

**stop()**

停止手势识别。

返回值：`undefined`


## 事件

**stop**

当手势识别停止的时候触发。

---

**gestureMatch**

当手势识别识别手势的时候触发。该事件返回一个`result`对象:

|   属性    | 说明                 |   类型
| :-------: | -------------------- | :-------:
| `direction` | 识别的手势的文字描述 | `string`
| `up` | 如果识别的手势是向上的，则为`true` | `boolean`
| `down` | 如果识别的手势是向下的，则为`true` | `boolean`
| `left` | 如果识别的手势是向左的，则为`true` | `boolean`
| `right` | 如果识别的手势是向右的，则为`true` | `boolean`
| `error` | 识别错误 | `object`