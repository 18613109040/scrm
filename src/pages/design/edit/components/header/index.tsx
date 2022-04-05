import { useEffect, useState } from "react";
import { history, useModel } from "umi";
import { Layout, Dropdown, Menu } from "antd";
import FileDropdownMenu from "./FileDropdownMenu";

import styles from "./index.less";
const { Header } = Layout;

const NavHeader = () => {
  useEffect(() => {}, []);

  return (
    <Header className={styles["nav-header"]}>
      <div className={styles["header-content"]}>
        <div className={styles["left-header"]}>
          <img className={styles.logo} />
          <FileDropdownMenu />
          <div>撤销</div>
          <div>重做</div>
        </div>
      </div>
    </Header>
  );
};
export default NavHeader;
