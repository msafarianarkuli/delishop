import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetVendorsRes} from "api/getVendors";
import useVendorListResult from "hooks/useVendorListResult";

interface ISuperMarketDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetVendorsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SuperMarketDataContext = createContext<IDataContextProvider<IGetVendorsRes>>(initialState);

export const QUERY_KEY_SUPERMARKET = "supermarket";

export const supermarketSortQuery = "sort";

const staleTime = 10 * 60 * 1000;

function SuperMarketDataProvider({children}: ISuperMarketDataProvider) {
  const result = useVendorListResult({
    categoryId: 2,
    queryKey: QUERY_KEY_SUPERMARKET,
    filterQuery: [supermarketSortQuery],
    staleTime,
  });

  return <SuperMarketDataContext.Provider value={result}>{children}</SuperMarketDataContext.Provider>;
}

export default SuperMarketDataProvider;

export function useSupermarketData() {
  return useContext(SuperMarketDataContext);
}
