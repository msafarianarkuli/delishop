import React, {createContext, useContext} from "react";
import {UseInfiniteQueryResult} from "react-query";
import {IGetOrdersRes} from "api/getOrdersList";
import useOrderListResult from "hooks/useOrderListResult";

interface IOrderPreviousDataProvider {
  children: JSX.Element;
  queryKey: string[];
  categoryId: number[];
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetOrdersRes> = {};

const OrderPreviousDataContext = createContext<UseInfiniteQueryResult<IGetOrdersRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function OrderPreviousDataProvider(props: IOrderPreviousDataProvider) {
  const {queryKey, children, categoryId} = props;

  const result = useOrderListResult({
    queryKey,
    categoryId,
    staleTime,
    statusId: [6, 7, 8],
  });

  return <OrderPreviousDataContext.Provider value={result}>{children}</OrderPreviousDataContext.Provider>;
}

export default OrderPreviousDataProvider;

export function useOrderPreviousData() {
  return useContext(OrderPreviousDataContext);
}
