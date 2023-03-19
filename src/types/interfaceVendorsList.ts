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
  max_sendtime: string;
  rate: string;
  rates_count: number;
  category: string;
  point: number;
  delivery_at_place: number;
  about: string;
  tags: {
    name: string;
    displayname: string;
  }[];
}
