import React, {createContext, useContext} from "react";

interface IRestaurantDetailIdProvider extends IRestaurantDetailIdContext {
  children: JSX.Element;
}

interface IRestaurantDetailIdContext {
  vendorId: string;
}

const initialState = {
  vendorId: "",
};

const RestaurantDetailIdContext = createContext<IRestaurantDetailIdContext>(initialState);

function RestaurantDetailIdProvider(props: IRestaurantDetailIdProvider) {
  const {children, vendorId} = props;
  return <RestaurantDetailIdContext.Provider value={{vendorId}}>{children}</RestaurantDetailIdContext.Provider>;
}

export default RestaurantDetailIdProvider;

export function useRestaurantDetailId() {
  return useContext(RestaurantDetailIdContext);
}
