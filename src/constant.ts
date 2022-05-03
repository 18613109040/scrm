const { REACT_APP_ENV } = process.env;
type IBase = {
  PREFIX_URL: string;
};
type IConfig = {
  dev: IBase;
  master: IBase;
  test: IBase;
  uat: IBase;
};

export const ENV_CONFIG: IConfig = {
  dev: {
    PREFIX_URL: "/prod-api"
  },
  test: {
    PREFIX_URL: "/prod-api"
  },
  uat: {
    PREFIX_URL: "/prod-api"
  },
  master: {
    PREFIX_URL: "/prod-api"
  }
};
export const { PREFIX_URL } = ENV_CONFIG[`${REACT_APP_ENV}`];

/** 性别 */
export enum SexType {
  /** 男 */
  MALE = "0",
  /** 女 */
  FEMALE = "1"
}
export const SexText = {
  [SexType.MALE]: "男",
  [SexType.FEMALE]: "女"
};
export enum formType {
  /** 创建 */
  CREATE,
  /** 更新 */
  UPDATA
}
export const LOGIN_PATH = "/user/login";

export const BASE_OSS_URL = "http://it-operation-group.oss-cn-shenzhen.aliyuncs.com/designer";
