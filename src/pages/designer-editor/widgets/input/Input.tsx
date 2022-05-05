import React from "react";
import type { WidgetProps } from "../../typing";
import { PlatformType } from "../../typing";
import { Input as MobileInput } from "antd-mobile";
import { Input as PCInput } from "antd";

export type InputProps = {
  platform?: PlatformType;
} & WidgetProps;

const Input = (props: InputProps) => {
  const { platform = PlatformType.H5, hint = "请输入" } = props;
  const CusInput = platform === PlatformType.H5 ? MobileInput : PCInput;
  return <CusInput placeholder={hint} />;
};
export default Input;
