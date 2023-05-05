import {createContext, useContext} from "react";
import {UseQueryResult} from "react-query";
import {IGetOrderDetailData} from "types/interfaceOrderDetail";
import useOrderDetailResult from "hooks/useOrderDetailResult";
import {QUERY_KEY_ORDER_DETAIL} from "view/orderDetail/context/OrderDetailDataProvider";

// @ts-ignore
const initialState: UseQueryResult<IGetOrderDetailData> = {};

const OrderRateDataContext = createContext<UseQueryResult<IGetOrderDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function OrderRateDataProvider({children}: {children: JSX.Element}) {
  const result = useOrderDetailResult({
    queryKey: QUERY_KEY_ORDER_DETAIL,
    staleTime,
  });

  return <OrderRateDataContext.Provider value={result}>{children}</OrderRateDataContext.Provider>;
}

export default OrderRateDataProvider;

export function useOrderRateData() {
  return useContext(OrderRateDataContext);
}
