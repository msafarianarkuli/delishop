import React, {createContext, useContext} from "react";
import {UseQueryResult} from "react-query";
import {IGetOrderDetailData} from "types/interfaceOrderDetail";
import useOrderDetailResult from "hooks/useOrderDetailResult";
import {QUERY_KEY_RESTAURANT_ORDER_DETAIL} from "view/restaurantOrderDetail/component/RestaurantOrderDetailDataProvider";

// @ts-ignore
const initialState: UseQueryResult<IGetOrderDetailData> = {};

const RestaurantOrderRateDataContext = createContext<UseQueryResult<IGetOrderDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function RestaurantOrderRateDataProvider({children}: {children: JSX.Element}) {
  const result = useOrderDetailResult({
    queryKey: QUERY_KEY_RESTAURANT_ORDER_DETAIL,
    staleTime,
  });

  return <RestaurantOrderRateDataContext.Provider value={result}>{children}</RestaurantOrderRateDataContext.Provider>;
}

export default RestaurantOrderRateDataProvider;

export function useRestaurantOrderRateData() {
  return useContext(RestaurantOrderRateDataContext);
}
