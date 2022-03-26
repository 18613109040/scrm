/*
 * :file description:
 * :name: /hotel-sass/src/services/base-install/room.ts
 * :author: 胡东亮
 * :date created: 2021-08-31 15:26:55
 * :last editor: 胡东亮
 * :date last edited: 2021-09-02 13:56:43
 */

import request from "@/utils/request";

export type RoomListData = {
  bedQuantity: number;
  breakfastQuantity: number;
  createBy: string;
  createTime: string;
  deposit: number;
  id: number;
  marketPrice: number;
  maxAdults: number;
  maxChildren: number;
  remark: string;
  saleRoomCode: string;
  saleRoomName: string;
  status: string;
  updateBy: string;
  updateTime: string;
};
/**
 * 获取房型列表
 */
export async function roomListService(params: API.BaseListQuery) {
  return request<API.BaseResponse<{ rows: RoomListData[]; total: number }>>(
    "/pmscloud/base_sale_room/list",
    {
      method: "GET",
      params
    }
  );
}
export type CeateRoomParams = {
  /** 早餐券份数 */
  breakfastQuantity: number;
  bedQuantity: number;
  deposit: number;
  marketPrice: string;
  maxAdults: number;
  maxChildren: number;
  remark: string;
  saleRoomCode: string;
  saleRoomName: string;
  status: string;
};
/**
 * 创建房间
 * @param params
 */
export async function ceateRoomService(params: CeateRoomParams) {
  return request<API.BaseResponse<{}>>("/pmscloud/base_sale_room", {
    method: "POST",
    data: params
  });
}

export type RoomData = {
  bedQuantity: number;
  breakfastQuantity: number;
  createBy: string;
  createTime: string;
  deposit: number;
  id: string;
  marketPrice: number;
  maxAdults: number;
  maxChildren: number;
  remark: string;
  saleRoomCode: string;
  saleRoomName: string;
  status: string;
  updateBy: string;
  updateTime: string;
};
/**
 * 获取房间详情
 */
export async function queryRoomDetailService(id: string) {
  return request<API.BaseResponse<{ data: RoomData }>>(`/pmscloud/base_sale_room${id}`, {
    method: "GET"
  });
}
