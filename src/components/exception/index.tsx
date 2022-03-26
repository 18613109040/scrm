import React from "react";
import { Result, Button } from "antd";
import { history } from "umi";

function backToHome() {
  history.push("/");
}

const Exception404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，你访问的页面不存在"
    extra={
      <Button type="primary" onClick={backToHome}>
        返回首页
      </Button>
    }
  />
);

const Exception403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="抱歉，你无权访问该页面"
    extra={
      <Button type="primary" onClick={backToHome}>
        返回首页
      </Button>
    }
  />
);

const WithExceptionOpChildren: React.FC<{
  currentPathConfig?: any;
  children: any;
  noFound: React.ReactNode;
  unAccessible: React.ReactNode;
}> = (props) => {
  const { children, currentPathConfig } = props;
  if (!currentPathConfig) {
    return props.noFound || <Exception404 />;
  }
  if (currentPathConfig.unAccessible || currentPathConfig.unaccessible) {
    return props.unAccessible || <Exception403 />;
  }
  return children;
};

export { Exception404, Exception403, WithExceptionOpChildren };
