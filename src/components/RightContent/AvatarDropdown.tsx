/*
 * :file description:
 * :name: /hotel-sass/src/components/RightContent/AvatarDropdown.tsx
 * :author: 胡东亮
 * :date created: 2021-08-26 10:22:23
 * :last editor: 胡东亮
 * :date last edited: 2021-08-31 14:04:18
 */
import React, { useCallback } from "react";
import { LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Menu, Spin, Modal } from "antd";
import { history, useModel } from "umi";
import { stringify } from "querystring";
import HeaderDropdown from "./HeaderDropdown";
import styles from "./index.less";
import type { MenuInfo } from "rc-menu/lib/interface";
import { loginOutService } from "@/services/login";
import Cookies from "js-cookie";

const { confirm } = Modal;
export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { initialState, setInitialState } = useModel("@@initialState");

  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await loginOutService();
    const { query = {}, pathname } = history.location;
    const { redirect } = query;
    if (window.location.pathname !== "/login" && !redirect) {
      Cookies.remove("token");
      history.replace({
        pathname: "/login",
        search: stringify({
          redirect: pathname
        })
      });
    }
  };

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === "logout") {
        confirm({
          title: "提示",
          content: "确定注销并退出系统吗？",
          onOk() {
            setInitialState((s) => ({ ...s, currentUser: undefined }));
            loginOut();
          }
        });
      } else {
        history.push(`/account/${key}`);
      }
    },
    [setInitialState]
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.nickName) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>

      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      {/* {menu && <Menu.Divider />} */}
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          src={`http://ssnh.wang:10000/prod-api${currentUser.avatar}`}
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{currentUser.nickName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
