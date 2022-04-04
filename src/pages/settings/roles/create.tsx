import ProForm, { ProFormText } from "@ant-design/pro-form";
import { Drawer } from "antd";
import { useEffect } from "react";
import styles from "./index.less";
type CreateRoleProps = {
  visible: boolean;
  onClose: () => void;
};
const CreateRole = (props: CreateRoleProps) => {
  const { visible, onClose } = props;
  useEffect(() => {}, []);
  return (
    <Drawer
      title="创建角色"
      className={styles["create-role"]}
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <ProForm>
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
      </ProForm>
    </Drawer>
  );
};
export default CreateRole;
