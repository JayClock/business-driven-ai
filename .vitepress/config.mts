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
            text: "软件过程定律",
            link: "/docs/knowledge-engineering/law-of-software",
          },
          {
            text: "知识来源",
            link: "/docs/knowledge-engineering/books",
          },
        ],
      },
      {
        text: "工程实践反模式",
        items: [
          {
            text: "特性分支",
            link: "/docs/before-ai/bad-ai-practice",
          },
        ],
      },
      {
        text: "面向业务",
        items: [
          {
            text: "履约建模",
            link: "/docs/business-oriented/performance-modeling",
          },
        ],
      },
      {
        text: "架构指导",
        items: [
          {
            text: "Smart Domain",
            link: "/docs/code-implementation/smart-domain",
          },
        ],
      },
      {
        text: "知识传递",
        items: [
          {
            text: "Haiven",
            link: "/docs/team-ai/haiven",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/JayClock/business-driven-ai",
      },
    ],
  },
});
