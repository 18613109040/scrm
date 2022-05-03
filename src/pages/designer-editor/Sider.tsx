import { Button } from "antd";
import { useContext, useEffect } from "react";
import DragContainer from "./components/DragContainer";
import { sliderWidgets } from "./constant";
import styles from "./sider.less";
import { WidgetType } from "./typing";

type SiderProps = {
  onWidgetDragEnd: () => void;
};

const Sider = (props: SiderProps) => {
  const { onWidgetDragEnd } = props;
  useEffect(() => {}, []);
  const handleClick = () => {
    console.log("click");
  };
  const handleDragEnd = () => {
    console.log("handleDragEnd");
    onWidgetDragEnd && onWidgetDragEnd();
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
