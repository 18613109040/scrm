import React, { useState } from "react";
import { produce } from "immer";
import { PlatformType } from "../typing";
import type { WidgetProps } from "../typing";
import Context from "./context";

function arrayMove<T>(array: T[], fromIndex: number, toIndex: number) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;
    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
  return array;
}

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
  const [state, setState] = useState(produce(inintState, (draft) => draft));
  // 页面尾部新增个组件
  function pushWidget(widget: WidgetProps) {
    const newState = produce(state, (draft) => {
      draft.pages[state.currentPage].push(widget);
    });
    setState(newState);
  }
  function moveWidget(fromIndex: number, toIndex: number) {
    const newState = produce(state, (draft) => {
      arrayMove(draft.pages[draft.currentPage], fromIndex, toIndex);
    });
    setState(newState);
  }
  return (
    <Context.Provider value={{ state, pushWidget, moveWidget }}>{props?.children}</Context.Provider>
  );
};
export default Provider;
