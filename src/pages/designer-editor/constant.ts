import type { WidgetProps } from "./typing";
import { WidgetType } from "./typing";

export const DRAG_DROP_TYPE = "DRAG";
export type SliderWidgetsProps = {
  title: string;
  children: WidgetProps[];
};
export const sliderWidgets: SliderWidgetsProps[] = [
  {
    title: "常用控件",
    children: [
      {
        title: "文本",
        icon: "",
        dragPreviewImage: "",
        type: WidgetType.INPUT
      },
      {
        title: "多行文本",
        icon: "",
        dragPreviewImage: "",
        type: WidgetType.TEXTAREA
      },
      {
        title: "单选",
        dragPreviewImage: "",
        icon: "",
        type: WidgetType.RADIO
      },
      {
        title: "多选",
        dragPreviewImage: "",
        icon: "",
        type: WidgetType.CHECKBOX
      },
      {
        title: "下拉选择",
        dragPreviewImage: "",
        icon: "",
        type: WidgetType.SELECT
      }
    ]
  }
];
