/*
 * :file description:
 * :name: /hotel-sass/src/components/NoticeIcon/TabMenu.tsx
 * :author: 胡东亮
 * :date created: 2021-08-27 10:14:13
 * :last editor: 胡东亮
 * :date last edited: 2021-08-27 14:19:06
 */
import { useEffect, useState } from "react";
import { Tag, message, Dropdown, Badge, Tabs } from "antd";
import styles from "./index.less";

const { TabPane } = Tabs;
enum msgType {
  /** 门店消息 */
  STORE = 1,
  /** 资产消息 */
  ASSETS,
  /** 房间消息 */
  ROOM,
  /** 订单消息 */
  ORDER,
  /** 商城消息 */
  MALL,
  /** 集团消息 */
  GROUP,
  /** 系统公告 */
  SYSTEM
}
type MenuType = {
  title: string;
  key: msgType;
  list: any[];
};
const TabMenu = () => {
  const tabs: Record<Partial<msgType>, MenuType> = {
    [msgType.STORE]: {
      title: "门店消息",
      key: msgType.STORE,
      list: []
    },
    [msgType.ASSETS]: {
      title: "资产消息",
      key: msgType.ASSETS,
      list: []
    },
    [msgType.ROOM]: {
      title: "房间消息",
      key: msgType.ROOM,
      list: []
    },
    [msgType.ORDER]: {
      title: "订单消息",
      key: msgType.ORDER,
      list: []
    },
    [msgType.MALL]: {
      title: "商城消息",
      key: msgType.MALL,
      list: []
    },
    [msgType.GROUP]: {
      title: "集团消息",
      key: msgType.GROUP,
      list: []
    },
    [msgType.SYSTEM]: {
      title: "系统公告",
      key: msgType.SYSTEM,
      list: []
    }
  };

  return (
    <div className={styles.tabs}>
      <Tabs>
        {Object.keys(tabs).map((key) => (
          <TabPane tab={tabs[key].title} key={key}>
            Content of Tab Pane 1
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default TabMenu;
