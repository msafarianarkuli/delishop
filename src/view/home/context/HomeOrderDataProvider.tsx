import React, {createContext, useContext} from "react";
import {UseInfiniteQueryResult} from "react-query";
import {IGetOrdersRes} from "api/getOrdersList";
import useOrderListResult from "hooks/useOrderListResult";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetOrdersRes> = {};

const HomeOrderDataContext = createContext<UseInfiniteQueryResult<IGetOrdersRes>>(initialState);

export const QUERY_KEY_HOME_ORDER = "homeOrder";

const staleTime = 10 * 60 * 1000;

function HomeOrderDataProvider({children}: {children: JSX.Element}) {
  const result = useOrderListResult({
    categoryId: 1,
    queryKey: QUERY_KEY_HOME_ORDER,
    staleTime,
    statusId: [3, 4, 5],
  });

  return <HomeOrderDataContext.Provider value={result}>{children}</HomeOrderDataContext.Provider>;
}

export default HomeOrderDataProvider;

export function HomeOrderData() {
  return useContext(HomeOrderDataContext);
}
