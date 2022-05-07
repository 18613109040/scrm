import type { WidgetProps } from "./typing";
import { WidgetType } from "./typing";

export const DRAG_DROP_TYPE = "DRAG";
export type SliderWidgetsProps = {
  title: string;
  id: string;
  children: WidgetProps[];
};
export const sliderWidgets: SliderWidgetsProps[] = [
  {
    title: "常用控件",
    id: "0",
    children: [
      {
        title: "文本",
        icon: "",
        dragPreviewImage: "",
        type: WidgetType.INPUT,
        id: "1"
      },
      {
        title: "多行文本",
        icon: "",
        dragPreviewImage: "",
        type: WidgetType.TEXTAREA,
        id: "2"
      },
      {
        title: "单选",
        dragPreviewImage: "",
        icon: "",
        type: WidgetType.RADIO,
        id: "3"
      },
      {
        title: "多选",
        dragPreviewImage: "",
        icon: "",
        type: WidgetType.CHECKBOX,
        id: "4"
      },
      {
        title: "下拉选择",
        dragPreviewImage: "",
        icon: "",
        type: WidgetType.SELECT,
        id: "5"
      }
    ]
  }
];
