import ProTable from "@ant-design/pro-table";
import { Button } from "antd";
import { useEffect } from "react";
// import styles from "./index.less";

const Roles = () => {
  useEffect(() => {}, []);
  const columns = [
    {
      dataIndex: "name",
      title: "角色名称"
    },
    {
      dataIndex: "name",
      title: "数据权限"
    },
    {
      valueType: "option",
      title: "操作",
      key: "option",
      render: () => {
        return (
          <a key="editable" onClick={() => {}}>
            编辑
          </a>
        );
      }
    }
  ];
  return (
    <div className={styles["role-container"]}>
      <ProTable
        columns={columns}
        dataSource={[]}
        search={false}
        options={false}
        toolBarRender={() => [
          <Button type="primary" key="show">
            新增角色
          </Button>
        ]}
      />
    </div>
  );
};
export default Roles;
