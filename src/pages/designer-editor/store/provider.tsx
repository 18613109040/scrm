import React, { useState } from "react";
import { produce } from "immer";
import { PlatformType } from "../typing";
import type { WidgetProps } from "../typing";
import Context from "./context";

type InitStateProps = {
  pages: WidgetProps[][];
  currentPage: number;
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
};
const inintState: InitStateProps = {
  pages: [
    [
      {
        type: 0,
        title: "文本",
        row: 0,
        id: "0"
      },
      {
        type: 0,
        title: "文本1",
        row: 1,
        id: "1"
      },
      {
        type: 0,
        title: "文本2",
        row: 2,
        id: "2"
      },
      {
        type: 0,
        title: "文本3",
        row: 3,
        id: "3"
      },
      {
        type: 0,
        title: "文本4",
        row: 4,
        id: "4"
      }
    ]
  ],
  currentPage: 0,
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
  function moveWidget(fromIndex: number, toIndex: number) {
    console.log("fromIndex=", fromIndex, "toIndex=", toIndex);
    const tempWidget = state.pages[state.currentPage].splice(fromIndex, 1);
    state.pages[state.currentPage].splice(toIndex, 0, tempWidget[0]);
    setState({ ...state });
  }
  return (
    <Context.Provider value={{ state, pushWidget, moveWidget }}>{props?.children}</Context.Provider>
  );
};
export default Provider;
