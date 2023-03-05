import {createListenerMiddleware} from "@reduxjs/toolkit";
import {
  addressMapLocalStorageKey,
  setAddressMap,
  setUserAddress,
  userAddressLocalStorageKey,
} from "redux/addressMap/addressMapReducer";
import {AppStartListening} from "redux/store";

export const addressMapMiddleware = createListenerMiddleware();
const addAppListener = addressMapMiddleware.startListening as AppStartListening;
addAppListener({
  actionCreator: setAddressMap,
  effect: (action) => {
    if (localStorage) {
      localStorage.setItem(addressMapLocalStorageKey, JSON.stringify(action.payload));
    }
  },
});

addAppListener({
  actionCreator: setUserAddress,
  effect: (action) => {
    if (localStorage) {
      localStorage.setItem(userAddressLocalStorageKey, JSON.stringify(action.payload));
    }
  },
});
