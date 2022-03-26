/*
 * :file description:
 * :name: /ypms.front/src/services/base-system/member-type.ts
 * :author: 胡东亮
 * :copyright: (c) 2021, INSNALL
 * :date created: 2021-09-21 18:14:42
 * :last editor: 胡东亮
 * :date last edited: 2021-09-21 18:15:49
 */
import request from "@/utils/request";
/**
 * 查询会员列表
 * @param id
 * @returns
 */
export async function queryMemberTypeService() {
  return request<API.BaseListResponse<CustomerTypeData[]>>("/pmscloud/base_customer_type/list", {
    method: "GET"
  });
}
