/**
 * 可拖动容器
 */
import type { ReactElement, ReactNode } from "react";
import React from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { nanoid } from "nanoid";
import { DRAG_DROP_TYPE } from "../constant";
import type { WidgetProps } from "../typing";

type DragContainerProps = {
  children: ReactNode;
  className?: string;
  onDragEnd?: (data: any) => void;
  onClick?: (data: WidgetProps) => void;
  data: WidgetProps;
};
const DragContainer: React.FC<DragContainerProps> = (props): ReactElement => {
  const { children, className, onDragEnd, onClick, data } = props;
  const [, drag] = useDrag({
    type: DRAG_DROP_TYPE,
    item: { ...data },
    end(item: any, monitor: DragSourceMonitor) {
      // console.log(monitor.didDrop());
      if (monitor.didDrop()) {
        console.log("end");
        onDragEnd && onDragEnd({ ...item, id: `_widget_${item.type}_${nanoid()}` });
      }
    }
  });
  const handleClick = () => {
    onClick && onClick({ ...data, id: `_widget_${data.type}_${nanoid()}` });
  };
  return (
    <div ref={drag} className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default React.memo(DragContainer);
