/*
 * :file description:
 * :name: /hotel-sass/config/defaultSettings.ts
 * :author: 胡东亮
 * :date created: 2021-07-29 16:47:55
 * :last editor: 胡东亮
 * :date last edited: 2021-08-23 17:43:38
 */

import { Settings as LayoutSettings } from "@ant-design/pro-layout";

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: "light",
  // 拂晓蓝
  primaryColor: "#1890ff",
  layout: "mix",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: "",
  pwa: false,
  logo: "",
  iconfontUrl: "//at.alicdn.com/t/font_2763620_oyme1fd1iy.js"
};

export default Settings;
