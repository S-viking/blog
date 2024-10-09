import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://github.com/S-viking",

  author: {
    name: "Rose",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/images/rose.jpg",

  repo: "https://github.com/S-viking",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "MIT Licensed | Copyright © 2024-present Rose",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "尽管走下去，不必逗留着，去采鲜花来保存，因为在这一路上，花自然会继续开放",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://www.bilibili.com/",
      Gitee: "https://gitee.com/tne-viking",
      GitHub: "https://github.com/S-viking"
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // 此功能被开启用于演示，你应仅当使用时保留。
    markdownTab: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
    }
  },
});
