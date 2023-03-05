import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {
  CartLocalStorageKey,
  ICartReducer,
  removeCartLastItem,
  setCartItem,
  setCartVendorId,
} from "redux/cart/cartReducer";
import {AppStartListening} from "redux/store";

export const cartMiddleware = createListenerMiddleware();
const addAppListener = cartMiddleware.startListening as AppStartListening;
addAppListener({
  matcher: isAnyOf(setCartVendorId, setCartItem, removeCartLastItem),
  effect: (_, api) => {
    const store = api.getState();
    if (localStorage) {
      const {vendorId, totalOrderCount, totalPrice, cartItems} = store.cart;
      const data: Omit<ICartReducer, "isLoadedFromStorage"> = {
        vendorId,
        cartItems,
        totalPrice,
        totalOrderCount,
      };
      localStorage.setItem(CartLocalStorageKey, JSON.stringify(data));
    }
  },
});
