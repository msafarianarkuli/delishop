export interface IOrderDiscountCalcRes {
  data: {
    discountPrice: number;
  };
}

export interface IOrderDiscountCalcError {
  message: string;
  errors: {
    code: string[] | null;
    vendor_id: string[] | null;
  };
}
