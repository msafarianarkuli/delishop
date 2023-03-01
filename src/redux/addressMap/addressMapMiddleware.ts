import {createListenerMiddleware} from "@reduxjs/toolkit";
import {
  addressMapLocalStorageKey,
  setAddressMap,
  setUserAddress,
  userAddressLocalStorageKey,
} from "redux/addressMap/addressMapReducer";

export const addressMapMiddleware = createListenerMiddleware();
addressMapMiddleware.startListening({
  actionCreator: setAddressMap,
  effect: (action) => {
    if (localStorage) {
      localStorage.setItem(addressMapLocalStorageKey, JSON.stringify(action.payload));
    }
  },
});

addressMapMiddleware.startListening({
  actionCreator: setUserAddress,
  effect: (action) => {
    if (localStorage) {
      localStorage.setItem(userAddressLocalStorageKey, JSON.stringify(action.payload));
    }
  },
});
