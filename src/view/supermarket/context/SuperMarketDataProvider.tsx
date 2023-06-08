import {createContext, useContext} from "react";
import {IGetVendorsRes} from "api/getVendors";
import useVendorListResult from "hooks/useVendorListResult";
import {UseInfiniteQueryResult} from "react-query";
import {EVendorsId} from "utils/Const";

interface ISuperMarketDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetVendorsRes> = {};

const SuperMarketDataContext = createContext<UseInfiniteQueryResult<IGetVendorsRes>>(initialState);

export const QUERY_KEY_SUPERMARKET = "supermarket";

export const supermarketSortQuery = "sort";

const staleTime = 10 * 60 * 1000;

function SuperMarketDataProvider({children}: ISuperMarketDataProvider) {
  const result = useVendorListResult({
    categoryId: [EVendorsId.supermarket],
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
