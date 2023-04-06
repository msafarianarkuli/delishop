export interface IGetVendorsListRes {
  data: {
    vendors: TGetVendorsListResVendors;
  };
  totalCount: number;
}

export type TGetVendorsListResVendors = IGetVendorsListResItem[];

export interface IGetVendorsListResItem {
  id: number;
  name: string;
  logo: string;
  status: string;
  open: number;
  max_sendtime: string;
  rate: string;
  rates_count: number;
  category: string;
  vendor_category_id: number;
  point: number;
  delivery_at_place: number;
  distance: string;
  in_area: boolean;
  address: string;
  about: string;
  lat: number;
  long: number;
  tags: {
    name: string;
    displayname: string;
  }[];
}
