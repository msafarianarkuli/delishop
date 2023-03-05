import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {
  CartRestaurantListLocalStorageKey,
  removeCartRestaurantLastItem,
  setCartRestaurantItem,
  setCartRestaurantVendorData,
} from "redux/cartRestaurant/cartRestaurantReducer";
import {AppStartListening} from "redux/store";
import {ICartRestaurantReducer} from "redux/cartRestaurant/cartRestaurantInterface";

export const cartRestaurantMiddleware = createListenerMiddleware();
const addAppListener = cartRestaurantMiddleware.startListening as AppStartListening;
addAppListener({
  matcher: isAnyOf(setCartRestaurantVendorData, setCartRestaurantItem, removeCartRestaurantLastItem),
  effect: (_, api) => {
    const store = api.getState();
    if (localStorage) {
      const {cartList} = store.cartRestaurant;
      const data: Omit<ICartRestaurantReducer, "isLoadedFromStorage"> = {
        cartList,
      };
      localStorage.setItem(CartRestaurantListLocalStorageKey, JSON.stringify(data));
    }
  },
});
