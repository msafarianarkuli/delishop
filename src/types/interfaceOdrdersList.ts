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
  paymenttype: string;
  orderstatus: string;
  productKinds: TGetOrdersListResOrdersItemsProductKinds;
  vendor: IGetOrdersListResOrdersItemsVendor;
  address: IGetOrdersListResOrdersItemsAddress;
  created_at: string;
}

export type TGetOrdersListResOrdersItemsProductKinds = IGetOrdersListResOrdersItemsProductKindsItems[];

interface IGetOrdersListResOrdersItemsVendor {
  id: number;
  name: string;
  logo?: string;
}

interface IGetOrdersListResOrdersItemsProductKindsItems {
  id: number;
  count_num: number;
  price_prc: number;
  quality: number;
  product: IGetOrdersListResOrdersItemsProductKindsItemsProduct;
  extra: boolean;
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
