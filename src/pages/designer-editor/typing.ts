export enum WidgetType {
  /** 单行文本 */
  INPUT,
  /** 多行文本 */
  TEXTAREA,
  /** 单选 */
  RADIO,
  /** 多选 */
  CHECKBOX,
  /**下拉选择 */
  SELECT
}
type StyleProps = {
  display?: "block" | "inline-block" | "inline" | "flex" | "none" | "initial" | "";
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingRight?: number;
  margin?: string;
  padding?: string;
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | "initial" | "";
  justifyContent?: "space-between" | "flex-start" | "flex-end" | "space-around" | "center" | "";
  alignItems?: "center" | "flex-start" | "flex-end" | "";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | "";
  position?: "static" | "relative" | "absolute" | "fixed" | "";
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  textAlign?: "center" | "left" | "right" | "justify" | "";
  opacity?: number;
  background?: string;
  backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | "initial" | "inherit";
  borderStyle?: "none" | "dashed" | "solid";
  borderColor?: string;
  borderWidth?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
};
/** 基础组件类型 */
export type BaseWidgetProps = {
  /** 是否允许为空 */
  allowBlank?: boolean;
  /** 是否必填 */
  required?: boolean;
  /** 是否可见 */
  visible?: boolean;
  /** 自定义ID */
  id?: string;
  /** 组件类型 */
  type?: WidgetType;
  /** 拖动显示效果 */
  dragPreviewImage?: string;
  /** 标题 */
  title?: string;
  /** 组件icon */
  icon?: string;
  /** 提示文字 */
  hint?: string;
  /** 宽度 */
  span?: number;
  row?: number;
  style?: StyleProps;
};

export type WidgetProps = BaseWidgetProps;

/** 平台类型 */
export enum PlatformType {
  /** PC 端 */
  PC = "pc",
  /** H5 端 */
  H5 = "h5"
}
