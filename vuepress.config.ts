import { defineUserConfig } from 'vuepress';
import path from 'path';

const resolve = (p: string) => path.resolve(__dirname, p);

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'vuepress demo',
  description: 'vuepress demo',

  theme: resolve('./src/index.ts'),

  dest: resolve('./dist')
});
