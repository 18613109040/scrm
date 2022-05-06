/**
 * 可拖动容器
 */
import type { ReactElement, ReactNode } from "react";
import React from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag, DragPreviewImage } from "react-dnd";
import { nanoid } from "nanoid";
import { DRAG_DROP_TYPE } from "../constant";
import type { WidgetProps } from "../typing";

type DragContainerProps = {
  children: ReactNode;
  className?: string;
  onDragEnd?: (data: WidgetProps) => void;
  onClick?: (data: WidgetProps) => void;
  data: WidgetProps;
};
const DragContainer: React.FC<DragContainerProps> = (props): ReactElement => {
  const { children, className, onDragEnd, onClick, data } = props;
  const [, drag, preview] = useDrag({
    type: DRAG_DROP_TYPE,
    item: { ...data, row: 0, col: 0, span: 24 },
    end(item: any, monitor: DragSourceMonitor) {
      if (monitor.didDrop()) {
        console.log("========drag-----end==========", item);
        onDragEnd && onDragEnd({ ...item, id: `_widget_${item.type}_${nanoid()}` });
      }
    }
  });
  const handleClick = () => {
    onClick && onClick({ ...data, id: `_widget_${data.type}_${nanoid()}` });
  };
  return (
    <>
      <DragPreviewImage connect={preview} src={data?.dragPreviewImage || ""} />
      <div ref={drag} className={className} onClick={handleClick}>
        {children}
      </div>
    </>
  );
};

export default React.memo(DragContainer);
