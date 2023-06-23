import {configureStore, TypedStartListening} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import templateReducer from "redux/template/templateReducer";
import addressMapReducer from "redux/addressMap/addressMapReducer";
import cartRestaurantReducer from "redux/cartRestaurant/cartRestaurantReducer";
import {addressMapMiddleware} from "redux/addressMap/addressMapMiddleware";
import {cartRestaurantMiddleware} from "redux/cartRestaurant/cartRestaurantMiddleware";

const makeStore = () =>
  configureStore({
    reducer: {
      template: templateReducer,
      addressMap: addressMapReducer,
      cartRestaurant: cartRestaurantReducer,
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(addressMapMiddleware.middleware, cartRestaurantMiddleware.middleware),
  });

const store = makeStore();

const wrapper = createWrapper(makeStore, {debug: false});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export default wrapper;
