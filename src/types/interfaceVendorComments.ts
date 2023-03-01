export interface IGetVendorCommentsListRes {
  data: {
    comments: TGetVendorCommentsComments;
    totalCount: number;
  };
}

export type TGetVendorCommentsComments = IGetVendorCommentsListCommentsItem[];

export interface IGetVendorCommentsListCommentsItem {
  id: number;
  order_fid: number;
  overallrate_num: number;
  deliveryrate_num: number;
  name?: string | null;
  comment: string;
  admin_reply?: string | null;
  vendor_reply?: string | null;
  publish: number;
  created_at: string;
  updated_at: string;
  laravel_through_key: number;
  order_details: IGetVendorCommentsListCommentsItemOrderDetails;
}

export interface IGetVendorCommentsListCommentsItemOrderDetails {
  products: TGetVendorCommentsCommentsItemOrderDetailsProducts;
}

export type TGetVendorCommentsCommentsItemOrderDetailsProducts =
  IGetVendorCommentsListCommentsItemOrderDetailsProductsItem[];

export interface IGetVendorCommentsListCommentsItemOrderDetailsProductsItem {
  id: number;
  displayname: string;
}
