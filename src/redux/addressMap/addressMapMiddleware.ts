import {createListenerMiddleware} from "@reduxjs/toolkit";
import {addressMapLocalStorageKey, setAddressMap} from "redux/addressMap/addressMapReducer";

export const addressMapMiddleware = createListenerMiddleware();
addressMapMiddleware.startListening({
  actionCreator: setAddressMap,
  effect: (action) => {
    if (localStorage) {
      localStorage.setItem(addressMapLocalStorageKey, JSON.stringify(action.payload));
    }
  },
});
