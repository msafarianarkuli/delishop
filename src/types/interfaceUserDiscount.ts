export interface IGetUserDiscountRes {
  data: IUserDiscountData;
}

export interface IUserDiscountData {
  discounts: [];
  totalCount: number;
}
