# 光感识别服务

该服务提供光感识别的能力。

## 使用说明

模块化方式

```javascript
// 按需引入
import { gestureRecognizeServer } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```

全局对象方式

```javascript
app.gestureRecognizeServer
```

## API

**属性**

|   属性    | 说明                 |   类型    | 默认值  |
| :-------: | -------------------- | :-------: | ------- |
| `isStart` | 光感识别服务是否开始 | `boolean` | `false` |
| `isBrightness` | 是否启用亮度感应 | `boolean` | `false` |
| `isHue` | 是否启用颜色感应 | `boolean` | `false` |
| `intervalTime` | 颜色感应间隔 | `boolean` | `false` |
| `lightColor` | 光感颜色 | `string` | `undefined` |

---
**方法**

**init(option: object)**

初始化光感识别服务，你需要传入一个配置对象来初始化该服务的状态。

`option` 的配置项如下。
参数|说明|类型|默认值
:-:|-|:-:|-
`isStart`|是否在初始化的时候启动光感识别服务|`boolean`|`falsely`
| `isBrightness` | 是否启用亮度感应 | `boolean` | `false` |
| `isHue` | 是否启用颜色感应 | `boolean` | `false` |
| `intervalTime` | 颜色感应间隔 | `boolean` | `false` |

返回值：`undefined`

---
**getColor()**
获取光感识别服务识别的颜色。

返回值：`promise`,`resove`值是一个包含RGB的数组`returns: [Number, Number, Number]`

---

**start()**

开启光感识别。

返回值：`undefined`

---

**stop()**

停止光感识别。

返回值：`undefined`


## 事件

**start**

当光感识别开启的时候触发。

---

**stop**

当光感识别停止的时候触发。

---

**error**

当光感识别发生错误的时候触发。

---

**lightChange**

当光感识别结果发生改变的时候触发。该事件触发的频率受到`intervalTime`参数的影响。