import type { ReactElement } from "react";
import { ReactNode, useContext, useMemo } from "react";
import React from "react";
import styles from "./property.less";

type PropertyProps = {};
const Property: React.FC<PropertyProps> = (): ReactElement => {
  return <div className={styles["property-panel"]} />;
};
export default React.memo(Property);
