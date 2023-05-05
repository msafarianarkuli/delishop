import {UseInfiniteQueryResult} from "react-query";
import {IGetOrdersRes} from "api/getOrdersList";
import {createContext, useContext} from "react";
import useOrderListResult from "hooks/useOrderListResult";

interface IRestaurantOrderActiveDataProvider {
  children: JSX.Element[];
  queryKey: string;
  categoryId: number[];
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetOrdersRes> = {};

const OrderActiveDataContext = createContext<UseInfiniteQueryResult<IGetOrdersRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function OrderActiveDataProvider(props: IRestaurantOrderActiveDataProvider) {
  const {queryKey, children, categoryId} = props;

  const result = useOrderListResult({
    queryKey,
    categoryId,
    staleTime,
    statusId: [1, 2, 3, 4, 5],
  });

  return <OrderActiveDataContext.Provider value={result}>{children}</OrderActiveDataContext.Provider>;
}

export default OrderActiveDataProvider;

export function useOrderActiveData() {
  return useContext(OrderActiveDataContext);
}
