/*
 * :file description:
 * :name: /ypms.front/config/proxy.ts
 * :author: 胡东亮
 * :date created: 2021-08-17 09:50:31
 * :last editor: 胡东亮
 * :date last edited: 2021-09-12 18:49:10
 */
export default {
  dev: {
    "/prod-api": {
      target: "http://ssnh.wang:10002",
      changeOrigin: true
      // pathRewrite: { "^/dev/h5": "" }
    }
  },
  prod: {
    "/api/": {
      target: "your pre url",
      changeOrigin: true,
      pathRewrite: { "^": "" }
    }
  }
};
