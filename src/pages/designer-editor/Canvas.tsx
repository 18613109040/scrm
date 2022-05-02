import { Button, Tooltip, Image } from "antd";
import { useContext, useEffect } from "react";
import type { DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { DRAG_DROP_TYPE } from "./constant";
import styles from "./canvas.less";
import Context from "./store/context";

const Canvas = () => {
  const { state } = useContext(Context);
  console.log(state?.dimensions);
  const [, drop] = useDrop({
    accept: DRAG_DROP_TYPE,
    collect(monitor: DropTargetMonitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: any) {
      // 组件拖到到可拖动区域
      console.log("hover");
      console.log(item);
    },
    drop() {
      console.log("drop");
    }
  });
  return (
    <div className={styles["canvas-container"]}>
      <div className={styles["device-simulator-box"]}>
        <div className={styles["device-simulator"]} />
      </div>
      <div ref={drop} className={styles["drop-container"]} />
    </div>
  );
};
export default Canvas;
