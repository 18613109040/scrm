import React from "react";
import type { WidgetProps } from "../../typing";
import type { PlatformType } from "../../typing";
import { Input as MobileInput } from "antd-mobile";

export type InputProps = {
  platform?: PlatformType;
} & WidgetProps;

const Input = (props: InputProps) => {
  const { platform, hint = "请输入" } = props;
  const CusInput = MobileInput;
  return <CusInput placeholder={hint} />;
};
export default Input;
