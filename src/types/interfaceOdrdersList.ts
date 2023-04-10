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
  vendor: IGetOrdersListResOrdersItemsVendor;
  productKinds: TGetOrdersListResOrdersItemsProductKinds;
}

export type TGetOrdersListResOrdersItemsProductKinds = IGetOrdersListResOrdersItemsProductKindsItems[];

interface IGetOrdersListResOrdersItemsVendor {
  id: number;
  name: string;
  logo?: string;
}

interface IGetOrdersListResOrdersItemsProductKindsItems {
  count_num: number;
  extra: boolean;
  id: number;
  price_prc: number;
  product: IGetOrdersListResOrdersItemsProductKindsItemsProduct;
  quality: number;
}

interface IGetOrdersListResOrdersItemsProductKindsItemsProduct {
  displayname: string;
  name: string;
}
