import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "redux/store";
import {
  ICartRestaurantListItem,
  ICartRestaurantReducer,
  IRemoveCartRestaurantLastItem,
  ISetCartRestaurantItem,
  ISetCartRestaurantVendorData,
} from "redux/cartRestaurant/cartRestaurantInterface";

const initialCartOrder: ICartRestaurantListItem = {
  vendorId: null,
  title: null,
  cartOrders: {},
  totalPrice: 0,
  totalOrderCount: 0,
};

const initialState: ICartRestaurantReducer = {
  // vendorId: null,
  // title: null,
  // cartOrders: {},
  // totalPrice: 0,
  // totalOrderCount: 0,
  cartList: [],
  isLoadedFromStorage: false,
};

export const CartRestaurantListLocalStorageKey = "cartListRestaurant";

const cartRestaurantReducer = createSlice({
  name: "cartRestaurant",
  initialState,
  reducers: {
    setCartRestaurantVendorData: (state, action: PayloadAction<ISetCartRestaurantVendorData>) => {
      state.cartList.push({
        ...initialCartOrder,
        vendorId: action.payload.vendorId,
        title: action.payload.title,
      });
    },
    setCartRestaurantItem: (state, action: PayloadAction<ISetCartRestaurantItem>) => {
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
    removeCartRestaurantLastItem: (state, action: PayloadAction<IRemoveCartRestaurantLastItem>) => {
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
    setCartRestaurantFromStorage: (
      state,
      action: PayloadAction<Omit<ICartRestaurantReducer, "isLoadedFromStorage">>
    ) => {
      state.cartList = action.payload?.cartList || [];
      // state.vendorId = action.payload?.vendorId || initialState.vendorId;
      // state.cartOrders = action.payload?.cartOrders || initialState.cartOrders;
      // state.totalOrderCount = action.payload?.totalOrderCount || initialState.totalOrderCount;
      // state.totalPrice = action.payload?.totalPrice || initialState.totalPrice;
      // state.title = action.payload?.title || initialState.title;
      state.isLoadedFromStorage = true;
    },
  },
});

const {reducer, actions} = cartRestaurantReducer;

export const {
  setCartRestaurantVendorData,
  setCartRestaurantItem,
  removeCartRestaurantLastItem,
  setCartRestaurantFromStorage,
} = actions;
export const selectCartRestaurant = (state: RootState) => state.cartRestaurant;
export const selectCartRestaurantList = (state: RootState) => state.cartRestaurant.cartList;
// export const selectCartRestaurantTotalOrderCount = (state: RootState) => state.cartRestaurant.totalOrderCount;
// export const selectCartRestaurantTotalPrice = (state: RootState) => state.cartRestaurant.totalPrice;

export default reducer;
