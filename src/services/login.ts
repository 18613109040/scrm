/*
 * :file description:
 * :name: /ypms.front/src/services/login.ts
 * :author: 胡东亮
 * :date created: 2021-08-25 10:26:33
 * :last editor: 胡东亮
 * :date last edited: 2021-09-12 16:49:25
 */

import type { SexType } from "@/constant";
import request from "@/utils/request";

export type CaptchaImagData = {
  uuid: string;
  img: string;
};
/**
 * 获取图片验证码
 */
export async function captchaImageService() {
  return request<API.BaseResponse<CaptchaImagData>>("/captchaImage", {
    method: "GET",
    params: {}
  });
}
export type LoginParams = {
  /** 验证码 */
  code?: string;
  password: string;
  username: string;
  uuid?: string;
};
/**
 * 用户登录
 */
export async function loginService(params: LoginParams) {
  return request<API.BaseResponse<{ token: string }>>("/login", {
    method: "POST",
    data: params
  });
}
/**
 * 用户退出
 */
export async function loginOutService() {
  return request<API.BaseResponse<{}>>("/logout", {
    method: "POST",
    data: {}
  });
}

export type DeptData = {
  deptId: number;
  deptName: string;
  leader: string;
  orderNum: string;
  parentId: number;
  status: string;
};
export type RoleData = {
  admin: boolean;
  createBy: string;
  createTime: string;
  dataScope: string;
  delFlag: string;
  deptCheckStrictly: boolean;
  deptIds: string;
  flag: boolean;
  menuCheckStrictly: boolean;
  menuIds: string;
  remark: string;
  roleId: number;
  roleKey: string;
  roleName: string;
  roleSort: string;
  searchValue: string;
  status: string;
  updateBy: string;
  updateTime: string;
};

export type UserData = {
  admin: boolean;
  avatar: string;
  createBy: string;
  createTime: string;
  delFlag: string;
  dept: DeptData;
  deptId: number;
  email: string;
  loginDate: string;
  loginIp: string;
  nickName: string;
  phonenumber: string;
  remark: string;
  roles: RoleData[];
  salt: string;
  searchValue: string;
  sex: SexType;
  status: string;
  updateBy: string;
  updateTime: string;
  userId: number;
};
export type UserInfoData = {
  permissions: string[];
  roles: string[];
  user: UserData;
};
/**
 * 获取用户信息
 * @param params
 */
export async function userInfoService() {
  return request<API.BaseResponse<UserInfoData>>("/getInfo", {
    method: "GET",
    params: {}
  });
}
