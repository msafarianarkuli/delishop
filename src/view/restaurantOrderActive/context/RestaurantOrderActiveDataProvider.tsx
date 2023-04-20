import React, {createContext, useContext} from "react";
import {IGetOrdersRes} from "api/getOrdersList";
import {UseInfiniteQueryResult} from "react-query";
import useOrderListResult from "hooks/useOrderListResult";

interface IRestaurantOrderActiveDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetOrdersRes> = {};

const RestaurantOrderActiveData = createContext<UseInfiniteQueryResult<IGetOrdersRes>>(initialState);

export const QUERY_KEY_ORDERS_ACTIVE = "ordersActive";

const staleTime = 10 * 60 * 1000;

function RestaurantOrderActiveDataProvider({children}: IRestaurantOrderActiveDataProvider) {
  const result = useOrderListResult({
    queryKey: QUERY_KEY_ORDERS_ACTIVE,
    categoryId: 1,
    staleTime,
    statusId: [1, 2, 3, 4, 5],
  });

  return <RestaurantOrderActiveData.Provider value={result}>{children}</RestaurantOrderActiveData.Provider>;
}

export default RestaurantOrderActiveDataProvider;

export function useRestaurantOrderActiveData() {
  return useContext(RestaurantOrderActiveData);
}
