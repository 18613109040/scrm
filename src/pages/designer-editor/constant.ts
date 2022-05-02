import { WidgetType } from "./typing";

export const DRAG_DROP_TYPE = "DRAG";

export const sliderWidgets = [
  {
    title: "常用控件",
    children: [
      {
        title: "文本",
        icon: "",
        type: WidgetType.INPUT
      },
      {
        title: "多行文本",
        icon: "",
        type: WidgetType.TEXTAREA
      },
      {
        title: "单选",
        icon: "",
        type: WidgetType.RADIO
      },
      {
        title: "多选",
        icon: "",
        type: WidgetType.CHECKBOX
      },
      {
        title: "下拉选择",
        icon: "",
        type: WidgetType.SELECT
      }
    ]
  }
];
