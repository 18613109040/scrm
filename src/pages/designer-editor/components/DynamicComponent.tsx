import React, { useMemo, memo } from "react";
import { dynamic } from "umi";
import type { WidgetProps } from "../typing";
import { WidgetType } from "../typing";

const DynamicFunc = (data: WidgetProps) => {
  switch (data.type) {
    case WidgetType.INPUT:
      return dynamic({
        loader: async () => {
          const { default: Graph } = await import("../widgets/input");
          const Component = Graph;
          return () => <Component {...data} />;
        },
        loading: () => <div>加载中...</div>
      });
    default:
      break;
  }
};

type DynamicComponentType = {
  data: WidgetProps;
};
const DynamicComponent = memo((props: DynamicComponentType) => {
  const Dynamic = useMemo(() => {
    return DynamicFunc(props.data);
  }, []);

  return <Dynamic {...props} />;
});

export default DynamicComponent;
