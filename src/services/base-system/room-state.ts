/*
 * :file description:
 * :name: /ypms.front/src/services/base-system/room-state.ts
 * :author: 胡东亮
 * :date created: 2021-09-06 17:23:36
 * :last editor: 胡东亮
 * :date last edited: 2021-09-12 19:15:05
 */
import request from "@/utils/request";

export type RoomStatus = {
  color: string;
  id: string;
  roomStatusCode: string;
  roomStatusName: string;
};
/**
 * 查询门店房态列表
 * @param id
 * @returns
 */
export async function queryRoomStatusService() {
  return request<API.BaseListResponse<RoomStatus[]>>("/pmscloud/color/list", {
    method: "GET"
  });
}
export type CreateRoomStatusParams = {
  color: string;
  roomStatusCode: string;
  roomStatusName: string;
};
/**
 * 新增门店房态
 * @returns
 */
export async function createRoomStatusService(params: CreateRoomStatusParams) {
  return request<API.BaseResponse>("/pmscloud/color", {
    method: "POST",
    data: params
  });
}
export type UpdateRoomStatusParams = CreateRoomStatusParams & {
  id: string;
};
/**
 * 修改门店房态
 * @param params
 * @returns
 */
export async function updateRoomStatusService(params: UpdateRoomStatusParams) {
  return request<API.BaseResponse>("/pmscloud/color", {
    method: "PUT",
    data: params
  });
}

/**
 * 获取门店状态详情
 * @param params
 * @returns
 */
export async function queryRoomStatusDetailService(id: string) {
  return request<API.BaseResponse<{ data: RoomStatus }>>(`/pmscloud/color/${id}`, {
    method: "GET"
  });
}
/**
 * 删除门店状态
 * @param params
 * @returns
 */
export async function deleteRoomStatusService(id: string) {
  return request<API.BaseResponse>(`/pmscloud/color/${id}`, {
    method: "DELETE"
  });
}
