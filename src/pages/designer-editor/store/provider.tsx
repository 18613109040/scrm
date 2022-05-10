import React, { useState } from "react";
import { produce } from "immer";
import { PlatformType } from "../typing";
import type { WidgetProps } from "../typing";
import Context from "./context";

type InitStateProps = {
  pages: WidgetProps[][];
  currentPage: number;
  selectIndex: number;
  dimensions: {
    width: number;
    height: number;
  };
  platform?: PlatformType;
};
export type ProviderProps = {
  children?: React.ReactNode;
  state?: InitStateProps;
  pushWidget?: (widget: WidgetProps) => void;
  moveWidget?: (fromIndex: number, toIndex: number) => void;
  insertWidget?: (widget: WidgetProps) => void;
  setPropertyStyle?: (key: string, value: string) => void;
};
const inintState: InitStateProps = {
  pages: [
    [
      {
        style: {
          display: "initial",
          flexDirection: "initial",
          justifyContent: "",
          flexWrap: ""
        }
      }
    ]
  ],
  currentPage: 0,
  selectIndex: 0,
  dimensions: {
    width: 377,
    height: 669
  },
  platform: PlatformType.H5
};

const Provider = (props: ProviderProps) => {
  const [state, setState] = useState(inintState);
  // 页面尾部新增个组件
  function pushWidget(widget: WidgetProps) {
    state.pages[state.currentPage].push(widget);
    setState({ ...state });
  }
  function setPropertyStyle(key: string, value: string) {
    state.pages[state.currentPage][state.selectIndex].style = {
      ...state.pages[state.currentPage][state.selectIndex].style,
      [key]: value
    };
    setState({ ...state });
  }
  function insertWidget(widget: WidgetProps) {
    state.pages[state.currentPage].splice(widget.row! + 1, 0, widget);
    setState({ ...state });
  }
  // 移动
  function moveWidget(fromIndex: number, toIndex: number) {
    const tempWidget = state.pages[state.currentPage].splice(fromIndex, 1);
    state.pages[state.currentPage].splice(toIndex, 0, tempWidget[0]);
    setState({ ...state });
  }
  return (
    <Context.Provider value={{ state, pushWidget, moveWidget, insertWidget, setPropertyStyle }}>
      {props?.children}
    </Context.Provider>
  );
};
export default Provider;
