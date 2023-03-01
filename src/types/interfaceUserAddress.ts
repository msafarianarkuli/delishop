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
  latitude: number;
  longitude: number;
  tel: string;
}
