import { Button } from "antd";
import { useEffect } from "react";
import DragContainer from "./components/DragContainer";
import { sliderWidgets } from "./constant";
import styles from "./sider.less";
import { WidgetType } from "./typing";

const Sider = () => {
  useEffect(() => {}, []);
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className={styles["designer-editor-sider"]}>
      {sliderWidgets.map((widgets, index) => {
        return [
          <div className={styles["h-title"]} key={index}>
            {widgets.title}
          </div>,
          <div key={index} className={styles["widgets-panel"]}>
            {widgets?.children.map((widget, widgetkey) => (
              <DragContainer
                onClick={handleClick}
                data={{ type: WidgetType.INPUT }}
                key={widgetkey}
                className={styles["drag-item"]}
              >
                <div className={styles["widget-item"]}>
                  <i className={`iconfont ${widget?.icon} ${styles["icon-tag"]}`} />
                  <span className={styles["widget-title"]}>{widget?.title}</span>
                </div>
              </DragContainer>
            ))}
          </div>
        ];
      })}
    </div>
  );
};
export default Sider;
