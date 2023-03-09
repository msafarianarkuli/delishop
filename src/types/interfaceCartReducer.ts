export interface ICartReducer {
  cartList: TCartReducerList;
  isLoadedFromStorage: boolean;
}

export type TCartReducerList = ICartReducerListItem[];

export interface ICartReducerListItem {
  vendorId: string | null;
  title: string | null;
  totalPrice: number;
  totalOrderCount: number;
  cartOrders: TCartReducerListItemCartOrders;
}

export type TCartReducerListItemCartOrders = {
  [x: number]: ICartReducerCartItem[];
};

export interface ICartReducerCartItem {
  extra?: TCartReducerCartItemExtraItemExtra;
  price: number;
  title: string;
}

export type TCartReducerCartItemExtraItemExtra = ICartReducerCartItemExtraItem[];

export interface ICartReducerCartItemExtraItem {
  id: number;
  price: number;
  name: string;
}

export interface ISetCartReducerItem extends ICartReducerCartItem {
  id: number;
  vendorId: string | null;
}

export interface IRemoveCartReducerLastItem {
  id: number;
  vendorId: string | null;
}

export interface ISetCartReducerVendorData {
  vendorId: string | null;
  title: string | null;
}

export interface IRemoveCartReducerCartListOrder {
  order: ICartReducerCartItem;
  vendorId: string | null;
  productId: number;
}

export interface IRemoveCartReducerCartListOrderExtra {
  order: ICartReducerCartItem;
  extraId: number;
  vendorId: string | null;
  productId: number;
}
