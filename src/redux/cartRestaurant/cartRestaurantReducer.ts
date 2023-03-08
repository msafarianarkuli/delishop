import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "redux/store";
import {
  ICartReducerListItem,
  ICartReducer,
  IRemoveCartReducerLastItem,
  ISetCartReducerItem,
  ISetCartReducerVendorData,
} from "types/interfaceCartReducer";

const initialCartOrder: ICartReducerListItem = {
  vendorId: null,
  title: null,
  cartOrders: {},
  totalPrice: 0,
  totalOrderCount: 0,
};

const initialState: ICartReducer = {
  cartList: [],
  isLoadedFromStorage: false,
};

export const CartRestaurantListLocalStorageKey = "cartListRestaurant";

const cartRestaurantReducer = createSlice({
  name: "cartRestaurant",
  initialState,
  reducers: {
    setCartRestaurantVendorData: (state, action: PayloadAction<ISetCartReducerVendorData>) => {
      state.cartList.push({
        ...initialCartOrder,
        vendorId: action.payload.vendorId,
        title: action.payload.title,
      });
    },
    setCartRestaurantItem: (state, action: PayloadAction<ISetCartReducerItem>) => {
      const cartList = state.cartList;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      if (vendor) {
        const cartItem = vendor.cartOrders;
        const payload = action.payload;
        const extra = payload.extra || [];
        const totalExtraPrice = extra?.reduce((arr, current) => arr + current.price, 0);
        const price = payload.price;
        const title = payload.title;
        if (cartItem[payload.id]) {
          cartItem[payload.id].push({extra, price, title});
        } else {
          cartItem[payload.id] = [{extra, price, title}];
        }
        vendor.totalOrderCount += 1;
        vendor.totalPrice += price + totalExtraPrice;
      }
    },
    removeCartRestaurantCartListLastOrder: (state, action: PayloadAction<IRemoveCartReducerLastItem>) => {
      const cartList = state.cartList;
      const id = action.payload.id;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      if (vendor) {
        const cartOrders = vendor.cartOrders;
        const item = cartOrders[id];
        if (item?.length) {
          const lastItem = item[cartOrders[id].length - 1];
          const totalExtraPrice = lastItem.extra?.reduce((arr, current) => arr + current.price, 0) || 0;
          const price = lastItem.price;
          item.pop();
          if (item?.length === 0) {
            delete cartOrders[id];
          }
          vendor.cartOrders = cartOrders;
          vendor.totalOrderCount -= 1;
          vendor.totalPrice -= price + totalExtraPrice;
        }
      }
    },
    clearCartRestaurantCartList: (state) => {
      state.cartList = [];
    },
    removeCartRestaurantCartListCartOrder: (state, action: PayloadAction<string>) => {
      const cartList = state.cartList;
      const id = action.payload;
      if (cartList.some((item) => item.vendorId === id)) {
        state.cartList = cartList.filter((item) => item.vendorId !== action.payload);
      }
    },
    setCartRestaurantFromStorage: (state, action: PayloadAction<Omit<ICartReducer, "isLoadedFromStorage">>) => {
      state.cartList = action.payload?.cartList || [];
      state.isLoadedFromStorage = true;
    },
  },
});

const {reducer, actions} = cartRestaurantReducer;

export const {
  setCartRestaurantVendorData,
  setCartRestaurantItem,
  removeCartRestaurantCartListLastOrder,
  setCartRestaurantFromStorage,
  clearCartRestaurantCartList,
  removeCartRestaurantCartListCartOrder,
} = actions;
export const selectCartRestaurant = (state: RootState) => state.cartRestaurant;
export const selectCartRestaurantList = (state: RootState) => state.cartRestaurant.cartList;

export default reducer;
