/*
 * :file description:
 * :name: /hotel-sass/src/components/RightContent/index.tsx
 * :author: 胡东亮
 * :date created: 2021-08-26 10:21:48
 * :last editor: 胡东亮
 * :date last edited: 2021-08-27 14:42:57
 */
import { Space } from "antd";
import React from "react";
import { useModel } from "umi";
import Avatar from "./AvatarDropdown";
import styles from "./index.less";
import Notice from "../NoticeIcon";

export type SiderTheme = "light" | "dark";

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel("@@initialState");

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === "dark" && layout === "top") || layout === "mix") {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className} size="large">
      <Notice />
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
