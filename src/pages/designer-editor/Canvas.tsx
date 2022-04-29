import { Button, Tooltip, Image } from "antd";
import { useEffect } from "react";
import type { DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { DRAG_DROP_TYPE } from "./constant";
import styles from "./canvas.less";

const Canvas = () => {
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
      <div ref={drop} className={styles["drop-container"]} />
    </div>
  );
};
export default Canvas;
