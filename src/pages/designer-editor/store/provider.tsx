import React, { useReducer, useState } from "react";
import type { WidgetProps } from "../typing";
import Context from "./context";

type InitStateProps = {
  pages: WidgetProps[][];
  currentPage: number;
  dimensions: {
    width: number;
    height: number;
  };
};
export type ProviderProps = {
  children?: React.ReactNode;
  state?: InitStateProps;
  pushWidget?: (widget: WidgetProps) => void;
};
const inintState: InitStateProps = {
  pages: [[]],
  currentPage: 0,
  dimensions: {
    width: 377,
    height: 669
  }
};
const Provider = (props: ProviderProps) => {
  const [state, setState] = useState(inintState);
  // 页面尾部新增个组件
  function pushWidget(widget: WidgetProps) {
    state.pages[state.currentPage].push(widget);
    setState({
      ...state
    });
  }
  return <Context.Provider value={{ state, pushWidget }}>{props?.children}</Context.Provider>;
};
export default Provider;
