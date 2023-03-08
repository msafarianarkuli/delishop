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
  vendor: {
    id: number;
    name: string;
    logo?: string;
  };
}
