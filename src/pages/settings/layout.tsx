import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Menu, Input, Button, message, Checkbox } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";

import styles from "./layout.less";

type SettingLayoutProps = {
  children: ReactNode;
};
const SettingLayout = (props: SettingLayoutProps) => {
  useEffect(() => {}, []);

  return (
    <div className={styles["setting-container"]}>
      <div>
        <Menu style={{ width: 256 }} defaultSelectedKeys={["1"]} mode="vertical" theme="light">
          <Menu.ItemGroup key="g1" title="系统设置">
            <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
              角色管理
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              菜单管理
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </div>
      <div className={styles["setting-right"]}>{props.children}</div>
    </div>
  );
};
export default SettingLayout;
