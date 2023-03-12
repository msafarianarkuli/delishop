import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import getSupermarketDetail from "api/getSupermarketDetail";

const initialState: IDataContextProvider<IGetSupermarketDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketDetailDataContext = createContext<IDataContextProvider<IGetSupermarketDetailData>>(initialState);

export const QUERY_KEY_SUPERMARKET_DETAIL = "supermarketDetail";
const staleTime = 10 * 60 * 1000;

function SupermarketDetailDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [QUERY_KEY_SUPERMARKET_DETAIL, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return <SupermarketDetailDataContext.Provider value={result}>{children}</SupermarketDetailDataContext.Provider>;
}

export default SupermarketDetailDataProvider;

export function useSupermarketDetailData() {
  return useContext(SupermarketDetailDataContext);
}
