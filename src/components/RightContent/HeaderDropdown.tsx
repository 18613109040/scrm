/*
 * :file description:
 * :name: /hotel-sass/src/components/RightContent/HeaderDropdown.tsx
 * :author: 胡东亮
 * :date created: 2021-08-26 10:25:11
 * :last editor: 胡东亮
 * :date last edited: 2021-08-26 10:25:14
 */
import type { DropDownProps } from "antd/es/dropdown";
import { Dropdown } from "antd";
import React from "react";
import classNames from "classnames";
import styles from "./index.less";

export type HeaderDropdownProps = {
  overlayClassName?: string;
  overlay: React.ReactNode | (() => React.ReactNode) | any;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topCenter" | "topRight" | "bottomCenter";
} & Omit<DropDownProps, "overlay">;

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
);

export default HeaderDropdown;
