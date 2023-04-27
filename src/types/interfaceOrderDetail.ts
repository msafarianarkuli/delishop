export interface IGetOrderDetailRes {
  data: IGetOrderDetailData;
}

export interface IGetOrderDetailData {
  id: number;
  name: string;
  mobile: string;
  topayprice: number;
  tax: number;
  paymenttype: number;
  orderstatus: number;
  sendtime: number;
  deliverytype_enum: number;
  description: string;
  discount_num: number;
  discount_code: [];
  productKinds: TGetOrderDetailDataProductKinds;
  vendor: IGetOrderDetailDataVendor;
  address: IGetOrderDetailDataAddress;
  updated_at: string;
  created_at: string;
}

export type TGetOrderDetailDataProductKinds = IGetOrderDetailDataProductKindsItems[];

export interface IGetOrderDetailDataProductKindsItems {
  orderproduct_id: number;
  id: number;
  count_num: number;
  price_prc: number;
  quality: number;
  photo_igu: string;
  product: {
    name: string;
    displayname: string;
  };
  extra: boolean;
}

interface IGetOrderDetailDataVendor {
  id: number;
  name: string;
  logo: string;
}

interface IGetOrderDetailDataAddress {
  id: number;
  ownername: string;
  address: string;
  tel: string;
  latitude: number;
  longitude: number;
  title: string;
}
