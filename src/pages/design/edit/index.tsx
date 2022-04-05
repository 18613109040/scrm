import { useEffect, useState } from "react";
import { history, useModel } from "umi";
import Header from "./components/header";
import styles from "./index.less";

const DesignEdit = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["design-edit"]}>
      <Header />
    </div>
  );
};
export default DesignEdit;
