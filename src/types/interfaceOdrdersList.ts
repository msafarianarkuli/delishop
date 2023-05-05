export interface IGetOrdersListRes {
  data: {
    orders: IGetOrdersListResOrders;
  };
  totalCount: number;
}

export type IGetOrdersListResOrders = IGetOrdersListResOrdersItems[];

export interface IGetOrdersListResOrdersItems {
  id: number;
  topayprice: number;
  paymenttype: number;
  orderstatus: number;
  productKinds: TGetOrdersListResOrdersItemsProductKinds;
  vendor: IGetOrdersListResOrdersItemsVendor;
  address: IGetOrdersListResOrdersItemsAddress;
  created_at: string;
  sendtime: string | number;
  rate?: IGetOrdersListResOrdersItemsRate;
}

export type TGetOrdersListResOrdersItemsProductKinds = IGetOrdersListResOrdersItemsProductKindsItems[];

interface IGetOrdersListResOrdersItemsVendor {
  id: number;
  name: string;
  logo?: string;
  vendor_category_id: number;
}

export interface IGetOrdersListResOrdersItemsProductKindsItems {
  id: number;
  count_num: number;
  photo_igu?: string;
  price_prc: number;
  quality: number;
  product: IGetOrdersListResOrdersItemsProductKindsItemsProduct;
  extra: {[x: number]: IGetOrdersListResOrdersItemsProductKindsItemsExtraItems} | boolean;
}

interface IGetOrdersListResOrdersItemsProductKindsItemsProduct {
  displayname: string;
  name: string;
}

interface IGetOrdersListResOrdersItemsAddress {
  address: string;
  title?: string;
  is_visible: number;
}

interface IGetOrdersListResOrdersItemsRate {
  admin_reply?: string;
  comment?: string;
  created_at: string;
  deliveryrate_num?: string;
  id: number;
  name: string;
  order_fid: number;
  overallrate_num: null;
  publish: number;
  updated_at: string;
  vendor_reply?: string;
}

interface IGetOrdersListResOrdersItemsProductKindsItemsExtraItems {
  id: number;
  name: string;
  price: number;
}
