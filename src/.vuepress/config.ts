import { defineUserConfig } from 'vuepress'


import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "rose的博客",
  description: "rose的博客，记录一些学习笔记",

  theme,
});
