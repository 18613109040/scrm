import type { ReactElement } from "react";
import React, { ReactNode, useContext, useMemo } from "react";
import { Tabs, Collapse } from "antd";

import styles from "./property.less";
const { TabPane } = Tabs;
const { Panel } = Collapse;
type PropertyProps = {};
const Property: React.FC<PropertyProps> = (): ReactElement => {
  return (
    <div className={styles["property-panel"]}>
      <Tabs type="card" className={styles["property-tabs"]}>
        <TabPane tab="属性" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="样式" key="2">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="布局" key="1">
              <div />
            </Panel>
            <Panel header="定位" key="2">
              <div />
            </Panel>
            <Panel header="字体" key="3">
              <div />
            </Panel>
            <Panel header="背景" key="4">
              <div />
            </Panel>
            <Panel header="边框" key="5">
              <div />
            </Panel>
          </Collapse>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default React.memo(Property);
