export interface IUser {
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

export interface ICartDataItem {
  id: string;
  count: number;
  title: string;
  price: number;
  image?: string;
  extra?: TCartDataItemExtra;
}

interface ICartDataItemExtraItem {
  id: number;
  name: string;
  price: number;
}

export type TCartDataItemExtra = ICartDataItemExtraItem[];

export type TCartData = ICartDataItem[];

export interface IUpdateProfileRes {
  age_level: string | null;
  anniversary_date: string | null;
  birthday: string | null;
  created_at: string;
  email: string | null;
  email_verified_at: string | null;
  gender: number | null;
  id: number;
  invite_token: string;
  name: string;
  phone: string;
  updated_at: string;
}
