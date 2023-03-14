import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {AppStartListening} from "redux/store";
import {
  CartSupermarketListLocalStorageKey,
  clearCartSupermarket,
  ICartSupermarketReducer,
  removeCartSupermarketLastOrder,
  removeCartSupermarketOrder,
  setCartSupermarketItem,
  setCartSupermarketVendorData,
} from "redux/cartSupermraket/cartSupermarketReducer";

export const cartSupermarketMiddleware = createListenerMiddleware();
const addAppListener = cartSupermarketMiddleware.startListening as AppStartListening;
addAppListener({
  matcher: isAnyOf(
    setCartSupermarketVendorData,
    removeCartSupermarketOrder,
    removeCartSupermarketLastOrder,
    setCartSupermarketItem,
    clearCartSupermarket
  ),
  effect: (_, api) => {
    const store = api.getState();
    if (localStorage) {
      const {cart} = store.cartSupermarket;
      const data: Omit<ICartSupermarketReducer, "isLoadedFromStorage"> = {
        cart,
      };
      localStorage.setItem(CartSupermarketListLocalStorageKey, JSON.stringify(data));
    }
  },
});
