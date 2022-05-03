/*
 * :file description:
 * :name: /ypms.front/src/app.tsx
 * :author: 胡东亮
 * :date created: 2021-07-29 16:58:33
 * :last editor: 胡东亮
 * :date last edited: 2021-09-12 16:51:06
 */
import type { Settings as LayoutSettings } from "@ant-design/pro-layout";
import { PageLoading } from "@ant-design/pro-layout";
import defaultSettings from "../config/defaultSettings";
import { Fragment } from "react";
import { history } from "umi";
import { Inspector } from "react-dev-inspector";
import type { UserData } from "@/services/login";
import { userInfoService } from "@/services/login";
import { LOGIN_PATH } from "@/constant";
import RightContent from "@/components/RightContent";
import "antd-mobile/es/global";
const InspectorWrapper = process.env.REACT_APP_ENV === "dev" ? Inspector : Fragment;
export const initialStateConfig = {
  loading: <PageLoading />
};
type InitalStateProps = {
  settings?: Partial<LayoutSettings>;
  currentUser?: UserData | undefined;
  fetchUserInfo?: () => Promise<UserData | undefined>;
};
export async function getInitialState(): Promise<InitalStateProps> {
  const fetchUserInfo = async () => {
    try {
      const res = await userInfoService();
      return {
        ...res.data?.user
      };
    } catch (error) {
      // history.push(LOGIN_PATH);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== LOGIN_PATH) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {}
    };
  }
  return {
    fetchUserInfo,
    currentUser: undefined,
    settings: defaultSettings
  };
}
// keys={["control", "shift", "command", "c"]} disableLaunchEditor={false}
export const layout = (initialState: InitalStateProps) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    onPageChange: () => {},
    menuHeaderRender: undefined,
    childrenRender: (children: React.ReactNode) => <Fragment>{children}</Fragment>,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings
  };
};
