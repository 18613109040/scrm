/*
 * :file description:
 * :name: /ypms.front/config/config.ts
 * :author: 胡东亮
 * :date created: 2021-08-17 09:50:31
 * :last editor: 胡东亮
 * :date last edited: 2021-09-08 18:27:01
 */
import { defineConfig } from "umi";
import defaultSettings from "./defaultSettings";
import proxy from "./proxy";
import router from "./router";
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  outputPath: "dist",
  publicPath: "/",
  antd: {},
  dva: {
    hmr: true
  },
  layout: {
    locale: false,
    siderWidth: 208,
    ...defaultSettings
  },
  locale: {
    default: "zh-CN",
    antd: true,
    baseNavigator: false
  },
  define: {
    "process.env.REACT_APP_ENV": process.env.REACT_APP_ENV
    // "process.env.PWD": JSON.stringify(process.env.PWD)
  },
  alias: {},
  headScripts: ["//at.alicdn.com/t/font_2315190_vd8yor2220s.js"],
  chunks: ["vendors", "umi"],
  targets: {
    ie: 11,
    chrome: 80
  },
  routes: router,
  theme: {
    "primary-color": defaultSettings.primaryColor
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: false,
  proxy: proxy[REACT_APP_ENV || "dev"],
  fastRefresh: {},
  manifest: {
    basePath: "/"
  },
  nodeModulesTransform: { type: "all" },
  mfsu: {},
  webpack5: {},
  dynamicImport: {
    loading: "@ant-design/pro-layout/es/PageLoading"
  },
  // plugins: ["react-dev-inspector/plugins/umi/react-inspector"],
  // 修复构建文件中含有.mjs
  chainWebpack(config) {
    config.module.rule("mjs-rule").test(/.m?js/).resolve.set("fullySpecified", false);
  }
});
