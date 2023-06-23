import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  ICartReducerListItem,
  IRemoveCartReducerCartListOrder,
  ISetCartReducerItem,
  ISetCartReducerVendorData,
} from "types/interfaceCartReducer";
import {HYDRATE} from "next-redux-wrapper";
import {RootState} from "redux/store";

export interface ICartSupermarketReducer {
  cart: ICartReducerListItem;
  isLoadedFromStorage: boolean;
}

const initialCartOrder: ICartReducerListItem = {
  vendorAddressName: "",
  vendorId: null,
  title: null,
  cartOrders: {},
  totalPrice: 0,
  totalOrderCount: 0,
  totalPoint: 0,
};

const initialState: ICartSupermarketReducer = {
  cart: initialCartOrder,
  isLoadedFromStorage: false,
};

export const CartSupermarketListLocalStorageKey = "cartListSupermarket";

const cartSupermarketReducer = createSlice({
  name: "cartSupermarket",
  initialState,
  reducers: {
    setCartSupermarketVendorData: (state, action: PayloadAction<ISetCartReducerVendorData>) => {
      const payload = action.payload;
      state.cart.vendorId = payload.vendorId;
      state.cart.title = payload.title;
      state.cart.totalPoint = payload.point || 0;
      state.cart.cartOrders = {};
    },
    setCartSupermarketItem: (state, action: PayloadAction<Omit<ISetCartReducerItem, "vendorId">>) => {
      const cartOrders = state.cart.cartOrders;
      const payload = action.payload;
      // const extra = payload.extra || [];
      // const totalExtraPrice = extra?.reduce((arr, current) => arr + current.price, 0);
      const price = payload.price;
      const title = payload.title;
      const image = payload.image;
      const point = payload.point || 0;
      if (cartOrders[payload.id]) {
        cartOrders[payload.id].push({price, title, image, point});
      } else {
        cartOrders[payload.id] = [{price, title, image, point}];
      }
      state.cart.totalOrderCount += 1;
      state.cart.totalPoint += point;
      // state.cart.totalPrice += price + totalExtraPrice;
      state.cart.totalPrice += price;
      // }
    },
    removeCartSupermarketLastOrder: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const cartOrders = state.cart.cartOrders;
      const item = cartOrders[id];
      if (item?.length) {
        const lastItem = item[cartOrders[id].length - 1];
        // const totalExtraPrice = lastItem.extra?.reduce((arr, current) => arr + current.price, 0) || 0;
        const price = lastItem.price;
        const point = lastItem.point;
        item.pop();
        if (item?.length === 0) {
          delete cartOrders[id];
        }
        state.cart.cartOrders = cartOrders;
        state.cart.totalOrderCount -= 1;
        state.cart.totalPoint -= point;
        // state.cart.totalPrice -= price + totalExtraPrice;
        state.cart.totalPrice -= price;
      }
    },
    removeCartSupermarketOrder: (
      state,
      action: PayloadAction<Omit<IRemoveCartReducerCartListOrder, "vendorId" | "order">>
    ) => {
      const productId = action.payload.productId;
      const orders = state.cart.cartOrders[productId];
      if (orders?.length) {
        const index = orders.length - 1;
        // const totalExtraPrice = orders[index].extra?.reduce((arr, current) => arr + current.price, 0) || 0;
        const price = orders[index].price;
        const point = orders[index].point;
        orders.pop();
        state.cart.totalOrderCount -= 1;
        state.cart.totalPoint -= point;
        // state.cart.totalPrice -= price + totalExtraPrice;
        state.cart.totalPrice -= price;
      }
    },
    clearCartSupermarket: (state) => {
      state.cart = initialCartOrder;
    },
    setCartSupermarketFromStorage: (
      state,
      action: PayloadAction<Omit<ICartSupermarketReducer, "isLoadedFromStorage">>
    ) => {
      state.cart = action.payload?.cart || initialCartOrder;
      state.isLoadedFromStorage = true;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cartSupermarket,
      };
    },
  },
});

const {reducer, actions} = cartSupermarketReducer;

export const {
  setCartSupermarketVendorData,
  removeCartSupermarketOrder,
  removeCartSupermarketLastOrder,
  setCartSupermarketItem,
  clearCartSupermarket,
  setCartSupermarketFromStorage,
} = actions;

export const selectCartSupermarket = (state: RootState) => state.cartSupermarket;
export const selectCartSupermarketCart = (state: RootState) => state.cartSupermarket.cart;
export const selectCartSupermarketCount = (state: RootState) => state.cartSupermarket.cart.totalOrderCount;
export const selectCartSupermarketPrice = (state: RootState) => state.cartSupermarket.cart.totalPrice;

export default reducer;
