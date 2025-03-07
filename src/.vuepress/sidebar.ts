import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "JavaScript",
      icon: "book",
      prefix: "JavaScript/",
      collapsible: true,
      expanded: true,
      children: "structure",
    },
    {
      text: "ES6",
      icon: "book",
      prefix: "ES6/",
      collapsible: true,
      expanded: false,
      children: "structure",
    },    
    {
      text: "Pinia",
      icon: "book",
      prefix: "Pinia/",
      collapsible: true,
      expanded: false,
      children: "structure",
    },
  ],
  "/posts/": [
    "",
    {
      text: "今日资讯",
      icon: "book",
      prefix: "diary/",
      children: "structure",
    },
  ],
  "/mixed/": [
    {
      text: "技术杂谈",
      icon: "book",
      prefix: "article/",
      children: "structure",
    },
  ]
});
