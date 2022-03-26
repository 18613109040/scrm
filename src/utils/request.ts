/*
 * :file description:
 * :name: /hotel-sass/src/utils/request.ts
 * :author: 胡东亮
 * :date created: 2021-08-25 10:03:11
 * :last editor: 胡东亮
 * :date last edited: 2021-08-25 14:23:54
 */
import { extend } from "umi-request";
import Cookies from "js-cookie";
import { Toast } from "antd-mobile";
import { LOGIN_PATH, PREFIX_URL } from "@/constant";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  419: "接口权限被禁止",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status } = response;
    // 404 统一跳转到登录页
    if (status === 401) {
      Cookies.remove("token");
    } else {
      Toast.offline(errorText, 1);
    }
  } else if (!response) {
    // Toast.offline("您的网络发生异常，无法连接服务器", 1);
  }
  // @ts-ignore
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: "include",
  prefix: PREFIX_URL
});

request.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: Cookies.get("token") || ""
      },
      interceptors: true
    }
  };
});

request.interceptors.response.use(async (response, options) => {
  if (!response) {
    Toast.offline("您的网络发生异常，无法连接服务器", 1);
  } else {
    const res = await response.clone().json();
    // @ts-ignore
    if (res?.code === 401) {
      Cookies.remove("token");
      window.location.href = LOGIN_PATH;
    }
  }

  return response;
});

export default request;
