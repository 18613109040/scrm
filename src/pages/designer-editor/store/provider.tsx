import React, { useReducer, useState } from "react";
import Context from "./context";
// import type { ActionProps, InitStateProps } from "./reducer";
// import { initState, reducer } from "./reducer";

export type ProviderProps = {
  children?: React.ReactNode;
  state?: InitStateProps;
  // dispatch?: React.Dispatch<ActionProps>;
};
const inintState = {
  pages: []
};
const Provider = (props: ProviderProps) => {
  // const [state, dispatch] = useReducer(reducer, initState);
  const [state, setState] = useState(inintState);

  return <Context.Provider value={{ state }}>{props?.children}</Context.Provider>;
};
export default Provider;
