import { Button } from "antd";
import { useEffect } from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import styles from "./index.less";
const AppDesigner = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["designer-editor"]}>
      <Header />
      <TopBar />
    </div>
  );
};
export default AppDesigner;
