import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "redux/store";

export interface ICartReducer {
  vendorId: string | null;
  totalPrice: number;
  totalOrderCount: number;
  isLoadedFromStorage: boolean;
  cartItems: {
    [x: number]: ICartReducerCartItem[];
  };
}

interface ICartReducerCartItem {
  extra?: ICartReducerCartItemExtraItem[];
  price: number;
}

export interface ICartReducerCartItemExtraItem {
  id: number;
  price: number;
}

interface ISetCartItem extends ICartReducerCartItem {
  id: number;
}

const initialState: ICartReducer = {
  vendorId: null,
  cartItems: {},
  totalPrice: 0,
  totalOrderCount: 0,
  isLoadedFromStorage: false,
};

export const CartLocalStorageKey = "cart";

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartVendorId: (state, action: PayloadAction<string | null>) => {
      state.vendorId = action.payload;
      state.cartItems = {};
      state.totalPrice = 0;
      state.totalOrderCount = 0;
    },
    setCartItem: (state, action: PayloadAction<ISetCartItem>) => {
      const cartItem = state.cartItems;
      const payload = action.payload;
      const extra = payload.extra || [];
      const totalExtraPrice = extra?.reduce((arr, current) => arr + current.price, 0);
      const price = payload.price;
      if (cartItem[payload.id]) {
        cartItem[payload.id].push({extra, price});
      } else {
        cartItem[payload.id] = [{extra, price}];
      }
      state.totalOrderCount += 1;
      state.totalPrice += price + totalExtraPrice;
    },
    removeCartLastItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const cartItems = state.cartItems;
      const item = cartItems[id];
      if (item?.length) {
        const lastItem = item[cartItems[id].length - 1];
        const totalExtraPrice = lastItem.extra?.reduce((arr, current) => arr + current.price, 0) || 0;
        const price = lastItem.price;
        item.pop();
        if (item?.length === 0) {
          delete cartItems[id];
        }
        state.cartItems = cartItems;
        state.totalOrderCount -= 1;
        state.totalPrice -= price + totalExtraPrice;
      }
    },
    setCartFromStorage: (state, action: PayloadAction<Omit<ICartReducer, "isLoadedFromStorage">>) => {
      state.vendorId = action.payload?.vendorId || initialState.vendorId;
      state.cartItems = action.payload?.cartItems || initialState.cartItems;
      state.totalOrderCount = action.payload?.totalOrderCount || initialState.totalOrderCount;
      state.totalPrice = action.payload?.totalPrice || initialState.totalPrice;
      state.isLoadedFromStorage = true;
    },
  },
});

const {reducer, actions} = cartReducer;

export const {setCartVendorId, setCartItem, removeCartLastItem, setCartFromStorage} = actions;
export const selectCart = (state: RootState) => state.cart;
export const selectCartTotalOrderCount = (state: RootState) => state.cart.totalOrderCount;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export default reducer;
