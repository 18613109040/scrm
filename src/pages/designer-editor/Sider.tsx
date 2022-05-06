import { Button } from "antd";
import { useContext, useEffect } from "react";
import DragContainer from "./components/DragContainer";
import { sliderWidgets } from "./constant";
import styles from "./sider.less";
import Context from "./store/context";
import type { WidgetProps } from "./typing";

const Sider = () => {
  const { insertWidget } = useContext(Context);
  useEffect(() => {}, []);
  const handleClick = () => {
    console.log("click");
  };
  const handleDragEnd = (data: WidgetProps) => {
    console.log("handleDragEnd", data);
    insertWidget!(data);
  };
  return (
    <div className={styles["designer-editor-sider"]}>
      {sliderWidgets.map((widgets, index) => {
        return (
          <div key={index}>
            <div className={styles["h-title"]}>{widgets.title}</div>
            <div className={styles["widgets-panel"]}>
              {widgets?.children.map((widget, widgetkey) => (
                <DragContainer
                  onClick={handleClick}
                  data={widget}
                  key={widgetkey}
                  onDragEnd={handleDragEnd}
                  className={styles["drag-item"]}
                >
                  <div className={styles["widget-item"]}>
                    <i className={`iconfont ${widget?.icon} ${styles["icon-tag"]}`} />
                    <span className={styles["widget-title"]}>{widget?.title}</span>
                  </div>
                </DragContainer>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Sider;
