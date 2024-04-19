import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "在线知识库",
  description: "好记性不如烂笔头！还没想好放什么",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
