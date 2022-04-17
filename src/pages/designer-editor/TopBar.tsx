import { Button } from "antd";
import { useEffect } from "react";
import styles from "./topbar.less";

const TopBar = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["designer-editor-topbar"]}>
      <div className={styles["designer-editor-topbar-left"]}>
        <div className={styles["designer-editor-topbar-left-page"]}>1</div>
        <div className={styles["designer-editor-topbar-left-platform"]}>2</div>
      </div>
      <div className={styles["designer-editor-topbar-right"]}>面板</div>
    </div>
  );
};
export default TopBar;
