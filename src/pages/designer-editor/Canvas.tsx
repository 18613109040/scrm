import { Button, Tooltip, Image, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import type { DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { DRAG_DROP_TYPE } from "./constant";
import styles from "./canvas.less";
import Context from "./store/context";
import { BASE_OSS_URL } from "@/constant";
import classNames from "classnames";
import { Form as MobileForm } from "antd-mobile";
import WidgetWrap from "./components/WidgetWrap";
import DynamicComponent from "./components/DynamicComponent";
import type { WidgetProps } from "./typing";

const Canvas = () => {
  const { state, pushWidget } = useContext(Context);

  const { dimensions, currentPage, pages } = state!;
  const { height, width } = dimensions;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DRAG_DROP_TYPE,
    collect(monitor: DropTargetMonitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      };
    },
    hover(item: any, monitor: DropTargetMonitor) {
      // 组件拖到到可拖动区域
    },
    drop(item: any) {
      console.log("drop---end", item);
      pushWidget!(item);
    }
  });
  const renderEmpty = () => {
    return (
      <>
        <Image
          preview={false}
          src={`${BASE_OSS_URL}/666aae187c9cf8da77816520dbcf8d27.png`}
          className={styles["empty-img"]}
        />
        <div className={styles["empty-text"]}>从左侧面板拖入组件或区块</div>
      </>
    );
  };
  const From = MobileForm;
  const renderWidgets = () => (
    <From layout="horizontal">
      <Row>
        {(pages[currentPage] || []).map((widget: WidgetProps) => (
          <WidgetWrap data={widget} key={widget?.id}>
            <DynamicComponent data={widget} />
          </WidgetWrap>
        ))}
      </Row>
    </From>
  );

  const isActive = canDrop && isOver;
  const dropCls = classNames({
    [styles["device-simulator"]]: true,
    [styles["empty-simulator"]]: (pages[currentPage] || []).length === 0,
    [styles["hover-active"]]: isActive
  });
  return (
    <div className={styles["canvas-container"]}>
      <div className={styles["device-simulator-box"]}>
        <div ref={drop} className={dropCls} style={{ width: `${width}px`, height: `${height}px` }}>
          {(pages[currentPage] || []).length === 0 ? renderEmpty() : renderWidgets()}
        </div>
      </div>
    </div>
  );
};
export default Canvas;
