import { Button } from "antd";
import { useEffect } from "react";
import { history } from "umi";
import styles from "./index.less";

const AppOwner = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["app-owner"]}>
      <div>
        <Button type="primary" onClick={() => history.push("/designer")}>
          新建应用
        </Button>
      </div>
    </div>
  );
};
export default AppOwner;
