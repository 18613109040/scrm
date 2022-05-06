import { Form as PcForm, Image, Row } from "antd";
import { useCallback, useContext, useEffect, useState } from "react";
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
import { PlatformType } from "./typing";
export enum HoverDirection {
  NULL,
  /** 上 */
  TOP,
  BOTTOM
}

const Canvas = () => {
  const { state, pushWidget, moveWidget } = useContext(Context);
  const { dimensions, currentPage, pages, platform } = state!;
  const { height, width } = dimensions;
  const From = platform === PlatformType.H5 ? MobileForm : PcForm;
  const [hoverDirection, setHoverDirection] = useState(HoverDirection.NULL);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DRAG_DROP_TYPE,
    collect(monitor: DropTargetMonitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      };
    }
    // hover(item: any, monitor: DropTargetMonitor) {
    //   // 组件拖到到可拖动区域
    // },
    // drop(item: any) {
    //   console.log("drop---end", item);
    //   // pushWidget!(item);
    // }
  });
  const handleExchangeMove = useCallback((dragIndex: number, index: number) => {
    moveWidget!(dragIndex, index);
  }, []);
  const handleMove = (index: number, direction: HoverDirection) => {
    console.log("======", index, direction);
    setHoverDirection(direction);
    setHoverIndex(index);
  };
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
  const verticalLineCls = classNames(styles["vertical-line"], {
    [styles["drage-bootom"]]: hoverDirection === HoverDirection.BOTTOM,
    [styles["drage-top"]]: hoverDirection === HoverDirection.TOP
  });
  const renderWidgets = () => (
    <From layout="horizontal">
      <Row>
        {(pages[currentPage] || []).map((widget: WidgetProps, row: number) => (
          <div key={widget?.id} className={styles["widget-wrap-container"]}>
            {hoverDirection !== HoverDirection.NULL && hoverIndex === row && (
              <div className={verticalLineCls} />
            )}
            <WidgetWrap
              data={widget}
              platform={platform}
              row={row}
              onMove={handleMove}
              onExchangeMove={handleExchangeMove}
            >
              <DynamicComponent data={widget} />
            </WidgetWrap>
          </div>
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
