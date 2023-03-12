export interface ISupermarketProductsListRes {
  data: ISupermarketProductsListData;
}

export interface ISupermarketProductsListData {
  products: ISupermarketProductsListDataProducts;
  totalCount: number;
}

interface ISupermarketProductsListDataProducts {
  products: ISupermarketProductsListDataProductsProducts;
}

export type ISupermarketProductsListDataProductsProducts = ISupermarketProductsListDataProductsProductsItem[];

export interface ISupermarketProductsListDataProductsProductsItem {
  id: number;
  name: string;
  displayname: string;
  group_fid: number;
  unit_fid: number;
  description_te: string;
  priceClass: string;
  brand: string;
  productKind: ISupermarketProductsListDataProductsProductsItemProductKind;
}

export type ISupermarketProductsListDataProductsProductsItemProductKind =
  ISupermarketProductsListDataProductsProductsItemProductKindItem[];

interface ISupermarketProductsListDataProductsProductsItemProductKindItem {
  id: number;
  quality: number;
  price: number;
  photo_igu?: string;
}
