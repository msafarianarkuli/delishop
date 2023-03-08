export interface ICartRestaurantReducer {
  cartList: TCartRestaurantList;
  isLoadedFromStorage: boolean;
}

export type TCartRestaurantList = ICartRestaurantListItem[];

export interface ICartRestaurantListItem {
  vendorId: string | null;
  title: string | null;
  totalPrice: number;
  totalOrderCount: number;
  cartOrders: TCartRestaurantListItemCartOrders;
}

export type TCartRestaurantListItemCartOrders = {
  [x: number]: ICartRestaurantReducerCartItem[];
};

interface ICartRestaurantReducerCartItem {
  extra?: ICartRestaurantReducerCartItemExtraItem[];
  price: number;
  title: string;
}

export interface ICartRestaurantReducerCartItemExtraItem {
  id: number;
  price: number;
  name: string;
}

export interface ISetCartRestaurantItem extends ICartRestaurantReducerCartItem {
  id: number;
  vendorId: string | null;
}

export interface IRemoveCartRestaurantLastItem {
  id: number;
  vendorId: string | null;
}

export interface ISetCartRestaurantVendorData {
  vendorId: string | null;
  title: string | null;
}
