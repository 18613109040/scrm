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
};

export type WidgetProps = BaseWidgetProps;

/** 平台类型 */
export enum PlatformType {
  /** PC 端 */
  PC = "pc",
  /** H5 端 */
  H5 = "h5"
}
