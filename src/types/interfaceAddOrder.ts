export interface IAddOrderRes {
  Data: IAddOrderData;
}

export interface IAddOrderData {
  order: IAddOrderDataOrder;
  payurl: string;
  now: string;
}

export interface IAddOrderDataOrder {
  topayprice: number;
  vendor_share: number;
  name: string | null;
  mobile: string;
  sendprice: number;
  delivery_distance: number;
  user_fid: number;
  paymenttype: string;
  sendtime: string;
  orderstatus: number;
  tax: number;
  deliverytype_enum: string;
  description: string;
  discount_num: number;
  location_place_fid: string;
  vendor_id: string;
  updated_at: string;
  created_at: string;
  id: number;
}
