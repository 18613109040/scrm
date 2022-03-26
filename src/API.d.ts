/*
 * :file description:
 * :name: /ypms.front/src/API.d.ts
 * :author: 胡东亮
 * :date created: 2021-07-29 16:59:01
 * :last editor: 胡东亮
 * :date last edited: 2021-09-12 18:55:08
 */
declare namespace API {
  export type BaseResponse<T = unknown> = {
    status: string;
    msg: string;
    data: T;
  };

  export type BaseListQuery<T = unknown> = {
    pageNum: number;
    pageSize: number;
  } & T;

  export type BaseListResponse<T = unknown> = BaseResponse<{ rows: T; total: number }>;
}
