export interface IGetUserDiscountRes {
  data: IUserDiscountData;
}

export interface IUserDiscountData {
  discounts: TUserDiscountDataDiscounts;
  totalCount: number;
}

type TUserDiscountDataDiscounts = IUserDiscountDataDiscountsItems[];

interface IUserDiscountDataDiscountsItems {
  id: number;
  active: number;
  amount: number;
  code: string;
  count: number;
  created_at: string;
  description: string;
  end_date: string;
  is_percentage: number;
  maxorderprice: number;
  minorderprice: number;
  start_date: string;
  title: string;
  type_id?: number;
  type_string?: string;
  updated_at: string;
  user_id: number;
  vendor_category_id?: number;
}
