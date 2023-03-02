export interface IGetUserAddressesListRes {
  data: {
    addresses: TGetUserAddressesListAddresses;
  };
}

export type TGetUserAddressesListAddresses = IGetUserAddressesListAddressesItem[];

export interface IGetUserAddressesListAddressesItem {
  id: number;
  title: string;
  ownername: string;
  address: string;
  description: string;
  latitude: number;
  longitude: number;
  tel: string;
}
