<p align="center">
瑞可报名微信小程序端
</p>

<p align="center">
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/badge/react-17.0.0-brightgreen.svg" alt="react">
  </a>
  <a href="https://github.com/NervJS/taro">
    <img src="https://img.shields.io/badge/taro-3.3.5-brightgreen.svg" alt="taro">
  </a>
  <a href="https://travis-ci.org/zhangtao25/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/zhangtao25/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/zhangtao25/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>


## 简介

[activity-weapp](https://zhangtao25.github.io/vue-element-admin) 是一个瑞可活动报名的微信小程序端，它基于 [react](https://github.com/vuejs/vue) 和 [taro](https://github.com/ElemeFE/element)实现。它使用了最新的前端技术栈，包含了 i18n 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速快速学习react和搭建taro项目。相信不管你的需求是什么，本项目都能帮助到你。

- [在线预览](https://zhangtao25.github.io/vue-element-admin)

- [使用文档](https://zhangtao25.github.io/vue-element-admin-site/zh/)

**`v4.1.0+`版本之后默认 master 分支将不支持国际化，有需要的请使用[i18n](https://github.com/zhangtao25/vue-element-admin/tree/i18n)分支，它会和 master 保持同步更新**

**该项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill [详情](https://github.com/zhangtao25/vue-element-admin/wiki#babel-polyfill)**

**目前版本为 `v4.0+` 基于 `vue-cli` 进行构建，若发现问题，欢迎提[issue](https://github.com/zhangtao25/vue-element-admin/issues/new)。若你想使用旧版本，可以切换分支到[tag/3.11.0](https://github.com/zhangtao25/vue-element-admin/tree/tag/3.11.0)，它不依赖 `vue-cli`**

群主 **[圈子](https://jianshiapp.com/circles/1209)** 群主会经常分享一些技术相关的东西，或者加入 [qq 群](https://github.com/zhangtao25/vue-element-admin/issues/602) 或者关注 [微博](https://weibo.com/u/3423485724?is_all=1)

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

**如有问题请先看上述使用文档和文章，若不能满足，欢迎 issue 和 pr**


## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - dev
  - sit
  - stage
  - prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
- Markdown2html
```

## 开发

```bash
# 克隆项目
git clone https://github.com/zhangtao25/activity-weapp.git

# 进入项目目录
cd activity-weapp

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 修改appid
cp -r project.config.copy.json project.config.json

# 启动服务
npm run dev:weapp
```

使用微信小程序开发工具打开该项目的dist文件夹

## 发布

```bash
npm run build:weapp
```

使用微信小程序发布


更多信息请参考 [使用文档](https://zhangtao25.github.io/vue-element-admin-site/zh/)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/zhangtao25/vue-element-admin/releases).


## Donate

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 :tropical_drink:

[comment]: <> (![donate]&#40;https://zhangtao25.github.io/donate/donation.png&#41;)

[更多捐赠方式](https://zhangtao25.gitee.io/vue-element-admin-site/zh/donate)

[Paypal Me](https://www.paypal.me/panfree23)

[Buy me a coffee](https://www.buymeacoffee.com/Pan)

## 购买贴纸

你也可以通过 购买[官方授权的贴纸](https://smallsticker.com/product/vue-element-admin) 的方式来支持 vue-element-admin - 每售出一张贴纸，本项目将获得 2 元的捐赠。

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## License

[MIT](https://github.com/zhangtao25/vue-element-admin/blob/master/LICENSE)

Copyright (c) 2017-present zhangtao25
