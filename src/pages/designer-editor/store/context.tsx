import React from "react";
import type { ProviderProps } from "./provider";

const Context = React.createContext<ProviderProps>({});
export default Context;
