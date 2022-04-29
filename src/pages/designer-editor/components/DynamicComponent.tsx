import React, { useMemo, memo } from "react";
import { dynamic } from "umi";

const DynamicFunc = () => {
  return dynamic({
    loader: async () => {
      const { default: Graph } = await import(`../widgets/${category}/${type}`);
      const Component = Graph;
      return (props: DynamicType) => {
        const { data } = props;
        return <Component {...data} />;
      };
    },
    loading: () => <div>加载中...</div>
  });
};

type DynamicComponentType = {
  data: any;
};
const DynamicComponent = memo((props: DynamicComponentType) => {
  const { data } = props;
  const Dynamic = useMemo(() => {
    return DynamicFunc();
  }, []);

  return <Dynamic {...props} />;
});

export default DynamicComponent;
