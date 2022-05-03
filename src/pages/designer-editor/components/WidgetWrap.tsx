import type { ReactNode } from "react";
import { useEffect, useImperativeHandle, forwardRef } from "react";

import React, { useContext, useState, useRef } from "react";
import type { DragSourceMonitor, DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { DRAG_DROP_TYPE } from "../constant";
import { Col, Tooltip } from "antd";
import { Form as MobileForm } from "antd-mobile";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import classNames from "classnames";
import styles from "./widgetwrap.less";
import type { WidgetProps } from "../typing";

export type WidgetAction = {
  getBoundingClientRect: () => void;
  row: number;
  col: number;
};

type DragContainerProps = {
  children: ReactNode;
  data: WidgetProps;
  ref?: React.Ref<WidgetAction>;

  hoverRow?: number;
  hoverCol?: number;
};
const WidgetWrap: React.FC<DragContainerProps> = forwardRef((props, ref) => {
  const { children, data } = props;
  const dragRef = useRef<HTMLDivElement>(null);
  const FormItem = MobileForm.Item;
  // useImperativeHandle(ref, () => ({
  //   getBoundingClientRect: () => dragRef.current?.getBoundingClientRect(),
  //   row,
  //   col
  // }));
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_DROP_TYPE,
    item: () => {
      return { ...data };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    }),
    end(item: any, monitor: DragSourceMonitor) {
      // if (monitor.didDrop()) {
      // }
    }
  });

  const [{ handlerId }, drop] = useDrop({
    accept: DRAG_DROP_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover: (item: any, monitor: DropTargetMonitor) => {},
    drop() {}
  });

  const cls = classNames(styles["drag-wrap-item"], {
    // [styles["drag-wrap-item-active"]]: state?.selectedId === data?.id,
    [styles["is-drag"]]: isDragging
  });
  drag(drop(dragRef));
  const horizontalLineCls = classNames(styles["horizontal-line"]);
  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // onCopy && onCopy(row, col);
  };
  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // onDelete && onDelete(row, col);
  };
  return (
    <Col ref={dragRef} className={cls} span={data?.span} data-handler-id={handlerId}>
      <div className={styles["operation-line"]}>
        <div className={styles["operation-wrap"]}>
          <div className={styles["operation-icon"]}>
            <Tooltip title="复制控件">
              <CopyOutlined onClick={handleCopy} />
            </Tooltip>
          </div>
          <div className={styles["operation-icon-delete"]}>
            <Tooltip title="删除">
              <DeleteOutlined onClick={handleDelete} />
            </Tooltip>
          </div>
        </div>
      </div>
      {/* {(hoverDirection === DirectionType.LEFT || hoverDirection === DirectionType.RIGHT) &&
        hoverRow === row &&
        hoverCol === col && <div className={horizontalLineCls} />} */}
      <FormItem required={data?.required || false} label={data?.title} disabled>
        {children}
      </FormItem>
    </Col>
  );
});

export default React.memo(WidgetWrap);
