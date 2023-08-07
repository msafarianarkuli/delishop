export interface ISupermarketProductsListRes {
  data: ISupermarketProductsListData;
}

export interface ISupermarketProductsListData {
  groups: TSupermarketProductsListDataGroups;
}

export type TSupermarketProductsListDataGroups = ISupermarketProductsListDataGroupsItem[];

export interface ISupermarketProductsListDataGroupsItem {
  id: number;
  name: string;
  displayname: string;
  logo?: string;
  sub_groups: null;
  products: TSupermarketProductsListDataGroupsItemProducts;
}

export type TSupermarketProductsListDataGroupsItemProducts = ISupermarketProductsListDataGroupsItemProductsItem[];

export interface ISupermarketProductsListDataGroupsItemProductsItem {
  id: number;
  name: string;
  displayname: string;
  group_fid: number;
  unit_fid: number;
  description_te: string;
  priceClass: number;
  point: number;
  brand: string;
  productKind: ISupermarketProductsListDataGroupsItemProductsItemProductKind;
}

export type ISupermarketProductsListDataGroupsItemProductsItemProductKind =
  ISupermarketProductsListDataGroupsItemProductsItemProductKindItem[];

export interface ISupermarketProductsListDataGroupsItemProductsItemProductKindItem {
  id: number;
  quality: number;
  price: number;
  photo_igu?: string;
  count: number;
}
