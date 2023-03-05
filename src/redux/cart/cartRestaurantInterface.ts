export interface ICartRestaurantReducer {
  // vendorId: string | null;
  // title: string | null;
  // totalPrice: number;
  // totalOrderCount: number;
  cartList: TCartRestaurantList;
  isLoadedFromStorage: boolean;
  // cartOrders: {
  //   [x: number]: ICartRestaurantReducerCartItem[];
  // };
}

export type TCartRestaurantList = ICartRestaurantListItem[];

export interface ICartRestaurantListItem {
  vendorId: string | null;
  title: string | null;
  totalPrice: number;
  totalOrderCount: number;
  cartOrders: {
    [x: number]: ICartRestaurantReducerCartItem[];
  };
}

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
