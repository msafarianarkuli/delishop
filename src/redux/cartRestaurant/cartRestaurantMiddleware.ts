import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {
  CartRestaurantListLocalStorageKey,
  clearCartRestaurantCartList,
  removeCartRestaurantCartListCartOrder,
  removeCartRestaurantCartListLastOrder,
  removeCartRestaurantCartListOrder,
  removeCartRestaurantCartListOrderExtra,
  setCartRestaurantItem,
  setCartRestaurantVendorData,
  setCartRestaurantReorder,
} from "redux/cartRestaurant/cartRestaurantReducer";
import {AppStartListening} from "redux/store";
import {ICartReducer} from "types/interfaceCartReducer";

export const cartRestaurantMiddleware = createListenerMiddleware();
const addAppListener = cartRestaurantMiddleware.startListening as AppStartListening;
addAppListener({
  matcher: isAnyOf(
    setCartRestaurantVendorData,
    setCartRestaurantItem,
    removeCartRestaurantCartListLastOrder,
    clearCartRestaurantCartList,
    removeCartRestaurantCartListCartOrder,
    removeCartRestaurantCartListOrder,
    removeCartRestaurantCartListOrderExtra,
    setCartRestaurantReorder
  ),
  effect: (_, api) => {
    const store = api.getState();
    if (localStorage) {
      const {cartList} = store.cartRestaurant;
      const data: Omit<ICartReducer, "isLoadedFromStorage"> = {
        cartList,
      };
      localStorage.setItem(CartRestaurantListLocalStorageKey, JSON.stringify(data));
    }
  },
});
