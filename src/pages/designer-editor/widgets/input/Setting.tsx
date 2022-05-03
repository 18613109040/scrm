import React from "react";
import type { WidgetProps } from "../../typing";
import type { PlatformType } from "../../typing";
import styles from "./index.less";

type InputPropsType = {
  platform: PlatformType;
} & WidgetProps;

const Setting = (props: InputPropsType) => {
  const { platform, hint = "" } = props;
  return (
    <div className={styles["readonly-input"]}>
      <div className={styles["readonly-input-ellipsis"]}>{hint}</div>
    </div>
  );
};
export default Setting;
