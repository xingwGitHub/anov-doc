# 配置项

我们在`src/assets/js/app/config`目录下提供了项目在初始化的时候需要使用的配置文件，你可以根据[每个服务](../api/README.md)的具体情况设置默认的`config`。

可用的`config`对象包含以下内容:

```javascript
{
  dataSource: {
    type: 'mock'
  },
  voiceFeedback: {
    isStart: false
  },
  voiceRecognize: {
    isStart: false
  },
  lightSensor: {
    isStart: false,
    isHue: true,
    isBrightness: true,
    intervalTime: 1000
  },
  faceRecognize: {
    isStart: false
  },
  gestureRecognize: {
    isStart: false
  },
  animateConfig: {
    animateDebug: false
  },
  theme: {
    themes: [
      {
        label: '默认',
        value: 'default',
        previewSrc: 'img/preview.10e3e508.jpg',
        config: {
          blur: 0,
          opacity: 100,
          brightness: 100,
          contrast: 100,
          grayscale: 0,
          hueRotate: 0,
          invert: 0,
          saturate: 100
        }
      },
      {
        label: '森之仙境',
        value: 'forest',
        previewSrc: 'img/preview.10e3e508.jpg',
        config: {
          blur: 0,
          opacity: 100,
          brightness: 122,
          contrast: 94,
          grayscale: 17,
          hueRotate: 323,
          invert: 0,
          saturate: 124
        }
      },
      {
        label: '江山如画',
        value: 'paint',
        previewSrc: 'img/preview.10e3e508.jpg',
        config: {
          blur: 0,
          opacity: 96,
          brightness: 126,
          contrast: 100,
          grayscale: 100,
          hueRotate: 146,
          invert: 100,
          saturate: 198
        }
      },
      {
        label: '怀旧',
        value: 'oldtime',
        previewSrc: 'img/preview.10e3e508.jpg',
        config: {
          blur: 0,
          opacity: 100,
          brightness: 130,
          contrast: 89,
          grayscale: 100,
          hueRotate: 357,
          invert: 0,
          saturate: 68
        }
      },
      {
        label: '靓丽',
        value: 'beauty',
        previewSrc: 'img/preview.10e3e508.jpg',
        config: {
          blur: 0,
          opacity: 100,
          brightness: 150,
          contrast: 79,
          grayscale: 0,
          hueRotate: 336,
          invert: 0,
          saturate: 298
        }
      }
    ],
    currentThemeValue: 'default'
  },
  language: {
    options: [
      {
        label: '中文',
        value: 'zh-CN'
      },
      {
        label: 'English',
        value: 'en-US'
      }
    ],
    lang: 'zh-CN'
  }
}
```
