import type { ReactNode } from "react";
import { useState } from "react";
import React, { forwardRef, useRef } from "react";
import type { DragSourceMonitor, DropTargetMonitor, XYCoord } from "react-dnd";
import { useDrop, useDrag } from "react-dnd";
import { Col, Tooltip, Form as PcForm } from "antd";
import { Form as MobileForm } from "antd-mobile";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { DRAG_DROP_TYPE } from "../constant";
import type { WidgetProps } from "../typing";
import { PlatformType } from "../typing";
import styles from "./widgetwrap.less";
import { HoverDirection } from "../Canvas";

export type WidgetAction = {
  getBoundingClientRect: () => void;
  row: number;
  col: number;
};

type DragContainerProps = {
  children: ReactNode;
  data: WidgetProps;
  ref?: React.Ref<WidgetAction>;
  platform?: PlatformType;
  row?: number;
  onExchangeMove?: (dragIndex: number, hoverIndex: number) => void;
  onMove?: (hoverIndex: number, direction?: HoverDirection) => void;
};

const WidgetWrap: React.FC<DragContainerProps> = forwardRef((props, ref) => {
  const { children, data, platform, row, onExchangeMove, onMove } = props;
  const dragRef = useRef<HTMLDivElement>(null);
  const FormItem = platform === PlatformType.H5 ? MobileForm.Item : PcForm.Item;
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_DROP_TYPE,
    item: () => {
      return { ...data, row };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    }),
    end(item: WidgetProps, monitor: any) {
      onMove!(-1, HoverDirection.NULL);
      console.log("=======widgetwrap-drag-end======", row, item);
      if (monitor.didDrop()) {
        onExchangeMove && onExchangeMove(row!, item.row!);
      }
    }
  });

  const [{ handlerId }, drop] = useDrop({
    accept: DRAG_DROP_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover: (item: WidgetProps, monitor: DropTargetMonitor) => {
      if (dragRef.current && monitor.getClientOffset()) {
        const dragIndex = item.row;
        const hoverIndex = row;
        item.row = hoverIndex;
        console.log("=============", "dragIndex=", dragIndex, "hoverIndex=", hoverIndex);
        // if (dragIndex === hoverIndex) {
        //   return;
        // }
        onMove!(hoverIndex!);
        // const hoverBoundingRect = dragRef.current?.getBoundingClientRect();
        // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // const clientOffset = monitor.getClientOffset();

        // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
        // if (hoverClientY < hoverBoundingRect!.height && hoverClientY > 1.2 * hoverMiddleY) {
        //   onMove!(hoverIndex!, HoverDirection.BOTTOM);
        //   return;
        // }
        // // if (dragIndex! < hoverIndex! && hoverClientY < hoverMiddleY) {
        // //   onMove!(hoverIndex!, HoverDirection.BOTTOM);
        // //   return;
        // // }
        // // if (dragIndex! > hoverIndex! && hoverClientY > hoverMiddleY) {
        // //   onMove!(hoverIndex!, HoverDirection.TOP);
        // //   return;
        // // }
        // if (hoverClientY > 0 && hoverClientY < 0.8 * hoverMiddleY) {
        //   onMove!(hoverIndex!, HoverDirection.TOP);
        //   return;
        // }
      }
    }
  });

  const cls = classNames(styles["drag-wrap-item"], {
    // [styles["drag-wrap-item-active"]]: state?.selectedId === data?.id,
    [styles["is-drag"]]: isDragging
  });
  drag(drop(dragRef));

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
      {/* <div className={styles["operation-line"]}>
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
      </div> */}

      <FormItem required={data?.required || false} label={data?.title} disabled>
        {children}
      </FormItem>
    </Col>
  );
});

export default React.memo(WidgetWrap);
