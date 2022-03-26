/*
 * :file description:
 * :name: /ypms.front/src/services/base-system/customer-type.ts
 * :author: 胡东亮
 * :date created: 2021-09-08 11:36:26
 * :last editor: 胡东亮
 * :date last edited: 2021-09-21 18:14:45
 */

import request from "@/utils/request";

export type CustomerTypeData = {
  id: string;
  remark: string;
  customerTypeName: string;
};
/**
 * 查询客源类型列表
 * @param id
 * @returns
 */
export async function queryCustomerTypeService() {
  return request<API.BaseListResponse<CustomerTypeData[]>>("/pmscloud/base_customer_type/list", {
    method: "GET"
  });
}
export type CreateCustomerTypeParams = {
  customerTypeCode?: string;
  remark: string;
  customerTypeName: string;
};
/**
 * 新增
 * @returns
 */
export async function createCustomerTypeService(params: CreateCustomerTypeParams) {
  return request<API.BaseResponse>("/pmscloud/base_customer_type", {
    method: "POST",
    data: params
  });
}
export type UpdateCustomerTypeParams = CreateCustomerTypeParams & {
  id: string;
};
/**
 * 修改门
 * @param params
 * @returns
 */
export async function updateCustomerTypeService(params: UpdateCustomerTypeParams) {
  return request<API.BaseResponse>("/pmscloud/base_customer_type", {
    method: "PUT",
    data: params
  });
}

/**
 * 获取
 * @param params
 * @returns
 */
export async function queryCustomerTypeDetailService(id: string) {
  return request<API.BaseResponse<{ data: CustomerTypeData }>>(
    `/pmscloud/base_customer_type/${id}`,
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
export async function deleteCustomerTypeService(id: string) {
  return request<API.BaseResponse>(`/pmscloud/base_customer_type/${id}`, {
    method: "DELETE"
  });
}
