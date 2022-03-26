/*
 * :file description:
 * :name: /hotel-sass/src/services/base-system/order-source.ts
 * :author: 胡东亮
 * :date created: 2021-09-08 14:18:00
 * :last editor: 胡东亮
 * :date last edited: 2021-09-08 14:23:53
 */
import request from "@/utils/request";

export type OrderSourceData = {
  id: string;
  remark: string;
  channelSourceName: string;
};
/**
 * 查询订单来源列表
 * @param id
 * @returns
 */
export async function queryOrderSourceService() {
  return request<API.BaseListResponse<OrderSourceData[]>>("/pmscloud/base_channel_source/list", {
    method: "GET"
  });
}
export type CreateOrderSourceParams = {
  channelSourceName?: string;
  remark: string;
  channelSourceCode: string;
};
/**
 * 新增
 * @returns
 */
export async function createOrderSourceService(params: CreateOrderSourceParams) {
  return request<API.BaseResponse>("/pmscloud/base_channel_source", {
    method: "POST",
    data: params
  });
}
export type UpdateOrderSourceParams = CreateOrderSourceParams & {
  id: string;
};
/**
 * 修改门
 * @param params
 * @returns
 */
export async function updateOrderSourceService(params: UpdateOrderSourceParams) {
  return request<API.BaseResponse>("/pmscloud/base_channel_source", {
    method: "PUT",
    data: params
  });
}

/**
 * 获取
 * @param params
 * @returns
 */
export async function queryOrderSourceDetailService(id: string) {
  return request<API.BaseResponse<{ data: OrderSourceData }>>(
    `/pmscloud/base_channel_source/${id}`,
    {
      method: "GET"
    }
  );
}
/**
 * 删除
 * @param params
 * @returns
 */
export async function deleteOrderSourceService(id: string) {
  return request<API.BaseResponse>(`/pmscloud/base_channel_source/${id}`, {
    method: "DELETE"
  });
}
