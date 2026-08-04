# PeaceDove2008 个人博客

一个**可爱粗野主义**（Cute Brutalism）风格的橙色系个人博客，由 [Fuwari](https://github.com/saicaca/fuwari) 深度魔改而来。

## 关于我

- AI 画师 · 全栈开发 · Agent · Furry
- 喜欢用 AI 绘制水彩可爱风格的毛茸茸小动物
- Bilibili：分享画作
- GitHub：折腾代码
- AI 绘画模型均开源在 Hugging Face

## 技术栈

- [Astro](https://astro.build) + [Fuwari](https://github.com/saicaca/fuwari)（静态博客框架）
- Tailwind CSS（样式）
- Svelte（交互组件）
- Pagefind（站内搜索）

## 功能特性

- 可爱粗野主义主题：粗黑边框、硬阴影、糖果色卡片、网格纸背景
- 橙黄色系配色 + PeaceDove2008 背景水印
- 站点统计卡（文章数、总字数）
- AI 作品展示卡（轮播图 + 流动字幕）
- 标签贴纸系统（倾斜标签 + 悬停摇摆）
- 头像卡片：QQ / 微信 hover 展示二维码，Bilibili / GitHub 直达
- 文章卡片：糖果色轮换背景 + 标签徽章
- 深色模式支持

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（localhost:4321）
pnpm dev

# 构建生产版本（输出到 dist/）
pnpm build

# 本地预览构建产物
pnpm preview
```

## 写新文章

在 `src/content/posts/` 下创建 `.md` 文件，参考已有文章的 frontmatter 格式：

```yaml
---
title: 文章标题
published: 2026-08-04
description: 文章描述
tags: [技术]
category: 技术
draft: false
---
```

或使用命令：`pnpm new-post <文件名>`

## 图片素材位置

| 素材 | 位置 |
| --- | --- |
| 头像 | `src/assets/images/avatar.png` |
| 轮播图 | `public/ai-art/pic1.png` ~ `pic6.png` |
| QQ / 微信二维码 | `public/qrcode/qq.jpg`、`public/qrcode/wechat.png` |
| 网站图标 | `public/favicon/favicon.png` |

## 许可协议

本站所有原创内容采用 **CC BY-NC-SA 4.0** 国际协议进行许可。

## 联系方式

- Bilibili：https://space.bilibili.com/675561534
- GitHub：https://github.com/PeaceDove2008
