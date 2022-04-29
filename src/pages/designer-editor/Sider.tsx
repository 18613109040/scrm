import { Button } from "antd";
import { useEffect } from "react";
import DragContainer from "./components/DragContainer";
import styles from "./sider.less";
import { WidgetType } from "./typing";

const Sider = () => {
  useEffect(() => {}, []);
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className={styles["designer-editor-sider"]}>
      <DragContainer onClick={handleClick} data={{ type: WidgetType.INPUT }}>
        <div>111</div>
      </DragContainer>
    </div>
  );
};
export default Sider;
