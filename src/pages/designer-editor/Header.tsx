import { Button, Tooltip, Image } from "antd";
import { useEffect } from "react";
import {
  AppstoreOutlined,
  HddOutlined,
  CheckCircleOutlined,
  SaveOutlined,
  CaretRightOutlined,
  CloudUploadOutlined
} from "@ant-design/icons";
import styles from "./header.less";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["designer-editor-header"]}>
      <div className={styles["designer-editor-header-start"]}>
        <Tooltip title="菜单" placement="bottomLeft">
          <Button
            icon={<AppstoreOutlined style={{ color: "#ffffff", fontSize: "14px" }} />}
            type="text"
          />
        </Tooltip>
        <Tooltip title="数据源" placement="bottomLeft">
          <Button
            className={styles[""]}
            icon={<HddOutlined style={{ color: "#ffffff", fontSize: "14px" }} />}
            type="text"
          >
            数据源
          </Button>
        </Tooltip>
      </div>
      <div className={styles["designer-editor-header-center"]}>
        <Image className={styles["designer-editor-header-center-logo"]} />
        <span className={styles["designer-editor-header-center-title"]}>表单应用</span>
        <CheckCircleOutlined />
      </div>
      <div className={styles["designer-editor-header-end"]}>
        <Tooltip title="保存" placement="bottomLeft">
          <Button
            icon={<SaveOutlined style={{ color: "#ffffff", fontSize: "14px" }} />}
            type="text"
          />
        </Tooltip>
        <Tooltip title="预览" placement="bottomLeft">
          <Button
            icon={<CaretRightOutlined style={{ color: "#ffffff", fontSize: "14px" }} />}
            type="text"
          />
        </Tooltip>
        <Button
          icon={<CloudUploadOutlined style={{ color: "#ffffff", fontSize: "14px" }} />}
          type="primary"
        >
          发布
        </Button>
      </div>
    </div>
  );
};
export default Header;
