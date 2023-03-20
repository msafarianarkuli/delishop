import {TGetVendorsListResVendors} from "types/interfaceVendorsList";

export interface IGetSuggestionSearchRes {
  data: IGetSuggestionSearchData;
}

export interface IGetSuggestionSearchData {
  vendors_suggest: IGetSuggestionSearchDataVendorsSuggest;
  products_suggest: IGetSuggestionSearchDataProductsSuggest;
}

export interface IGetSuggestionSearchDataVendorsSuggest {
  vendors: TGetVendorsListResVendors;
  totalCount: number;
}

export interface IGetSuggestionSearchDataProductsSuggest {
  products: TGetSuggestionSearchDataProductsSuggestProducts;
  totalCount: number;
}

export type TGetSuggestionSearchDataProductsSuggestProducts = IGetSuggestionSearchDataProductsSuggestProductsItems[];

export interface IGetSuggestionSearchDataProductsSuggestProductsItems {
  id: number;
  name: string;
  displayname: string;
  description_te: string;
  group_fid: number;
  priceClass: number;
  point: number;
  brand: string;
  vendor: IGetSuggestionSearchDataProductsSuggestProductsItemsVendor;
  productKinds: TGetSuggestionSearchDataProductsSuggestProductsItemsProductKinds;
}

export interface IGetSuggestionSearchDataProductsSuggestProductsItemsVendor {
  id: number;
  name: string;
  logo?: string;
  vendor_category_id: number;
  rate: string;
  rates_count: number;
}

export type TGetSuggestionSearchDataProductsSuggestProductsItemsProductKinds =
  IGetSuggestionSearchDataProductsSuggestProductsItemsProductKindsItems[];

export interface IGetSuggestionSearchDataProductsSuggestProductsItemsProductKindsItems {
  id: number;
  price_num: number;
  quality: number;
  photo_igu?: string;
  count: number;
}
