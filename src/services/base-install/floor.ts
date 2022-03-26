/*
 * :file description:
 * :name: /hotel-sass/src/services/base-install/floor.ts
 * :author: 胡东亮
 * :date created: 2021-09-03 14:06:45
 * :last editor: 胡东亮
 * :date last edited: 2021-09-03 14:33:34
 */
import request from "@/utils/request";

export type FloorData = {
  buildingCode: string;
  buildingName: string;
  createBy: string;
  createTime: string;
  id: string;
  floor: number;
  floorCode: string;
  floorName: string;
  remark: string;
  updateBy: string;
  updateTime: string;
};
/**
 * 获取楼层列表
 * @param params
 * @returns
 */
export async function queryFloorService(params: API.BaseListQuery) {
  return request<API.BaseListResponse<FloorData[]>>(`/pmscloud/base_floor/list`, {
    method: "GET",
    params
  });
}
export type CreateFloorParams = {
  buildingCode: string;
  floor: string;
  floorCode: string;
  floorName: string;
  remark: string;
};
/**
 * 创建楼层
 * @param params
 * @returns
 */
export async function createFloorService(params: CreateFloorParams) {
  return request<API.BaseListResponse>("/pmscloud/base_floor", {
    method: "POST",
    data: params
  });
}
export type UpdateFloorParams = CreateFloorParams & {
  id: string;
};
/**
 * 更新楼层
 * @param params
 * @returns
 */
export async function updateFloorService(params: UpdateFloorParams) {
  return request<API.BaseResponse>("/pmscloud/base_floor", {
    method: "PUT",
    data: params
  });
}

/**
 * 获取楼层信息
 * @param id
 * @returns
 */
export async function queryFloorDeatilService(id: string) {
  return request<API.BaseResponse<{ data: FloorData }>>(`/pmscloud/base_floor/${id}`, {
    method: "GET"
  });
}
/**
 * 删除楼层信息
 * @param id
 * @returns
 */
export async function deleteFloorService(id: string) {
  return request<API.BaseResponse>(`/pmscloud/base_floor/${id}`, {
    method: "DELETE"
  });
}
