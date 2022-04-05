import { useEffect, useState } from "react";
import { history, useModel } from "umi";
import { Dropdown, Menu, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

import styles from "./index.less";

const FileDropdownMenu = () => {
  const menu = (
    <div className={styles["drop-meun-content"]}>
      <Menu>
        <Typography.Title
          editable={{
            tooltip: false
          }}
          className={styles["edit-text"]}
        >
          未命名的作品
        </Typography.Title>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>a danger item</Menu.Item>
      </Menu>
    </div>
  );
  return (
    <Dropdown overlay={menu} visible trigger={["click"]} placement="bottomLeft" arrow>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        文件 <DownOutlined />
      </a>
    </Dropdown>
  );
};
export default FileDropdownMenu;
