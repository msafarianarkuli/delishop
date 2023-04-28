import React, {createContext, useContext} from "react";
import {UseInfiniteQueryResult} from "react-query";
import {IGetVendorsRes} from "api/getVendors";
import useVendorListResult from "hooks/useVendorListResult";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetVendorsRes> = {};

const HomeBestDataContext = createContext<UseInfiniteQueryResult<IGetVendorsRes>>(initialState);

export const QUERY_KEY_HOME_BEST = "homeBest";

const staleTime = 10 * 60 * 1000;

function HomeBestDataProvider({children}: {children: JSX.Element}) {
  const result = useVendorListResult({
    categoryId: 1,
    queryKey: QUERY_KEY_HOME_BEST,
    staleTime,
    withLocation: false,
    initialFilter: {
      sort: "point",
    },
  });

  return <HomeBestDataContext.Provider value={result}>{children}</HomeBestDataContext.Provider>;
}

export default HomeBestDataProvider;

export function useHomeBestData() {
  return useContext(HomeBestDataContext);
}
