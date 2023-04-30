export interface IUserCouponRes {
  data: {
    coupons: TUserCouponDataCoupons;
  };
}

export type TUserCouponDataCoupons = IUserCouponDataCouponsItems[];

interface IUserCouponDataCouponsItems {
  id: number;
  name: string;
  displayname: string;
  value: number;
  coupon: number;
  description: string | null;
  created_at: string;
  updated_at: string;
  active: number;
}
