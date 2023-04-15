import React, {createContext, useContext} from "react";
import {UseQueryResult} from "react-query";
import {IGetOrderDetailData} from "types/interfaceOrderDetail";
import useOrderDetailResult from "hooks/useOrderDetailResult";

// @ts-ignore
const initialState: UseQueryResult<IGetOrderDetailData> = {};

const RestaurantOrderDetailDataContext = createContext<UseQueryResult<IGetOrderDetailData>>(initialState);

export const QUERY_KEY_RESTAURANT_ORDER_DETAIL = "restaurantOrderDetail";
const staleTime = 10 * 60 * 1000;

function RestaurantOrderDetailDataProvider({children}: {children: JSX.Element}) {
  const result = useOrderDetailResult({
    queryKey: QUERY_KEY_RESTAURANT_ORDER_DETAIL,
    staleTime,
  });

  return (
    <RestaurantOrderDetailDataContext.Provider value={result}>{children}</RestaurantOrderDetailDataContext.Provider>
  );
}

export default RestaurantOrderDetailDataProvider;

export function useRestaurantOrderDetailData() {
  return useContext(RestaurantOrderDetailDataContext);
}
