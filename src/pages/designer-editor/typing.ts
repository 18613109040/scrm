export enum WidgetType {
  /** 单行文本 */
  INPUT,
  /** 多行文本 */
  TEXTAREA
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
  type: WidgetType;
};

export type WidgetProps = BaseWidgetProps;
