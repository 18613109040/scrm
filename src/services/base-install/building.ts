/*
 * :file description:
 * :name: /hotel-sass/src/services/base-install/building.tsx
 * :author: 胡东亮
 * :date created: 2021-09-02 13:54:52
 * :last editor: 胡东亮
 * :date last edited: 2021-09-03 10:31:49
 */
import request from "@/utils/request";

export type BuildingData = {
  buildingCode: string;
  buildingName: string;
  createBy: string;
  createTime: string;
  id: string;
  remark: string;
};
/**
 * 获取栋数列表
 * @param params
 * @returns
 */
export async function queryBuildingService(params: API.BaseListQuery) {
  return request<API.BaseListResponse<BuildingData[]>>(`/pmscloud/base_building/list`, {
    method: "GET",
    params
  });
}
export type CreateBuildingParams = {
  buildingName: string;
  remark: string;
};
/**
 * 创建楼栋
 * @param params
 * @returns
 */
export async function createBuildingService(params: CreateBuildingParams) {
  return request<API.BaseListResponse>("/pmscloud/base_building", {
    method: "POST",
    data: params
  });
}
export type UpdateBuildingParams = CreateBuildingParams & {
  id: string;
};
/**
 * 更新楼栋
 * @param params
 * @returns
 */
export async function updateBuildingService(params: UpdateBuildingParams) {
  return request<API.BaseResponse>("/pmscloud/base_building", {
    method: "PUT",
    data: params
  });
}

/**
 * 获取楼栋信息
 * @param id
 * @returns
 */
export async function queryBuildingDeatilService(id: string) {
  return request<API.BaseResponse<{ data: BuildingData }>>(`/pmscloud/base_building/${id}`, {
    method: "GET"
  });
}
/**
 * 删除楼栋信息
 * @param id
 * @returns
 */
export async function deleteBuildingService(id: string) {
  return request<API.BaseResponse>(`/pmscloud/base_building/${id}`, {
    method: "DELETE"
  });
}
