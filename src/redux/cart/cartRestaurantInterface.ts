export interface ICartRestaurantReducer {
  vendorId: string | null;
  title: string | null;
  totalPrice: number;
  totalOrderCount: number;
  isLoadedFromStorage: boolean;
  cartItems: {
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
}

export interface ISetCartRestaurantVendorData {
  vendorId: string | null;
  title: string | null;
}
