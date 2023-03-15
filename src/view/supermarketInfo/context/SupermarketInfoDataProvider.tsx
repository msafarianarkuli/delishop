import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";

const initialState: IDataContextProvider<IGetSupermarketDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketInfoDataContext = createContext<IDataContextProvider<IGetSupermarketDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function SupermarketInfoDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [QUERY_KEY_SUPERMARKET_DETAIL, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return <SupermarketInfoDataContext.Provider value={result}>{children}</SupermarketInfoDataContext.Provider>;
}

export default SupermarketInfoDataProvider;

export function useSupermarketInfoData() {
  return useContext(SupermarketInfoDataContext);
}
