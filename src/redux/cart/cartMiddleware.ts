import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {
  CartLocalStorageKey,
  ICartReducer,
  removeCartRestaurantLastItem,
  setCartRestaurantItem,
  setCartRestaurantVendorId,
} from "redux/cart/cartRestaurantReducer";
import {AppStartListening} from "redux/store";

export const cartMiddleware = createListenerMiddleware();
const addAppListener = cartMiddleware.startListening as AppStartListening;
addAppListener({
  matcher: isAnyOf(setCartRestaurantVendorId, setCartRestaurantItem, removeCartRestaurantLastItem),
  effect: (_, api) => {
    const store = api.getState();
    if (localStorage) {
      const {vendorId, totalOrderCount, totalPrice, cartItems} = store.cartRestaurant;
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
