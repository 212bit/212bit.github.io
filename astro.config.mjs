// @ts-check
import { defineConfig } from 'astro/config';

// 部署在 GitHub Pages 用户根站点：https://212bit.github.io
export default defineConfig({
  site: 'https://212bit.github.io',
  markdown: {
    shikiConfig: {
      // 双主题：亮色 vitesse-light，暗色 vitesse-dark（配合 global.css 中的媒体查询切换）
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
      wrap: true,
    },
  },
});
