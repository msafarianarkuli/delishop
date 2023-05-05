import {UseQueryResult} from "react-query";
import {IGetOrderDetailData} from "types/interfaceOrderDetail";
import {createContext, useContext} from "react";
import useOrderDetailResult from "hooks/useOrderDetailResult";

// @ts-ignore
const initialState: UseQueryResult<IGetOrderDetailData> = {};

const OrderDetailDataContext = createContext<UseQueryResult<IGetOrderDetailData>>(initialState);

export const QUERY_KEY_ORDER_DETAIL = "orderDetail";
const staleTime = 10 * 60 * 1000;

function OrderDetailDataProvider({children}: {children: JSX.Element}) {
  const result = useOrderDetailResult({
    queryKey: QUERY_KEY_ORDER_DETAIL,
    staleTime,
  });

  return <OrderDetailDataContext.Provider value={result}>{children}</OrderDetailDataContext.Provider>;
}

export default OrderDetailDataProvider;

export function useOrderDetailData() {
  return useContext(OrderDetailDataContext);
}
