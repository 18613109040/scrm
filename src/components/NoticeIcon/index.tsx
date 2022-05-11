import { useEffect, useState } from "react";
import { Tag, message, Dropdown, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import moment from "moment";
import { useModel, useRequest } from "umi";
import TabMenu from "./TabMenu";
import styles from "./index.less";

export type GlobalHeaderRightProps = {
  fetchingNotices?: boolean;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onNoticeClear?: (tabName?: string) => void;
};

const Notice = () => {
  const { initialState } = useModel("@@initialState");
  const { currentUser } = initialState || {};
  const [visible, setVisible] = useState(false);

  const trigger = (
    <span className={styles["notice-button"]}>
      <Badge count={10} className={styles.badge}>
        <BellOutlined className={styles.icon} />
      </Badge>
    </span>
  );
  return (
    <Dropdown
      placement="bottomRight"
      overlay={TabMenu}
      onVisibleChange={(value: boolean) => setVisible(value)}
      trigger={["click"]}
      visible={visible}
      overlayClassName={styles["notice-container"]}
    >
      {trigger}
    </Dropdown>
  );
};

export default Notice;
