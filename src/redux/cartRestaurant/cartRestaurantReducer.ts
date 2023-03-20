import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "redux/store";
import {
  ICartReducer,
  ICartReducerListItem,
  IRemoveCartReducerCartListOrder,
  IRemoveCartReducerCartListOrderExtra,
  IRemoveCartReducerLastItem,
  ISetCartReducerItem,
  ISetCartReducerVendorData,
} from "types/interfaceCartReducer";
import {findOrderIndex} from "utils/cartReducerUtils";
import {HYDRATE} from "next-redux-wrapper";

const initialCartOrder: ICartReducerListItem = {
  vendorId: null,
  title: null,
  openHours: null,
  latitude: 0,
  longitude: 0,
  cartOrders: {},
  totalPrice: 0,
  totalOrderCount: 0,
  totalPoint: 0,
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
        openHours: action.payload.openHours || null,
        latitude: action.payload.latitude || 0,
        longitude: action.payload.longitude || 0,
        totalPoint: action.payload.point || 0,
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
        const point = payload.point || 0;
        if (cartItem[payload.id]) {
          cartItem[payload.id].push({extra, price, title, point});
        } else {
          cartItem[payload.id] = [{extra, price, title, point}];
        }
        vendor.totalOrderCount += 1;
        vendor.totalPoint += point;
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
          const point = lastItem.point;
          item.pop();
          if (item?.length === 0) {
            delete cartOrders[id];
          }
          vendor.cartOrders = cartOrders;
          vendor.totalOrderCount -= 1;
          vendor.totalPoint -= point;
          vendor.totalPrice -= price + totalExtraPrice;
        }
      }
    },
    removeCartRestaurantCartListOrder: (state, action: PayloadAction<IRemoveCartReducerCartListOrder>) => {
      const cartList = state.cartList;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      const productId = action.payload.productId;
      const order = action.payload.order;
      const index = findOrderIndex({order, productId, cartOrders: vendor?.cartOrders});
      if (index !== -1 && vendor?.cartOrders) {
        const orders = vendor.cartOrders[productId];
        const totalExtraPrice = orders[index].extra?.reduce((arr, current) => arr + current.price, 0) || 0;
        const price = orders[index].price;
        const point = orders[index].point;
        orders.splice(index, 1);
        vendor.totalOrderCount -= 1;
        vendor.totalPoint -= point;
        vendor.totalPrice -= price + totalExtraPrice;
      }
    },
    removeCartRestaurantCartListOrderExtra: (state, action: PayloadAction<IRemoveCartReducerCartListOrderExtra>) => {
      const cartList = state.cartList;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      const productId = action.payload.productId;
      const extraId = action.payload.extraId;
      const order = action.payload.order;
      const index = findOrderIndex({order, productId, cartOrders: vendor?.cartOrders});
      if (index !== -1 && vendor?.cartOrders) {
        const orders = vendor.cartOrders[productId];
        const tempOrder = orders[index];
        if (tempOrder.extra?.length) {
          const extraItem = tempOrder.extra.find((el) => el.id === extraId);
          if (extraItem) {
            vendor.totalPrice -= extraItem.price;
          }
          tempOrder.extra = tempOrder.extra.filter((el) => el.id !== extraId);
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cartRestaurant,
      };
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
  removeCartRestaurantCartListOrder,
  removeCartRestaurantCartListOrderExtra,
} = actions;
export const selectCartRestaurant = (state: RootState) => state.cartRestaurant;
export const selectCartRestaurantList = (state: RootState) => state.cartRestaurant.cartList;

export default reducer;
