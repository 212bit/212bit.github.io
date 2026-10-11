# 212bit 技术手记

个人技术博客：记录项目手记与技术感悟。基于 [Astro](https://astro.build) 构建，部署在 GitHub Pages（<https://212bit.github.io>）。

## 本地开发

```bash
pnpm install        # 安装依赖
pnpm dev            # 开发服务器 http://localhost:4321
pnpm build          # 构建到 dist/
pnpm preview        # 本地预览构建产物
```

## 写新文章

在 `src/content/blog/` 下新建 `.md` 文件：

```yaml
---
title: 文章标题
description: 一两句话摘要（会显示在列表和 RSS 里）
date: 2026-10-11
tags: [标签1, 标签2]
draft: false        # true 则不发布
---

正文从这里开始，支持标准 Markdown。
```

保存后 `git push` 到 `main`，GitHub Actions 自动构建并发布。

## 常用改动

| 想改什么 | 去哪里 |
| --- | --- |
| 站点名称 / 简介 / GitHub 链接 | `src/consts.ts` |
| 项目列表 | `src/pages/projects.astro` 顶部的 `projects` 数组 |
| 关于页内容 | `src/pages/about.astro` |
| 首页文案 / Hero | `src/pages/index.astro` |
| 颜色 / 字体 / 设计系统 | `src/styles/global.css` 顶部的 CSS 变量 |

## 目录结构

```
├── public/                 # 静态资源（favicon 等）
├── src/
│   ├── components/         # Header / Footer
│   ├── content/blog/       # 文章（Markdown）
│   ├── layouts/            # Base 布局
│   ├── pages/              # 路由：首页、blog/、projects/、about/、rss.xml
│   ├── styles/global.css   # 设计系统（纸上手记 · Seal & Ink）
│   ├── consts.ts           # 站点配置
│   └── content.config.ts   # 内容集合 schema
└── .github/workflows/      # GitHub Pages 部署工作流
```

## 设计

「纸上手记 · Seal & Ink」：暖纸色底、衬线大标题（Fraunces + 宋体）、
等宽字体元信息（IBM Plex Mono）、朱砂印章作唯一强调色；
暗色模式跟随系统自动切换，零 JavaScript。
