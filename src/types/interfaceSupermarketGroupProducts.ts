export interface ISupermarketGroupProductsRes {
  data: ISupermarketGroupProductsData;
}

export interface ISupermarketGroupProductsData {
  products: ISupermarketGroupProductsDataProducts;
  totalCount: number;
}

export interface ISupermarketGroupProductsDataProducts {
  products: TSupermarketGroupProductsDataProductsProducts;
}

export type TSupermarketGroupProductsDataProductsProducts = ISupermarketGroupProductsDataProductsItems[];

export interface ISupermarketGroupProductsDataProductsItems {
  id: number;
  name: string;
  displayname: string;
  group_fid: number;
  unit_fid: number;
  description_te: string;
  priceClass: number;
  point: number;
  brand: string;
  productKind: TSupermarketGroupProductsDataProductsItemsProductKind;
}

export type TSupermarketGroupProductsDataProductsItemsProductKind =
  ISupermarketGroupProductsDataProductsItemsProductKindItems[];

export interface ISupermarketGroupProductsDataProductsItemsProductKindItems {
  id: number;
  quality: number;
  price: number;
  photo_igu?: string;
}
