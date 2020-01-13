# 主题服务

该服务提供所有和主题相关的能力。

## 使用说明
模块化方式
```javascript
// 按需引入
import { themeServer } from 'anov-core'
// 完整引入
import * as anov from 'anov-core'
```
全局对象方式
```javascript
app.themeServer
```

#### 主题配置项
每一个主题的配置选项只是少应该包含以下内容：
```JavaScript
let theme = {
  label: '',
  value: '',
  previewSrc: '',
  config: {
    opacity: 100,
    brightness: 100, // 亮度
    contrast: 100, // 对比度
    grayscale: 0, // 灰度
    hueRotate: 0, // 色相
    invert: 0, // 反向
    saturate: 100, // 饱和度
    sepia: 0 // 褐色
  }
}
```


## API


**方法**

**init(option: object)**
初始化主题的方法，通过配置文件设置当前的主题，更多关于配置文件的信息请访问[配置]()。

返回值：`undefined`

---
**addTheme(theme: object)**

添加一个自定义的主题，传入数据格式如使用说明中的[主题配置项](#主题配置项)。

返回值：`undifined`

---

**deleteTheme(id: string)**
通过主题`id`删除主题。

参数|说明|类型|默认值
:-:|-|:-:|-
`id`|主题id|`string`|`undifined`

返回值：`undefined`

---

**modifyTheme(theme: object)**

编辑主题。

参数|说明|类型|默认值
:-:|-|:-:|-
`theme`|主题配置项，必须保证配置项中包含`id`|`object`|`undifined`

返回值：`undefined`

---

**modifyThemeName(theme: object)**

编辑主题名称。

参数|说明|类型|默认值
:-:|-|:-:|-
`theme`|包含需要修改的主题的必要信息`{id: id, lable: 'lable'}`|`object`|`undifined`

返回值：`undefined`

---

**setTheme(id: string)**

设置当前主题。

参数|说明|类型|默认值
:-:|-|:-:|-
`id`|主题id|`string`|`undifined`

返回值：`undefined`

---

**next()**

应用主题列表中当前主题的下一个主题，如果当前主题是列表中的最后一个主题则循环到第一个主题。

返回值：`undefined`

---

**prev()**

应用主题列表中当前主题的上一个主题，如果当前主题是列表中的第一个主题则循环到最后一个主题。

返回值：`undefined`
