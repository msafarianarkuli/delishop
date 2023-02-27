export interface User {
  useId?: number;
  name?: string | null | undefined;
  phone?: string;
  userName?: string;
  token?: string;
  expires_at?: string;
  birthday?: string | null;
  invite_token?: string | null;
  age_level?: string | null;
  gender?: string | null;
  anniversary_date?: string | null;
}

export interface IDataContextProvider<T> {
  data?: T;
  isLoading: boolean;
  isFetching: boolean;
  error: any;
}

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
  tags: {
    name: string;
    displayname: string;
  }[];
}
