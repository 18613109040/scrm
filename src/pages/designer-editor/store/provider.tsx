import React, { useReducer, useState } from "react";
import Context from "./context";
type InitStateProps = {
  pages: any[];
  dimensions: {
    with: number;
    height: number;
  };
};
export type ProviderProps = {
  children?: React.ReactNode;
  state?: InitStateProps;
  // dispatch?: React.Dispatch<ActionProps>;
};
const inintState = {
  pages: [],
  dimensions: {
    with: 377,
    height: 669
  }
};
const Provider = (props: ProviderProps) => {
  // const [state, dispatch] = useReducer(reducer, initState);
  const [state, setState] = useState(inintState);

  return <Context.Provider value={{ state }}>{props?.children}</Context.Provider>;
};
export default Provider;
