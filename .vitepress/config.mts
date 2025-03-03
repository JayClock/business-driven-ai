import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Business-Driven-AI",
  description: "如果软件不是产品，那么我们在构建软件系统时创建的是什么产品呢",
  themeConfig: {
    sidebar: [
      {
        text: "知识工程",
        items: [
          {
            text: "软件设计原则",
            link: "/docs/knowledge-engineering/law-of-software",
          },
        ],
      },
      {
        text: "工程实践反模式",
        items: [
          {
            text: "特性分支：代码混乱到业务失控",
            link: "/docs/before-ai/bad-ai-practice",
          },
        ],
      },
      {
        text: "面向业务",
        items: [
          {
            text: "履约设计",
            link: "/docs/business-oriented/performance-modeling",
          },
        ],
      },
      {
        text: "代码实现",
        items: [
          {
            text: "Smart Domain",
            link: "/docs/code-implementation/smart-domain",
          },
        ],
      },
      {
        text: "团队知识传递",
        items: [
          {
            text: "Haiven",
            link: "/docs/team-ai/haiven",
          },
        ],
      },
    ],
  },
});
